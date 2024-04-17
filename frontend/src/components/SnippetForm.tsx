// components/SnippetForm.tsx
import { useState } from "react";

interface SnippetFormProps {
  onGenerate: (description: string) => Promise<void>;
}

const SnippetForm: React.FC<SnippetFormProps> = ({ onGenerate }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await onGenerate(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="description"
        name="description"
        rows={4}
        className="textarea-class" // Replace with your Tailwind classes
        placeholder="Describe the code snippet you need"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="button-class">
        Generate Snippet
      </button>{" "}
      {/* Replace with your Tailwind classes */}
    </form>
  );
};

export default SnippetForm;
