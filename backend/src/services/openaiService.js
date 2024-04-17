// src/services/openaiService.js
const axios = require("axios");

async function generateCodeSnippet(prompt) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v4/completions",
      {
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

module.exports = { generateCodeSnippet };
