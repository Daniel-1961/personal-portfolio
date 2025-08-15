
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      {/* Name & Tagline */}
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Hi, I'm <span className="text-blue-600">Daniel Dawit</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-lg mb-8">
        I'm a passionate full-stack developer specializing in creating
        responsive, modern web applications with React and Tailwind CSS.
      </p>

      {/* Call to Action */}
      <div className="flex gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all"
        >
          Contact Me
        </Link>
      </div>

      {/* Small Animation */}
      <div className="mt-12 animate-bounce text-gray-500">
        ↓ Scroll down to explore
      </div>
    </section>
  );
}
