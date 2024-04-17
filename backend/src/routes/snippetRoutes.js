// src/routes/snippetRoutes.js
const express = require("express");
const { generateCodeSnippet } = require("../services/openaiService");
const router = express.Router();

router.post("/", async (req, res) => {
  const { prompt } = req.body;
  try {
    const codeSnippet = await generateCodeSnippet(prompt);
    res.json({ codeSnippet });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate code snippet" });
  }
});

module.exports = router;
