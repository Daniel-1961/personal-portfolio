// Home.jsx
import { ArrowDown } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";
import { use } from "react";
export default function Home() {
  usePageTitle("Home| Daniel Dawit");
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center text-white"
    >
      {/* Name & Tagline */}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
        Hi, I’m <span className="text-indigo-400">Daniel Dawit</span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl">
        A passionate <span className="text-pink-400">Full-Stack Developer </span>  
        who loves building interactive and scalable web apps.
      </p>

      {/* Call to Action */}
      <div className="mt-8 flex gap-4">
        <a
          href="projects"
          className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 
                     text-white font-medium transition"
        >
          View Projects
        </a>
        <a
          href="contact"
          className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 
                     text-gray-300 font-medium transition"
        >
          Contact Me
        </a>
        
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-400">
          <ArrowDown size={28} />
          <span className="text-sm mt-1">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}

