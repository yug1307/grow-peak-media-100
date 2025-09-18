import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Topbar.css'; 
 
const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return ( 
    <div className="w-full bg-violet-800 text-white inline-block">
      <div className="container mx-auto flex justify-between p-4">
        {/* Logo or Brand */}
          <h2 className="mt-1.5 text-lg text-white flex font-bold">Grow Peak Media</h2>

          <button className='md:hidden text-2xl text-white ml-auto mr-3' onClick={() => setIsOpen(!isOpen)}>☰</button>

        {/* Menu Items */}
        <ul className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 space-y-2 md:space-y-0 absolute md:static right-0 top-12 bg-violet-800 text-lime-300 md:bg-transparent w-full md:w-auto z-50 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/"><div className="block px-4 py-2 hover:underline">Home</div></Link>
          <Link to="/about"><div className="block px-4 py-2 hover:underline">About Us</div></Link>
          <Link to="/services"><div className="block px-4 py-2 hover:underline">Services</div></Link>
          <Link to="/contact"><div className="block px-4 py-2 hover:underline">Contact Us</div></Link>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
