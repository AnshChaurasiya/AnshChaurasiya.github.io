# LLM-Based-Art-Generator

# 🎨 GenArtVerse

**GenArtVerse** is an AI-powered, voice-enabled chat application that lets users generate **poetry** or **images** from text prompts — all through a sleek and dynamic UI. With integrated voice recognition, typing animations, dark/light themes, and both image and text generation via AI, this app merges creativity with seamless user interaction.

---

## ✨ Features

- 🎤 **Voice Input**: Speak your prompt instead of typing it.
- 🧠 **AI Poem Generation**: Uses Azure-hosted LLM (LLaMA-3.3-70B-Instruct) to generate beautiful poems.
- 🖼️ **AI Image Generation**: Uses Stable Diffusion (via HuggingFace's `diffusers`) for text-to-image synthesis.
- 💬 **Chat UI**: Interactive chat interface built with React.
- 🎭 **Typing Effects**: Smooth, animated typing and loading feedback.
- 🌙 **Dark Mode**: Toggle between light and dark themes.
- 🔁 **Back Navigation**: Easily restart or change generation mode.

---

## 🛠️ Tech Stack

### 💡 Frontend

- **React** (Vite or Create React App)
- Custom chat components
- Voice input via browser APIs

### 🧠 Backend

- **FastAPI** (Python)
- Azure Inference API for LLM (LLaMA)
- Hugging Face `diffusers` for image generation
- `speech_recognition` (Google Speech API)


---

## 🚀 Getting Started

### 1️⃣ Backend Setup

**Prerequisites**:
- Python 3.9+
- CUDA-compatible GPU (for image generation) / CPU (If GPU is Absent)
- Azure Inference API Key
- Hugging Face Account (for Stable Diffusion access)

#### For Windows (Command Prompt)

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt

```

#### For Mac/ (Command Prompt)

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

```

#### START SERVER
```bash
uvicorn main:app --reload --port 8000

```

### 1️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start

```

## 🤝 Contributing
**PRs and ideas are welcome! Open issues or improvements for better prompts, UI, or model integrations.**


## 🧠 Future Enhancements
#### Add downloadable poem/image export

#### Add more model options (e.g., DALL·E, GPT-4)

#### Deploy to cloud (Render, Vercel, etc.)

## 📜 License
### MIT License


---

### If you love this work
### [Buy me a coffee ❤️](https://buymeacoffee.com/anshcode)
