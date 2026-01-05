import React from 'react'
import { FaCut, FaFont, FaImages, FaInstagram, FaMobileAlt, FaMusic, FaRedo,
  FaPalette, FaRedoAlt, FaVideo, FaYoutube, FaFilm, FaBullhorn, FaMagic,
  FaCubes, FaGlobe, FaHeadset, FaRocket, FaStar, FaCrown } from 'react-icons/fa'

const Packages = [ 
  { 
    icon: <FaRocket className="text-blue-500"/>, 
    title: "Starter Video Package", 
    price: "₹5,000/Month",
    desc: "Best for Small Businesses & Personal Brands just starting out",
    includes: [
      { icon: <FaVideo className="text-red-500"/>, desc: "2 Short Promotional Videos (30–45 sec)" },
      { icon: <FaCut className="text-blue-500"/>, desc: "Basic Editing (Cuts, Transitions, Text)" },
      { icon: <FaMusic className="text-purple-500"/>, desc: "Background Music" }, 
      { icon: <FaMobileAlt className="text-green-500"/>, desc: "Vertical or Horizontal Format" }, 
      { icon: <FaInstagram className="text-pink-500"/>, desc: "Instagram & WhatsApp Optimization" }, 
      { icon: <FaRedo className="text-orange-500"/>, desc: "1 Revision Per Video" }
    ] 
  },
  {
    icon: <FaStar className="text-yellow-500"/>,
    title: "Growth Video Package",
    price: "₹10,000/3 Months",
    desc: "Ideal for Growing Brands & Entrepreneurs/Social Media Creators",
    includes: [
      { icon: <FaVideo className="text-red-500"/>, desc:"6 Short Videos (2 per month)" },
      { icon: <FaPalette className="text-indigo-500"/>, desc:"Advanced editing & color correction" },
      { icon: <FaFont className="text-teal-500"/>, desc:"Brand text overlays & captions" },
      { icon: <FaYoutube className="text-red-600"/>, desc:"Platform optimization (Instagram, Facebook, YouTube Shorts)" },
      { icon: <FaImages className="text-yellow-500"/>, desc:"Stock footage (if required)" },
      { icon: <FaRedoAlt className="text-orange-500"/>, desc:"2 Revisions Per Video" }
    ]
  },
  {
    icon: <FaCrown className="text-amber-600"/>,
    title: "Professional Video Package",
    price: "₹25,000/6 Months",
    desc: "Best for Businesses focused on Marketing & Conversions",
    includes: [
      { icon: <FaFilm className="text-purple-600"/>, desc: "12 High Quality Videos (upto 90 sec)" },
      { icon: <FaBullhorn className="text-cyan-500"/>, desc: "Brand-Focused Storytelling" },
      { icon: <FaMagic className="text-pink-600"/>, desc: "Motion Graphics & Logo Animation" },
      { icon: <FaCubes className="text-blue-600"/>, desc: "Product/Service Promotional Videos" },
      { icon: <FaGlobe className="text-green-600"/>, desc: "Multi-Platform Delivery" },
      { icon: <FaHeadset className="text-amber-500"/>, desc: "Priority Support" },
      { icon: <FaRedo className="text-orange-500"/>, desc: "3 Revisions Per Video" }
    ]
  }
]

const VideoPackages = () => {
  return (
    <section className="bg-gradient-to-t from-blue-500 to-orange-500 py-10 px-4 space-y-6">
      <h2 className="text-3xl font-bold text-center">🎬 Video Production Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Packages.map((pkg, idx) => (

          <div 
            key={idx} 
            className="bg-white p-6 rounded-lg transition transform hover:-translate-y-2">
            
            <div className="text-center space-y-3">
              <div className="flex justify-center text-3xl">{pkg.icon}</div>
              <div className="text-2xl font-semibold text-red-600">{pkg.title}</div>
              <div className="text-xl font-bold text-gray-700">{pkg.price}</div>
              <p className="">{pkg.desc}</p>

              <ul className="text-left">
                {pkg.includes.map((item, itemIdx) => (
                  
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 my-1 text-lg">{item.icon}</span>
                    <span>{item.desc}</span>
                  </li>
                ))}
              </ul>

              <a href="#" 
                className="inline-block bg-green-600 text-white font-semibold py-2 w-32 rounded-full transition duration-300">
                Get Now
              </a>
            </div>
          </div>
        ))}
      </div> 
    </section>
  )
}

export default VideoPackages
