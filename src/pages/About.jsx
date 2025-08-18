import usePageTitle from "../hooks/usePageTitle";
export default function About (){
    usePageTitle("About| Daniel Dawit")
    return(
        <section id="about" className="py-12 px-6 md:px-12 ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-full overflow-x-hidden border-2 border-blue-500 shadow-lg">
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
                             When I’m not coding, I enjoy hiking, photography, and exploring new
                             tech trends.
                        </p>
                         <a
                            href="/resume.pdf"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
    
        </section>
    );
}