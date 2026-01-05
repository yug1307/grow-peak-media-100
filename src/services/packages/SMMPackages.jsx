import React from 'react'
import { FaCalendarAlt, FaCalendarCheck, FaChartBar, FaChartLine, FaChartPie, FaCommentDollar, 
  FaComments, FaCrown, FaHashtag, FaInstagram, FaLayerGroup, FaLightbulb, FaPenFancy, FaPenNib, 
  FaPhoneAlt, FaPhotoVideo, FaRocket, FaSearch, FaSeedling, FaShareAlt, FaSyncAlt, FaUser, 
  FaUserEdit, FaVideo } from 'react-icons/fa'

const Packages = [
  {
    icon: <FaSeedling className="text-green-500"/>, 
    title: "Starter Growth", 
    price: "₹18,000 (3 Months)", 
    desc: "Best for Small Brands testing Social Media Growth", 
    includes: [
      { id: 1, icon: <FaInstagram className="text-green-600"/>, text: "Management of 1 Social Media Platform" },
      { id: 2, icon: <FaCalendarAlt className="text-teal-500"/>, text: "8 Posts Per Month (Static/Carousel)" },
      { id: 3, icon: <FaHashtag className="text-emerald-600"/>, text: "Caption Writing with Hashtags" },
      { id: 4, icon: <FaPenFancy className="text-blue-600"/>, text: "Monthly Content Planning" },
      { id: 5, icon: <FaComments className="text-cyan-500"/>, text: "Basic Community Management (Comments & DMs)" },
      { id: 6, icon: <FaChartBar className="text-green-600"/>, text: "Performance Summary at the End of Each Month" },
      { id: 7, icon: <FaUserEdit className="text-slate-500"/>, text: "Basic Profile Optimization (One-Time)" }
    ],
    idealFor: "Local Businesses, Freelancers, Early-Stage Brands"
  },
  {
    icon: <FaRocket className="text-red-500"/>,
    title: "Growth Booster",
    price: "₹30,000 (6 Months)",
    desc: "Best for Brands ready for Consistent Visibility",
    includes: [
      { id: 1, icon: <FaShareAlt className="text-violet-700"/>, text: "Management of 2 Social Media Platforms" },
      { id: 2, icon: <FaPhotoVideo className="text-indigo-500"/>, text: "12 Posts Per Month (Posts + Reels)" },
      { id: 3, icon: <FaPenNib className="text-blue-900"/>, text: "Professional Captions & Hashtag Research" },
      { id: 4, icon: <FaCalendarCheck className="text-orange-500"/>, text: "Monthly Content Calendar & Scheduling" },
      { id: 5, icon: <FaCommentDollar className="text-amber-500"/>, text: "Community Management (Comments & DMs)" },
      { id: 6, icon: <FaChartLine className="text-sky-600"/>, text: "Monthly Performance Report & Insights" },
      { id: 7, icon: <FaUserEdit className="text-purple-600"/>, text: "Content Optimization based on Analytics" },
      { id: 8, icon: <FaSearch className="text-green-500"/>, text: "Basic Trend & Competitor Monitoring" }
    ],
    idealFor: "Small to Mid-Size Businesses, Coaches, Service Brands"
  },
  {
    icon: <FaCrown className="text-yellow-500"/>,
    title: "Brand Authority",
    price: "₹66,000 (12 Months)",
    desc: "Best for Brands focused on Long-Term Growth & Authority",
    includes: [
      { id: 1, icon: <FaLayerGroup className="text-green-600"/>, text: "Management of up to 4 Social Media Platforms" },
      { id: 2, icon: <FaPhotoVideo className="text-indigo-500"/>, text: "16 Posts Per Month (Posts, Carousels & Reels)" },
      { id: 3, icon: <FaVideo className="text-violet-700"/>, text: "Advanced Content Strategy & Brand Positioning" },
      { id: 4, icon: <FaUser className="text-slate-500"/>, text: "Community Management with Engagement Strategy" },
      { id: 5, icon: <FaChartPie className="text-purple-600"/>, text: "Monthly Analytics & Growth Reports" },
      { id: 6, icon: <FaLightbulb className="text-sky-600"/>, text: "Trend, Competitor & Hashtag Analysis" },
      { id: 7, icon: <FaPhoneAlt className="text-rose-500"/>, text: "Quarterly Strategy Calls & Optimization" },
      { id: 8, icon: <FaSyncAlt className="text-fuchsia-600"/>, text: "Continuous Profile & Content Optimization" },
    ],
    idealFor: "Established Brands, E-Commerce Platforms, Influencers, Mid & Large Agencies"
  }
]

const SMMPackages = () => {
  return (
    <section className="bg-gradient-to-t from-blue-500 to-orange-500 py-10 px-4 space-y-6">
      <h2 className="text-3xl font-bold text-center">Social Media Management Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
