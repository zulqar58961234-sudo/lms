export default function Graphic() {
  const modules = [
    {
      title: "HTML Fundamentals",
      desc: "Learn structure of web pages and semantic HTML.",
    },
    {
      title: "CSS & Responsive Design",
      desc: "Design responsive layouts using modern CSS.",
    },
    {
      title: "Tailwind CSS",
      desc: "Build fast and clean UIs using utility-first CSS.",
    },
    {
      title: "JavaScript Basics",
      desc: "Learn logic, DOM manipulation and events.",
    },
    {
      title: "React.js",
      desc: "Build component-based dynamic interfaces.",
    },
    {
      title: "Next.js",
      desc: "Production-ready React framework.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Web Development Learning Path
        </h1>
        <p className="text-gray-600 mt-2">
          Follow this step-by-step roadmap like a professional LMS
        </p>
      </div>

      {/* Modules */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
          >
            <span className="text-sm font-semibold text-blue-600">
              Step {i + 1}
            </span>

            <h3 className="text-xl font-bold mt-2 text-gray-800">
              {mod.title}
            </h3>

            <p className="text-gray-600 mt-2 mb-4">
              {mod.desc}
            </p>

            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900">
              Start Learning
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 mt-12">
        🎯 Complete all modules to become job-ready
      </p>
    </main>
  );
}
