import usePageTitle from "../hooks/usePageTitle";
export default function About (){
    usePageTitle("About| Daniel Dawit")
    return(
        <section id="about" className="py-12 px-6 md:px-12 ">
       <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="lg:-mt-30 w-35 h-40 rounded-full overflow-x-hidden border-3 border-blue-500 shadow-lg">
            <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            />
            </div>
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white">
                    Hi, I'm Daniel Dawit
                </h2>
<p className="text-white leading-relaxed mb-6">
        I’m a backend-focused full-stack developer with a strong interest in building
        clean, scalable, and reliable web applications. I primarily work with
        Node.js and React, focusing on API development, data handling, and application
        logic, while using Tailwind CSS to deliver simple and responsive user
        interfaces.
</p>

<p className="text-white leading-relaxed mb-6">
        As part of the 10Academy AI Mastery Program, I completed an intensive
        three-month training in AI and Data Science, where I worked on real-world
        projects involving data analysis, machine learning concepts, and model
        deployment. Through collaborative team projects, I gained hands-on experience
        with end-to-end workflows and developed a growing interest in applying AI and
        machine learning techniques to backend systems.
</p>

               
                    <a
                    href="/"
                    download
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Download CV
                </a>
                <div>
                <h3 className=" mt-3 text-xl font-semibold text-white mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[ "JavaScript (ES6)","React", "Tailwind CSS","Node.js", "REST APIs", "Python", "TensorFlow", "Git&Github" , "Relational DBMS","vite","sklearn","DVC","Streamlit","Matplotlib","seaborn","pandas"].map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-xl border border-gray-700 hover:bg-gray-700 transition">
                {skill}
                </span>
                ))}
                </div>
                </div>
                </div>
            </div>
    
        </section>
    );
}
