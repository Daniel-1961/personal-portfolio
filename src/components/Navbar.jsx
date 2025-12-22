import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-3xl border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <h1 className="text-2xl font-bold text-white"><Link to="/">MyPortfolio</Link></h1>

    {/* Links */}
    <ul className="hidden md:flex space-x-8 text-gray-300">
      <li><a href="home" className="hover:text-white">Home</a></li>
      <li><a href="about" className="hover:text-white">About</a></li>
      <li><a href="projects" className="hover:text-white">Projects</a></li>
      <li><a href="contact" className="hover:text-white">Contact</a></li>
    </ul>
  </div>
</nav>

  );
}

