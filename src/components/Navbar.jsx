import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-3xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-white">
          <Link to="/">MyPortfolio</Link>
        </h1>

        <div className="flex items-center">
        
          <ul className="hidden md:flex space-x-8 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded hover:bg-white/10 ml-3"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`${open ? 'flex' : 'hidden'} md:hidden flex-col bg-black/60 backdrop-blur-sm border-b border-white/10`}>
        <div className="px-6 py-4 flex flex-col space-y-3 text-gray-200">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-white">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-white">About</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-white">Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

