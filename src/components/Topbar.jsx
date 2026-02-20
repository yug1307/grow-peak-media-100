import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-violet-800">
      <div className="max-w-6xl mx-auto flex items-center px-5 justify-between">
        
        {/* Logo */}
        <svg width="600" height="180%" viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg">
          <style>{`.hotel-name { font-family: "Didot", "Bodoni MT", "Playfair Display", serif; font-size: 60px; font-weight: 500; letter-spacing: 4px; fill: #d7da27 } .divider { stroke: #bf63c2; stroke-width: 5 }`}</style>
          <line x1="170" y1="50" x2="530" y2="50" className="divider"/>
          <text x="370" y="108" textAnchor="middle" className="hotel-name">GROW PEAK MEDIA</text>
          <line x1="170" y1="125" x2="530" y2="125" className="divider"/>
        </svg>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-white lg:text-lg">
          <Link to="/" className="hover:underline text-lime-300">Home</Link>
          <Link to="/about" className="hover:underline text-lime-300">About</Link>
          <Link to="/contact" className="hover:underline text-lime-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-violet-800 border-t">
          <nav className="flex flex-col items-center space-y-4 px-6 py-6 text-white">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Topbar;
