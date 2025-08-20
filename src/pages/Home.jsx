// Home.jsx
import { ArrowDown } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";
import { motion } from "framer-motion";
export default function Home() {
  usePageTitle("Home| Daniel Dawit");
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center text-white"
    >
      {/* Name & Tagline */}
      <motion.h1 
    initial={{opacity:0, y:20}} 
    animate={{opacity:1, y:0}} 
    transition={{duration:0.8}}
    className="text-5xl font-bold text-white"
  >
    Hi, I’m <span className="text-blue-400">Daniel Dawit</span>
  </motion.h1>

  <motion.p 
    initial={{opacity:0}} 
    animate={{opacity:1}} 
    transition={{delay:0.5, duration:0.8}}
    className="mt-4 text-lg text-gray-300 max-w-2xl"
  >
    <span className="text-white font-bold">Junior Full-Stack Developer & Machine Learning Enthusiast. </span><br />
    I build modern web apps with React, Node.js, and Tailwind, and 
    explored AI/ML through real projects at 10Academy.
    
   
  </motion.p>

  <div className="flex gap-4 mt-6">
    <motion.a 
      whileHover={{scale:1.1}} 
      href="/projects"
      className="px-6 py-2 bg-blue-500 rounded-lg shadow-md"
    >
      View Projects
    </motion.a>
    <motion.a 
      whileHover={{scale:1.1}} 
      href="/contact"
      className="px-6 py-2 border border-gray-500 rounded-lg"
    >
      Contact Me
    </motion.a>
  </div>
       
    </section>
  );
}

