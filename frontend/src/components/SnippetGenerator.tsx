// components/SnippetGenerator.tsx

import React, { useState } from "react";

const SnippetGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [snippet, setSnippet] = useState<string>("");

  const generateSnippet = async () => {
    const response = await fetch("/api/generate-snippet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    if (response.ok) {
      setSnippet(data.result);
    } else {
      console.error("Failed to generate snippet:", data.error);
    }
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the code you want to generate..."
      />
      <button onClick={generateSnippet}>Generate Snippet</button>
      {snippet && <pre>{snippet}</pre>}
    </div>
  );
};

export default SnippetGenerator;
