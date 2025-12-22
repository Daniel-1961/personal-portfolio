
import usePageTitle from "../hooks/usePageTitle";
const projects = [
  {title:"E-commerece",
    description:"Full-stack E-commerece app developed with React,Tailwindcss & Node.js ecosystem",
    image:"/e-commerece.png",
    code:"https://github.com/Daniel-1961/E-commerce-.git"

  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React & TailwindCSS.",
    image: "/portfolio.png",
    code: "https://github.com/Daniel-1961/personal-portfolio.git",
  },
  {
    title: "AlphaCare",
    description: "ML Project focuses on developing risk and predictive analytics for AlphaCare Insurance Solutions (ACIS)",
    image: "/AlphaCare.png",
    code: "https://github.com/Daniel-1961/Alpha_care.git",
  },
  {
    title: "Text Processing",
    description: "Text-processing using python natural language processing library",
    image: "/isr.png",
    code: "https://github.com/Daniel-1961/ISR_project.git",
  },
   {
    title: "Stock Market Forecasting and Portfolio Optimization",
    description: `This project focuses on forecasting Tesla (TSLA) stock prices using SARIMA and
     optimizing a diversified investment portfolio consisting of TSLA, SPY (S&P 500 ETF), and BND (Bond ETF)`,
    image: "/tesla.png",
    code: "https://github.com/Daniel-1961/ISR_project.git",
  },
];

const Projects = () => {
  usePageTitle("Projects| Daniel Dawit")
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>

      {/* Grid Layout */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
          >
          
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>

            
            <p className="text-gray-600 text-sm mt-2 flex-grow">
              {project.description}
            </p>

          
            <div className="mt-4 flex gap-4">
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
