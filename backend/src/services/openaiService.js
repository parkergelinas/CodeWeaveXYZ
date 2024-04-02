const axios = require("axios");
const config = require("../config");

const OPENAI_API_KEY = config.OPENAI_API_KEY; // Replace with your OpenAI API key

const openai = axios.create({
  baseURL: "https://api.openai.com/v1/",
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
});

const generateCodeSnippet = async (prompt) => {
  try {
    const response = await openai.post(
      "/engines/text-davinci-003/completions",
      {
        prompt,
        max_tokens: 150, // Adjust as needed
      }
    );
    return response.data.choices[0].text.trim(); // Extract generated text
  } catch (err) {
    console.error("Error generating code snippet:", err.response.data);
    throw err;
  }
};

module.exports = { generateCodeSnippet };
