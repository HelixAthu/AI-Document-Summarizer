# Briefme.Ai 📚✨
An AI-powered research assistant that helps you save time by summarizing long, complex documents (like PDFs of research papers) into quick, easy-to-read insights.

---

## 📖 Project Overview
Briefme.Ai is a full‑stack application that takes a research paper in PDF format, extracts the text, and generates a concise AI‑powered summary.

- **Frontend (React + Vite):** Provides the user interface — file upload, a “Summarize✨” button, and a display area for the summary.  
- **Backend (Node.js + Express):** Handles PDF parsing, communicates with Google’s Gemini API, and returns the summary.  
- **AI Integration (Gemini API):** Produces the actual summary from the extracted text.  

---

## 🔧 Backend Features
- **PDF Parsing:** Uses `pdf-parse@1.1.1` to reliably extract text from uploaded PDFs.  
- **Express Server:** Exposes a `/summarize` endpoint that accepts file uploads.  
- **File Upload Handling:** Uses `express-fileupload` to process incoming PDF files.  
- **Gemini API Call:** Sends extracted text to Gemini (`gemini-2.0-flash` or `gemini-2.5-flash`) for summarization.  
- **Error Handling:** Gracefully responds if no file is uploaded, if Gemini returns no candidates, or if something fails.  
- **Debug Logging:** Prints extracted text and raw Gemini responses for easier troubleshooting.  

---

## 🎨 Frontend Features
- **React UI:** Built with Vite for fast development.  
- **File Input:** Lets the user select a PDF.  
- **Summarize Button:** Triggers the backend request.  
- **State Management:** Uses React hooks (`useState`) to store the selected file and the summary text.  
- **Summary Display:** Shows the AI‑generated summary in the UI.  
- **Button Control:** The Summarize button is disabled while waiting for a response, preventing multiple clicks.  
- **Styling:** Includes animated gradient backgrounds and a clean layout.  

---

## 🧩 Workflow
1. User selects a PDF in the frontend.  
2. User clicks **Summarize✨**.  
3. Frontend sends the file to the backend via an HTTP POST request.  
4. Backend extracts text and calls Gemini.  
5. Gemini returns a summary.  
6. Backend sends the summary back to the frontend.  
7. Frontend updates the UI to display the summary.  

---

## 🚀 What You Now Have
- ✅ A working end‑to‑end AI summarizer.  
- ✅ A backend that can parse PDFs and talk to Gemini.  
- ✅ A frontend that uploads files, calls the backend, and displays results.  
- ✅ Error handling and button state management for a smoother user experience.  

---

## 📂 Project Structure
AI_RESEARCH_SUMMARISER/
│
├── backend/         # Node.js backend
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/        # React + Vite frontend
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js

---

## ⚡ Getting Started
Clone the repo and run locally:


# Clone the repository
git clone https://github.com/your-username/Briefme.Ai.git

# Navigate into backend
cd Briefme.Ai/backend

# Install backend dependencies
npm install

# Start backend server
node server.js

# In a new terminal, navigate into frontend
cd ../frontend

# Install frontend dependencies
npm install

# Run development server
npm run dev

---

🌱 Build-in-Public
I’m documenting the entire journey on LinkedIn—sharing progress, lessons learned, and challenges along the way.
Stay tuned for updates and improvements!

---

🤝 Contributing
This project is for personal and educational purposes only.

Commercial use is not allowed.

If you use or adapt any part of this project, please give proper credit to the original author.

---

📜 License
MIT License with the following conditions:

Free to use, modify, and share for personal and educational purposes only.

Commercial use is prohibited.

Proper credit must be given if code is reused or adapted.
