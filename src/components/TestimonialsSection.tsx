// components/TestimonialsSection.tsx

const TestimonialsSection = () => {
  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      position: "Software Engineer",
      company: "TechCorp",
      testimonial:
        "CodeWeave saved me hours of work. The snippets are always spot on and save me from repetitive coding tasks.",
    },
    {
      id: 2,
      name: "John Smith",
      position: "Lead Developer",
      company: "Innovatech",
      testimonial:
        "The accuracy of CodeWeave’s AI in understanding our requirements is impressive. It’s like having an extra team member who’s always ready to help.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Hear From Our Users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <blockquote className="text-gray-600 italic mb-4">
                "{testimonial.testimonial}"
              </blockquote>
              <div className="flex items-center justify-center mt-4">
                {/* Placeholder for an avatar; replace with actual images as needed */}
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-3">
                  {/* Add an img tag here if you have user images */}
                </div>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
