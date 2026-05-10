const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

/* Initialize Gemini AI */
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

/* AI Endpoint */
app.post("/agent", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    const prompt = `
You are an advanced neurological medical assistant.

Analyze this patient message:

"${message}"

Return:
1. Severity Level
2. Risk Score (0-100)
3. Medical Insight
4. Emergency Recommendation

Keep response concise and professional.
`;

    const result = await model.generateContent({
      prompt,
      temperature: 0.2, // makes responses more deterministic
      maxOutputTokens: 500,
    });

    // Some versions of the API return response differently
    const aiText = result?.response?.[0]?.outputText || result?.response?.text?.() || "";

    /* SIMULATED BLOCKCHAIN */
    const fakeCID = "Qm" + Math.random().toString(36).substring(2, 12);
    const fakeTX = "0x" + Math.random().toString(16).substring(2, 14);

    res.json({
      success: true,
      cid: fakeCID,
      txHash: fakeTX,
      aiAnalysis: aiText,
    });
  } catch (err) {
    console.error("AI processing error:", err);
    res.status(500).json({
      success: false,
      error: "AI processing failed",
    });
  }
});

/* START SERVER */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 NeuroCare AI Backend running on port ${PORT}`);
});