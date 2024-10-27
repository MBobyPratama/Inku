import express from "express";
import dotenv from "dotenv";
import path from "path"; // Import path module
import { fileURLToPath } from "url"; // Import fileURLToPath from url module
import { GoogleGenerativeAI } from "@google/generative-ai";

const __filename = fileURLToPath(import.meta.url); // Get the filename
const __dirname = path.dirname(__filename); // Get the directory name from the filename

dotenv.config();
console.log("API_KEY:", process.env.API_KEY);

const app = express(); // Create Express app
const port = 3000;

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "../client/dist"))); // Correct path for static files

// Endpoint to generate content
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await model.generateContent(prompt);
    res.json({ result: result.response.text() });
  } catch (error) {
    console.error("Error generating contents:", error);
    res.status(500).json({ error: "Failed to generate contents" });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  c;
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
