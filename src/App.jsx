import * as webllm from "@mlc-ai/web-llm";
import { useState, useEffect } from 'react';
import Header from "./Components/Header";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatMessage, setChatMessage] = useState([
    {
      role: "system",
      content: "Welcome to the chat! I'm Your personal Offline Assistant"
    },
  ]);

  const [engine, setEngine] = useState(null);

  useEffect(() => {
    const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";
    webllm.CreateMLCEngine(
      selectedModel,
      {
        initProgressCallback: (initpro) => {
          console.log(initpro)
        }
      }
    ).then((engine) => {
      setEngine(engine)
    })
  }, [])

  async function messageFromLlm() {
    const temMessage = [...chatMessage]
    console.log(temMessage)
    temMessage.push({
      role: "user",
      content: inputValue
    })
    const reply = await engine.chat.completions.create({
      messages: temMessage
    })
    console.log(reply.choices[0].message.content)
    console.log(reply.choices[0].message.role)
    setChatMessage(temMessage)
    temMessage.push({
      role:reply.choices[0].message.role,
      content:reply.choices[0].message.content
    })
    setInputValue("")
  }


  return (
    <>
    <Header />
      <main>
        <section className='conversation_area'>
          <div className='messages'>
            {
              chatMessage.map((message, index) => {
                return (
                  <div className={`message ${message.role}`} key={index}>
                    <h4>{message.role}</h4>
                    <h1>{message.content}</h1>
                  </div>
                )
              })
            }
          </div>
          <div className='input_area'>
            <input value={inputValue} type="text" placeholder='chat with llm model'
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  messageFromLlm()
                }
              }}
            />
            <button onClick={() => {
              messageFromLlm()

            }}>send</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
