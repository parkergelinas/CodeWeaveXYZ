// components/FaqSection.tsx

import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why do I need CodeWeave?",
      answer:
        "CodeWeave provides an AI-powered coding assistant that helps you create code snippets efficiently, saving you time and reducing errors.",
    },
    {
      question: "Does it work for one-time purchases?",
      answer:
        "Yes, CodeWeave can be used for one-time purchase or subscription-based models depending on your needs.",
    },
    {
      question: "How is CodeWeave different from other snippet tools?",
      answer:
        "CodeWeave leverages cutting-edge AI to generate code snippets that are not only syntactically correct but also contextually aware of your coding style and project structure.",
    },
    {
      question:
        "Is there a limit to the number of snippets CodeWeave can generate?",
      answer:
        "Our Professional and Enterprise plans offer a generous quota that should satisfy most development needs, with options to extend if necessary.",
    },
    {
      question: "Can I integrate CodeWeave into my existing workflow?",
      answer:
        "Yes, CodeWeave offers seamless integration options for most popular IDEs and development environments.",
    },
    {
      question: "How secure is CodeWeave?",
      answer:
        "Security is our top priority. CodeWeave uses end-to-end encryption to keep your data safe.",
    },
    {
      question: "Can I use CodeWeave with my team?",
      answer:
        "Yes, CodeWeave supports team collaboration with shared snippet libraries and team management features.",
    },

    // ... other FAQ items
  ];

  return (
    <div id="faq">
      <div className="container mx-auto p-5 m-15">
        <h2 className="text-3xl font-bold text-center text-code-blue mb-8">
          Frequently Asked Questions
        </h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md mb-4 ${
                activeIndex === index
                  ? "faq-expand faq-enter-active"
                  : "faq-expand faq-leave-active"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <dt className="text-lg font-semibold text-code-indigo cursor-pointer">
                {faq.question}
                <span className="float-right text-code-red">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </dt>
              <dd
                className={`pt-4 text-gray-600 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
