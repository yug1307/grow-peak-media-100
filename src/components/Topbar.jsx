import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Topbar.css'; 

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <div className="w-full bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo or Brand */}
        <div className="text-lg text-white font-bold">Grow Peak Media</div>

        {/* Hamburger for small devices */}
        <button 
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Menu Items */}
        <ul className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 space-y-2 md:space-y-0 absolute md:static right-0 top-12 bg-gray-800 md:bg-transparent w-full md:w-auto z-50 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/"><div className="block px-4 py-2 hover:text-blue-300">Home</div></Link>
          <Link to="/about"><div className="block px-4 py-2 hover:text-blue-300">About Us</div></Link>
          <Link to="/services"><div className="block px-4 py-2 hover:text-blue-300">Services</div></Link>
          <Link to="/privacy-policy"><div className="block px-4 py-2 hover:text-blue-300">Privacy Policy</div></Link>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
