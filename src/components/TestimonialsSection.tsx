// components/TestimonialsSection.tsx

const TestimonialsSection = () => {
  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Jake Wilson",
      position: "Software Engineer",
      company: "TechCorp",
      testimonial:
        "CodeWeave saved me hours of work. The snippets are always spot on and save me from repetitive coding tasks.",
      image: "/Screenshot_46.jpg", // Path to the image in the public folder
    },
    {
      id: 2,
      name: "Cade Irving",
      position: "Lead Developer",
      company: "Innovatech",
      testimonial:
        "The accuracy of CodeWeave’s AI in understanding our requirements is impressive. It’s like having an extra team member who’s always ready to help.",
      image: "/Screenshot_47.jpg", // Path to the image in the public folder
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-dark-gray">
          Hear From Our Users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <blockquote className="text-gray-600 italic mb-4">
                &quot;{testimonial.testimonial}&quot;
              </blockquote>
              <div className="flex items-center justify-center mt-4">
                <img
                  src={testimonial.image} // Use the image from the testimonial data
                  alt={`Avatar of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="text-lg font-semibold  text-dark-gray">
                    {testimonial.name}
                  </p>
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
