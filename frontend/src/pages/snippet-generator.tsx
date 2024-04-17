// pages/snippet-generator.tsx
import ProtectedRoute from "../components/ProtectedRoute";
import SnippetForm from "../components/SnippetForm";
import { useState } from "react";

const SnippetGeneratorPage = () => {
  const [snippet, setSnippet] = useState("");

  const handleSnippetGeneration = async (description: string) => {
    // Here you would call your API endpoint to generate the snippet
    // This is a placeholder for your API call
    try {
      const response = await fetch("/api/generate-snippet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate snippet");
      }

      const data = await response.json();
      setSnippet(data.snippet);
    } catch (error) {
      console.error(error);
      setSnippet("Error generating snippet.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="page-class">
        {" "}
        {/* Replace with your Tailwind classes */}
        <h1 className="title-class">Snippet Generator</h1>{" "}
        {/* Replace with your Tailwind classes */}
        <SnippetForm onGenerate={handleSnippetGeneration} />
        {snippet && <pre className="snippet-class">{snippet}</pre>}
      </div>
    </ProtectedRoute>
  );
};

export default SnippetGeneratorPage;
