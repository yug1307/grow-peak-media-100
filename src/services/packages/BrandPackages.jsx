import React from 'react'
import { FaLightbulb, FaUsers, FaBullseye, FaPenNib, FaPalette, FaShareAlt, FaPhotoVideo, FaBullhorn,
  FaHashtag, FaCalendarAlt, FaAd, FaChartLine, FaSyncAlt, FaRoad, FaStar, FaCrown, FaImages, FaVideo, 
  FaProjectDiagram, FaCheckCircle, FaFlagCheckered } from "react-icons/fa";

const packages = [
  { 
    icon: <FaStar className="text-yellow-500"/>, title: "Brand Launch Accelerator", price: "₹30,000 (3 Months)", 
    caption: "Perfect for startups & new brands ready to enter the market professionally",
    desc: [`This 3-month program is designed to build, launch, and stabilize your brand with a
      strong foundation and consistent content presence`],
    includes: [
      { title: "🔹 Month 1 – Brand Foundation" },
      { icon: <FaLightbulb className="text-sky-500"/>, text: "Brand Discovery & Strategy Session" },
      { icon: <FaUsers className="text-purple-500"/>, text: "Target Audience & Competitor Analysis" },
      { icon: <FaBullseye className="text-amber-500"/>, text: "Brand positioning & Messaging Framework" },
      { icon: <FaPenNib className="text-green-500"/>, text: "Logo Refinement / Basic Logo Creation" },
      { icon: <FaPalette className="text-cyan-500"/>, text: "Color Palette & Typography Setup" },
      { icon: <FaShareAlt className="text-orange-500"/>, text: "Social Media Account Setup (up to 3 Platforms)" }
    ],
    includes2: [
      { title: "🔹 Month 2 – Launch Execution" },
      { icon: <FaPhotoVideo className="text-violet-500"/>, text: "9–12 Branded Posts (Static/Reels Mix)" },
      { icon: <FaBullhorn className="text-orange-500"/>, text: "Launch Announcement Campaign" },
      { icon: <FaHashtag className="text-teal-500"/>, text: "Caption & Hashtag Strategy" },
      { icon: <FaCalendarAlt className="text-blue-500"/>, text: "Content Calendar (30 days)" },
      { icon: <FaAd className="text-pink-500"/>, text: "Basic Ad Account Setup" }
    ],
    includes3: [
      { title: "🔹 Month 3 – Growth Optimization" },
      { icon: <FaPenNib className="text-blue-500"/>, text: "Continued Content Posting Guidance" },
      { icon: <FaUsers className="text-purple-500"/>, text: "Engagement Strategy" },
      { icon: <FaChartLine className="text-green-500"/>, text: "Performance Insights Review" },
      { icon: <FaSyncAlt className="text-amber-500"/>, text: "Strategy Refinement Session" },
      { icon: <FaRoad className="text-red-500"/>, text: "Growth Roadmap for thr next 3 months" },
    ],
    idealFor: "Startups, personal brands, small businesses launching their first digital presence"
  },
  { 
    icon: <FaCrown className="text-yellow-500"/>, title: "Brand Growth & Domination Program", price: "₹45,000 (6 Months)", 
    caption: "Best for serious brands aiming for strong market positioning & consistent growth",
    desc: [`This 6-month program not only launches your brand but actively builds visibility, engagement, and brand authority`],
    includes: [
      { title: "🔹 Month 1 – Brand Strategy & Identity" },
      { icon: <FaLightbulb className="text-amber-500"/>, text: "Deep Brand Strategy Workshop" },
      { icon: <FaUsers className="text-sky-500"/>, text: "Audience Segmentation & Competitor Research" },
      { icon: <FaPalette className="text-purple-500"/>, text: "Complete Visual Identity Setup" },
      { icon: <FaShareAlt className="text-green-500"/>, text: "Social Media Setup (up to 5 Platforms)" },
      { icon: <FaBullhorn className="text-red-500"/>, text: "Meta Business Manager & Ad Account Setup" }
    ],
    includes2: [
      { title: "🔹 Month 2 – Launch & Visibility" },
      { icon: <FaImages className="text-sky-500"/>, text: "18–24 Branded Posts" },
      { icon: <FaVideo className="text-purple-500"/>, text: "Reel/Video Content Guidance" },
      { icon: <FaBullhorn className="text-orange-500"/>, text: "Launch Campaign Execution" },
      { icon: <FaHashtag className="text-teal-500"/>, text: "Caption & Hashtag Research" },
      { icon: <FaProjectDiagram className="text-indigo-500"/>, text: "2 Campaign Strategy Plans" },
      { icon: <FaAd className="text-green-500"/>, text: "Basic Paid Ads Guidance" }
    ],
    includes3: [
      { title: "🔹 Month 3 – Growth & Authority Building" },
      { icon: <FaCalendarAlt className="text-sky-500"/>, text: "Ongoing content planning" },
      { icon: <FaUsers className="text-purple-500"/>, text: "Engagement & community strategy" },
      { icon: <FaChartLine className="text-green-500"/>, text: "Performance analytics review (monthly)" },
      { icon: <FaCheckCircle className="text-teal-500"/>, text: "Brand consistency monitoring" },
      { icon: <FaRoad className="text-amber-500"/>, text: "Advanced growth roadmap" },
      { icon: <FaFlagCheckered className="text-red-500"/>, text: "Final performance & scaling strategy session" }
    ],
    idealFor: "Growing brands, e-commerce businesses, coaches, agencies, and service providers who want long-term digital positioning."
  },
]

const BrandPackages = () => {
  return (
    <section className="bg-gradient-to-t from-blue-500 to-orange-500 py-10 px-4 space-y-6">

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (

          <div 
            key={idx} 
            className="bg-white p-7 rounded-lg transition transform hover:-translate-y-2">

            <div className="text-center">
              <div className="flex justify-center text-3xl">{pkg.icon}</div>
              <div className="text-2xl font-semibold text-blue-600 my-2">{pkg.title}</div>
              <div className="text-xl font-bold text-gray-700">{pkg.price}</div>
              <p className="text-lg font-semibold text-red-500 my-1">{pkg.caption}</p>
              <p className="text-md font-semibold text-slate-600">{pkg.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto my-4">
              <ul className="">
                {pkg.includes.map((item, itemIdx) => (
                  
                  <li key={itemIdx} className="flex gap-2">
                    <span className="text-lg">{item.title}</span>
                    <span className="flex-shrink-0 my-1 text-xl">{item.icon}</span>
                    <span className="text-left">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <ul className="">
                {pkg.includes2.map((item, itemIdx) => (
                  
                  <li key={itemIdx} className="flex gap-2">
                    <span className="text-lg">{item.title}</span>
                    <span className="flex-shrink-0 my-1 text-xl">{item.icon}</span>
                    <span className="text-left">{item.text}</span>
                  </li>
                ))}
              </ul>

              <ul className="">
                {pkg.includes3.map((item, itemIdx) => (
                  
                  <li key={itemIdx} className="flex gap-2">
                    <span className="text-lg">{item.title}</span>
                    <span className="flex-shrink-0 my-1 text-xl">{item.icon}</span>
                    <span className="text-left">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

              <div className="text-left my-4"><b>Ideal For:</b> <br /> {pkg.idealFor}</div>
              
            <div className="flex flex-col items-center">
              <a href="#" 
                className="bg-green-600 text-white text-center font-semibold py-2 px-6 w-32 rounded-full">
                Get Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section> 
  )
}

export default BrandPackages
