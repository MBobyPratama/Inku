import express from 'express'
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() })
  } catch (error) {
    console.error('Error generating contents:', error);
    res.status(500).json({ error: 'Failed to generate contents' })
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});