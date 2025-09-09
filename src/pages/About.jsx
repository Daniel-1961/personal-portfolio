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
                <p className="text-white leading-relaxed mb-4">
                    I’m a passionate full-stack developer with a love for building
                    clean, functional, and user-friendly web applications. I specialize
                    in React, Node.js, and TailwindCSS.
                </p>
                <p className="text-white leading-relaxed mb-6">
                       As part of 10Academy AI Mastery Program I completed an intensive 3-month AI and Data Science training program, 
                        where I worked on real-world projects in machine learning, data analysis, and model deployment. 
                        Through collaborative teamwork, I gained hands-on experience in building end-to-end solutions, 
                        applying modern tools, and working with industry-level workflows.
                </p>
                    <a
                    href="/resume.pdf"
                    download
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Download CV
                </a>
                <div>
                <h3 className=" mt-3 text-xl font-semibold text-white mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {["React", "Node.js", "Tailwind CSS", "Python", "TensorFlow", "Git" ,"vite","sklearn","DVC","Streamlit","Matplotlib","seaborn","pandas","PostgreSQL"].map((skill, index) => (
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