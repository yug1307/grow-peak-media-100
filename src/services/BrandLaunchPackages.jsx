import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaAd, FaBook, FaBullhorn, FaBullseye, FaCalendarAlt, FaChartBar, FaChartLine, FaClock, FaComments, FaFont, FaHashtag, 
  FaImage, FaLink, FaMobileAlt, FaPalette, FaPenNib, FaRocket, FaSearch, FaUserEdit, FaUsers, FaVideo } from 'react-icons/fa'
import BrandPackages from './packages/BrandPackages'

const packageCovers = [
  {
    id: 1, icon: <FaBullseye className="text-blue-600"/>, title: "Brand Strategy & Positioning",
    desc: [
      `We start by understanding your vision, target audience, and market. 
      Our team defines your brand’s personality, tone, and value proposition to ensure 
      clarity and consistency across all channels.`
    ],
    includes: [
      { icon: <FaSearch className="text-blue-500"/>, text: "Brand discovery & consultation" },
      { icon: <FaUsers className="text-cyan-600"/>, text: "Target audience & competitor analysis" },
      { icon: <FaComments className="text-pink-600"/>, text: "Brand tone, messaging & positioning" },
    ]
  },
  {
    id: 2, icon: <FaPalette className="text-red-600"/>, title: "Visual Identity Setup", 
    desc: [
      `Your brand’s look is the first thing people notice. We ensure your visuals are professional, 
      aligned, and memorable.`
    ],
    includes: [
      { icon: <FaPenNib className="text-indigo-600"/>, text: "Logo refinement (or basic logo creation)" },
      { icon: <FaFont className="text-orange-600"/>, text: "Color palette & typography selection" },
      { icon: <FaImage className="text-rose-600"/>, text: "Profile & cover designs for social platforms" },
      { icon: <FaBook className="text-emerald-600"/>, text: "Brand usage guidelines" }
    ]
  },
  {
    id: 3, icon: <FaMobileAlt className="text-teal-600"/>, title: "Digital Presence Setup",
    desc: [
      `We create and optimize your digital platforms so your brand looks credible from day one.`
    ],
    includes: [
      { icon: <FaRocket className="text-yellow-600"/>, text: "Social Media Setup (Instagram, Facebook, LinkedIn, YouTube)" },
      { icon: <FaUserEdit className="text-fuchsia-600"/>, text: "Bio & profile optimization" },
      { icon: <FaLink className="text-sky-600"/>, text: "Link setup (website / WhatsApp / lead forms)" },
      { icon: <FaChartBar className="text-violet-600"/>, text: "Business account & analytics configuration" }
    ]
  },
  {
    id: 4, icon: <FaVideo className="text-orange-500"/>, title: "Content for Launch",
    desc: [
      `A strong launch needs strong content. We help you kick off with engaging, on-brand content.`
    ],
    includes: [
      { icon: <FaBullhorn className="text-red-600"/>, text: "Launch announcement creatives" },
      { icon: <FaImage className="text-green-600"/>, text: "6–9 branded posts (static or reel-ready)" },
      { icon: <FaHashtag className="text-amber-600"/>, text: "Caption & hashtag strategy" },
      { icon: <FaCalendarAlt className="text-lime-600"/>, text: "Content calendar for the first 30 days" }
    ]
  },
  {
    id: 5, icon: <FaChartLine className="text-green-600"/>, title: "Growth & Marketing Readiness",
    desc: [
      `We prepare your brand for promotion and scale.`
    ],
    includes: [
      { icon: <FaAd className="text-purple-600"/>, text: "Basic Ad Account Setup" },
      { icon: <FaChartLine className="text-teal-600"/>, text: "Content & growth strategy roadmap" },
      { icon: <FaClock className="text-blue-600"/>, text: "Posting frequency & engagement guidelines" },
    ]
  }
]

const BrandLaunchPackages = () => {
  return (
    <>  
    <Topbar/>
      <header className="bg-sky-100 py-10 px-5 space-y-6">
        <h2 className="text-4xl font-bold text-center">🚀 Brand Launch Package</h2>
 
        <div className="max-w-6xl mx-auto text-lg text-center space-y-4">
          <p>
            Launching a brand is more than just going live — it’s about making 
            a <span className="font-semibold">powerful first impression</span> that 
            attracts attention, builds trust, and sets the foundation for long-term growth.
          </p>

          <p>
            The <span className="font-semibold">Brand Launch Package by Grow Peak Media</span> is designed 
            to help startups, creators, and businesses enter the market with a <span className="font-semibold">strong 
            visual identity, strategic messaging, and a professional digital presence</span> across platforms.
          </p>

          <p>
            From brand positioning to content creation and platform setup, we handle everything needed to ensure
            your brand launches <span className="font-semibold">confidently, cohesively, and competitively</span>.
          </p>
        </div>
      </header>

      {/* 🎯 What This Package Covers */}
      <section className="bg-orange-400 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🎯 What This Package Covers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {packageCovers.map((pkc, idx) => (

            <div 
              key={idx} 
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow 
              space-y-2 text-center">

              <div className="flex justify-center text-3xl">{pkc.icon}</div>
              <div className="text-xl text-purple-600 font-semibold">{pkc.title}</div>
              <p className="text-gray-700">{pkc.desc}</p>

              <ul className="text-left">
                {pkc.includes.map((item, itemIdx) => (

                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 my-1 text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 🧩 Who Is This For? */}
      <section className="bg-green-100 py-10 px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">🧩 Who Is This For?</h2>

        <ul className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <li>✔ Startups & new businesses</li>
          <li>✔ Personal brands & creators</li>
          <li>✔ Small to mid-size companies</li>
          <li>✔ E-commerce & service-based brands</li>
        </ul>
      </section>

      {/* Why Grow Peak Media */}
      <section className="bg-fuchsia-100 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🌟 Why Grow Peak Media?</h2>

        <ul className="text-left md:text-center text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <li>✔ End-to-End Brand Launch Support</li>
          <li>✔ Strategy + Creativity + Execution</li>
          <li>✔ Market-ready & growth-focused approach</li>
          <li>✔ No confusion, no fluff — just results</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center bg-lime-100 text-center py-10 px-4 space-y-3">
        <h2 className="text-3xl font-bold">📞 Ready to Launch Your Brand?</h2>

        <p className="max-w-3xl mx-auto text-lg">Let’s turn your idea into a brand people remember.</p>
         
        <a className="bg-green-600 rounded-full p-3 italic font-semibold text-white text-lg">
          👉 Book a free brand consultation today
        </a>
      </section>
    <BrandPackages/>
    <FooterOne/>
    </>
  )
}

export default BrandLaunchPackages
