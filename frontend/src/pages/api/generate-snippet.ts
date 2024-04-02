// pages/api/generate-snippet.ts

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAIApi from "openai";

// Define the expected structure for the request body
interface GenerateSnippetRequestBody {
  prompt: string;
}

// Define the structure for the successful response body
interface GenerateSnippetResponseBody {
  result: string;
}

// Define the structure for the error response body
interface ErrorResponseBody {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateSnippetResponseBody | ErrorResponseBody>
) {
  if (req.method === "POST") {
    const { prompt } = req.body as GenerateSnippetRequestBody;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003", // Replace with GPT-4 model when available
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 150,
      });

      res.status(200).json({ result: response.data.choices[0].text.trim() });
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      res.status(500).json({ error: "Error generating snippet" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
