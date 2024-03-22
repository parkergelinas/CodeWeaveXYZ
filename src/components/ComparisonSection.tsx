// components/ComparisonSection.tsx

const ComparisonSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center fade-in-slide-up">
          Tired of the Tedium of Coding Snippets?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10">
          {/* Drawbacks of manual coding */}
          <div className="bg-red-100 rounded-lg p-6 w-full md:w-1/2">
            <h3 className="font-bold text-xl mb-4 text-red-500 ">
              Coding without CodeWeave
            </h3>
            <ul className="text-left mb-6">
              <li className="text-red-500 my-2">
                ❌ Repetitive boilerplate code
              </li>
              <li className="text-red-500 my-2">❌ Time-consuming bug fixes</li>
              <li className="text-red-500 my-2">
                ❌ Inconsistent coding patterns
              </li>
              {/* ... more drawbacks */}
            </ul>
          </div>

          {/* Benefits of using CodeWeave */}
          <div className="bg-green-100 rounded-lg p-6 w-full md:w-1/2">
            <h3 className="font-bold text-xl mb-4 text-green-500">
              Coding with CodeWeave
            </h3>
            <ul className="text-left mb-6">
              <li className="text-green-500 my-2">
                ✔ AI-powered code generation
              </li>
              <li className="text-green-500 my-2">
                ✔ Quick integration and deployment
              </li>
              <li className="text-green-500 my-2">
                ✔ Consistent and scalable codebase
              </li>
              {/* ... more benefits */}
            </ul>
          </div>
        </div>
        {/* Testimonial section */}
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
          <blockquote className="text-lg italic text-gray-600 mt-10">
            <p className="mb-4">
              "Incorporating CodeWeave into my workflow has been a game-changer.
              The amount of time saved by not having to manually write or debug
              boilerplate code is phenomenal. Highly recommended for any
              developer looking to boost productivity!"
            </p>
            <div className="flex items-center mt-4">
              <div className="flex-none w-12 h-12 rounded-full bg-gray-300"></div>{" "}
              {/* Placeholder for an avatar image */}
              <div className="ml-4">
                <p className="text-sm font-semibold">Alex Johnson</p>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
