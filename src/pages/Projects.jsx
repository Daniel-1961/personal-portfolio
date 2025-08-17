// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React & TailwindCSS.",
    image: "/portfolio.png", // place images in public folder
    demo: "https://your-demo-link.com",
    code: "https://github.com/yourname/portfolio",
  },
  {
    title: "E-commerce App",
    description: "Full-stack app with React, Node, and MongoDB.",
    image: "/ecommerce.png",
    demo: "https://your-demo-link.com",
    code: "https://github.com/yourname/ecommerce",
  },
  {
    title: "Blog Platform",
    description: "A Markdown-based blog platform with authentication.",
    image: "/blog.png",
    demo: "https://your-demo-link.com",
    code: "https://github.com/yourname/blog",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      {/* Grid Layout */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-2 flex-grow">
              {project.description}
            </p>

            {/* Links */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
              >
                Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition text-sm"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
