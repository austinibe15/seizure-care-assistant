const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
   model: "gemini-1.5-flash"
});

async function analyzeHealthMessage(message) {

  const prompt = `
You are an AI seizure-care medical assistant.

Analyze the patient's message.

Provide:
1. Risk level
2. Short medical observation
3. Recommended action

Patient message:
"${message}"

Keep response short, clear, and medical.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = {
  analyzeHealthMessage
};