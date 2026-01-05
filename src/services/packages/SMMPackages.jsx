import React from 'react'
import { FaCalendarAlt, FaCalendarCheck, FaChartBar, FaChartLine, FaCommentDollar, FaComments, FaHashtag, FaInstagram, FaPenFancy, 
  FaPenNib, 
  FaPhotoVideo, 
  FaRocket, FaSearch, FaSeedling, FaShareAlt, FaUserEdit } from 'react-icons/fa'

const Packages = [
  {
    icon: <FaSeedling className="text-green-500"/>, 
    title: "Starter Growth", 
    price: "₹18,000 (3 Months)", 
    desc: "Best for small brands testing social media growth", 
    includes: [
      { id: 1, icon: <FaInstagram className="text-green-600"/>, text: "Management of 1 social media platform" },
      { id: 2, icon: <FaCalendarAlt className="text-teal-500"/>, text: "8 posts per month (static/carousel)" },
      { id: 3, icon: <FaHashtag className="text-emerald-600"/>, text: "Caption writing with hashtags" },
      { id: 4, icon: <FaPenFancy className="text-blue-600"/>, text: "Monthly content planning" },
      { id: 5, icon: <FaComments className="text-cyan-500"/>, text: "Basic community management (comments & DMs)" },
      { id: 6, icon: <FaChartBar className="text-green-600"/>, text: "Performance summary at the end of each month" },
      { id: 7, icon: <FaUserEdit className="text-slate-500"/>, text: "Basic profile optimization (one-time)" }
    ],
    idealFor: "Local Businesses, Freelancers, Early-Stage Brands"
  },
  {
    icon: <FaRocket className="text-red-500"/>,
    title: "Growth Booster",
    price: "₹30,000 (6 Months)",
    desc: "Best for brands ready for consistent visibility",
    includes: [
      { id: 1, icon: <FaShareAlt className="text-violet-700"/>, text: "Management of 2 social media platforms" },
      { id: 2, icon: <FaPhotoVideo className="text-indigo-500"/>, text: "12 posts per month (posts + reels)" },
      { id: 3, icon: <FaPenNib className="text-blue-900"/>, text: "Professional captions & hashtag research" },
      { id: 4, icon: <FaCalendarCheck className="text-orange-500"/>, text: "Monthly content calendar & scheduling" },
      { id: 5, icon: <FaCommentDollar className="text-amber-500"/>, text: "Community management (comments & DMs)" },
      { id: 6, icon: <FaChartLine className="text-sky-600"/>, text: "Monthly performance report & insights" },
      { id: 7, icon: <FaUserEdit className="text-purple-600"/>, text: "Content optimization based on analytics" },
      { id: 8, icon: <FaSearch className="text-green-500"/>, text: "Basic trend & competitor monitoring" }
    ],
    idealFor: "Small to Mid-Size Businesses, Coaches, Service Brands"
  }
]

const SMMPackages = () => {
  return (
    <section className="bg-gradient-to-t from-blue-500 to-orange-500 py-10 px-4 space-y-6">
      <h2 className="text-3xl font-bold text-center">Social Media Management Packages</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Packages.map((pkg, idx) => (

          <div 
            key={idx} 
            className="bg-white p-7 rounded-lg transition transform hover:-translate-y-2">

            <div className="text-center space-y-3">
              <div className="flex justify-center text-3xl">{pkg.icon}</div>
              <div className="text-2xl font-semibold text-blue-600">{pkg.title}</div>
              <div className="text-xl font-bold text-gray-700">{pkg.price}</div>
              <p className="text-md">{pkg.desc}</p>

              <ul className="text-left">
                {pkg.includes.map((item, itemIdx) => (
                  
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 my-1 text-xl">{item.icon}</span>
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

export default SMMPackages
