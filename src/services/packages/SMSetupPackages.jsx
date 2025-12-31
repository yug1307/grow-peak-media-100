import React from 'react'
import { FaShareAlt, FaUserCog, FaEdit, FaImages, FaLink, FaShieldAlt, FaPhoneAlt, 
  FaRocket, FaCog, FaChartLine, FaFileAlt, FaLightbulb, FaHeadset, FaCrown, FaBullhorn } from 'react-icons/fa'

const Packages = [
  { 
    icon: <FaRocket className="text-blue-500"/>, 
    title: "Starter Package", 
    price: "₹5,000", 
    desc: "Best for individuals & small businesses just starting out", 
    includes: [
      { id: 1, icon: <FaShareAlt className="text-pink-500"/>, text: "Setup of 1 Social Media Platform (Instagram/Facebook/LinkedIn)" },
      { id: 2, icon: <FaUserCog className="text-indigo-500"/>, text: "Business or Creator Account Configuration" },
      { id: 3, icon: <FaEdit className="text-teal-500"/>, text: "Profile Bio & Description Optimization" },
      { id: 4, icon: <FaImages className="text-yellow-500"/>, text: "Profile Picture & Basic Branding Alignment" },
      { id: 5, icon: <FaLink className="text-green-500"/>, text: "Link Setup (Website/WhatsApp/Contact)" },
      { id: 6, icon: <FaShieldAlt className="text-gray-700"/>, text: "Basic Platform Settings & Security Setup" },
      { id: 7, icon: <FaPhoneAlt className="text-orange-500"/>, text: "One-time Consultation Call (30 minutes)" },
    ],
    idealFor: "Freelancers, Startups, Local Businesses, Personal Brands"  
  },
  {
    icon: <FaUserCog className="text-purple-500"/>,
    title: "Growth Package",
    price: "₹12,000",
    desc: "Ideal for growing brands & entrepreneurs looking to expand their social presence",
    includes: [
      { id: 1, icon: <FaShareAlt className="text-pink-500"/>, text: "Setup of 3 Social Media Platforms (Instagram, Facebook, LinkedIn or YouTube)" },
      { id: 2, icon: <FaCog className="text-indigo-500"/>, text: "Business Account & Meta Business Manager Setup" },
      { id: 3, icon: <FaEdit className="text-teal-500"/>, text: "Optimized Bios, Usernames & Profile Descriptions" },
      { id: 4, icon: <FaImages className="text-yellow-500"/>, text: "Profile Picture + Cover/Banner Setup" },
      { id: 5, icon: <FaFileAlt className="text-amber-600"/>, text: "Highlight Structure & Naming (Instagram)" },
      { id: 6, icon: <FaLightbulb className="text-green-500"/>, text: "Basic Content Strategy Guidance (Post Types & Frequency)" },
      { id: 7, icon: <FaChartLine className="text-blue-600"/>, text: "Platform Insights & Analytics Configuration" },
      { id: 8, icon: <FaHeadset className="text-orange-500"/>, text: "One-time Consultation Call (1 Hour)" }
    ],
    idealFor: "Small to Mid-Size Businesses, Coaches, Service Brands"
  },
  {
    icon: <FaCrown className="text-green-600"/>,
    title: "Premium Brand Package",
    price: "₹20,000",
    desc: "The most comprehensive setup for established brands aiming for scaling",
    includes: [
      { id: 1, icon: <FaShareAlt className="text-pink-500"/>, text: "Setup of up to 5 Social Media Platforms (Instagram, Facebook, LinkedIn, YouTube, X)" },
      { id: 2, icon: <FaUserCog className="text-indigo-500"/>, text: "Full Business Account & Advanced Settings" },
      { id: 3, icon: <FaBullhorn className="text-red-500"/>, text: "Meta Business Manager + Ad Account Setup" },
      { id: 4, icon: <FaImages className="text-yellow-500"/>, text: "Complete Branding Alignment Across Platforms" },
      { id: 5, icon: <FaLink className="text-green-500"/>, text: "Highlights, Bio CTA Optimization & Link Strategy" },
      { id: 6, icon: <FaLightbulb className="text-green-500"/>, text: "Content Pillars & Posting Strategy Roadmap" },
      { id: 7, icon: <FaChartLine className="text-blue-600"/>, text: "Competitor & Industry Analysis" },
      { id: 8, icon: <FaRocket className="text-purple-500"/>, text: "Ad-Ready Account Setup" },
      { id: 9, icon: <FaHeadset className="text-orange-500"/>, text: "One-on-One Strategy Session (90 minutes)" },
    ],
    idealFor: "Established Brands, E-Commerce Businesses, Agencies, Creators"
  }
]

const SMSetupPackages = () => {
  return (
    <section className="bg-gradient-to-t from-blue-500 to-orange-500 py-10 px-4 space-y-6">
      <h2 className="text-3xl font-bold text-center">Social Media Setup Packages</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Packages.map((pkg, idx) => (

          <div 
            key={idx} 
            className="bg-white p-7 rounded-lg transition transform hover:-translate-y-2">
            
            <div className="text-center space-y-3">
              <div className="flex justify-center text-3xl">{pkg.icon}</div>
              <div className="text-2xl font-semibold text-red-600">{pkg.title}</div>
              <div className="text-xl font-bold text-gray-700">{pkg.price}</div>
              <p className="">{pkg.desc}</p>

              <ul className="text-left">
                {pkg.includes.map((item, itemIdx) => (
                  
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 my-1 text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="text-left"><b>Ideal For:</b> <br /> {pkg.idealFor}</div>

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

export default SMSetupPackages