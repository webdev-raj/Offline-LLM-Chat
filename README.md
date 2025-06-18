# 🧠 Offline LLM Chat

A simple **offline AI chatbot** built with [@mlc-ai/web-llm](https://www.npmjs.com/package/@mlc-ai/web-llm). This project demonstrates how to run a large language model (LLM) entirely inside your browser using **WebGPU**, without needing an internet connection after the first setup.

## 📌 Features

- ✅ Works completely offline after model download
- 🧠 Loads LLM into browser via WebGPU
- 💬 Clean React-based UI
- 🖥️ No backend or server needed
- 🌐 No internet required after first run

---

## ⚠️ Important Notes Before Use

> This is an experimental project and may not work smoothly on all machines.

- ⬇️ You’ll need to download ~4GB of model weights from Hugging Face on the first run
- 🧠 It runs using **WebGPU**, which relies on your **GPU**
- 🐢 **Response time is slow**, especially on lower-end devices
- 🔁 The model is loaded from cache each time, which also takes time
- 💻 Can **cause lag** or freeze on laptops with weak GPUs or limited memory

---

## 📦 Tech Stack

- **Frontend**: React
- **AI Runtime**: [`@mlc-ai/web-llm`](https://www.npmjs.com/package/@mlc-ai/web-llm)
- **Rendering**: WebGPU (modern browsers only)

---

Here you go, Raj — here’s the **Markdown code** you can copy-paste directly into your `README.md` to add the **Setup Guide**, **Credits**, and **License** sections (all cleanly written and styled):

---


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/webdev-raj/Offline-LLM-Chat.git
cd Offline-LLM-Chat
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
``` 

---

## 🙏 Credits

* [@mlc-ai/web-llm](https://github.com/mlc-ai/web-llm) — for enabling in-browser LLM inference using WebGPU.
* Inspired by examples and docs from the [MLC AI GitHub repo](https://github.com/mlc-ai/web-llm).

---