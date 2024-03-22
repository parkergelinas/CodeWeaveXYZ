// components/MainSection.tsx

const MainSection = () => {
  // Replace with your actual Stripe checkout URL
  const stripeCheckoutUrl = "https://buy.stripe.com/test_123";

  return (
    <div className="flex items-center justify-center p-20 bg-main-gradient min-h-screen text-center">
      <div>
        <h1 className="text-5xl font-bold text-white mb-4">
          Supercharge Your Projects with AI-Driven Code Snippets
        </h1>
        <p className="text-md text-gray-200 mb-8">
          CodeWeave brings the power of AI to your development workflow,
          generating code snippets that save you time and keep you focused on
          creative solutions.
        </p>
        <ul className="mb-8 text-gray-200">
          <li>✔ Instant AI code generation</li>
          <li>✔ Streamline development tasks</li>
          <li>✔ Enhance code quality and consistency</li>
        </ul>
        <button
          className="bg-green-500 text-white px-8 py-3 rounded font-bold shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
          onClick={() => (window.location.href = stripeCheckoutUrl)}
        >
          Try CodeWeave Now
        </button>
        <p className="text-gray-200 text-sm mt-4">
          Join the community of developers enhancing their workflow with AI
        </p>
      </div>
    </div>
  );
};

export default MainSection;
