const pdfParse = require('pdf-parse');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');

dotenv.config();
const app = express();
app.use(cors());
app.use(fileUpload());

app.post( "/summarize", async(req, res) => 
    {
        // Check if a file is uploaded
        if (!req.files || !req.files.pdf)
        {
            return res.status(400).send("No PDF Uploaded");
        }

        // Get text from the pdf
        const pdfBuffer = req.files.pdf.data;
        const data = await pdfParse(pdfBuffer);
        const text = data.text.slice(0, 2000) // limit length
        

        // Call gemini api
        try
        {
            const apiKey = process.env.GEMINI_API_KEY; 

            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                {
                    contents: [{ parts: [{ text: `Summarize this research paper to 200 words:\n${text}` }] }]
                }
            );

            // Fallback if no candidates or empty candidates array
            const candidates = response.data.candidates;
            if (!candidates || candidates.length === 0) {
                return res.status(500).send("An unexpected error occurred. Please try again later.");
            }

            const summary = response.data.candidates[0].content.parts[0].text;
            res.json({summary});
        }
        catch(e)
        {
            res.status(500).send(e.message);
        }
    }
);

app.listen(5000, () => console.log("Backend running on port 5000"));