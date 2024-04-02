const openaiService = require("../services/openaiService");

exports.generateSnippet = async (req, res) => {
  try {
    const { description } = req.body;
    const prompt = `Generate code snippet for: ${description}`;
    const codeSnippet = await openaiService.generateCodeSnippet(prompt);
    res.status(200).json({ codeSnippet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error generating code snippet" });
  }
};
