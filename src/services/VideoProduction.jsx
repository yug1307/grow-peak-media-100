import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaChartLine, FaCut, FaFilm, FaHashtag, FaPalette,
  FaLightbulb, FaClipboardList, FaVideo, FaEdit, FaCheckCircle} from 'react-icons/fa'
import VideoPackages from './packages/VideoPackages'

const Services = [
  { icon: <FaPalette className="text-red-500"/>, title: "Brand & Promotional Videos", 
    desc: "We craft compelling brand stories that showcase your vision, values, and offerings. Perfect for websites, social media, and marketing campaigns" },
  { icon: <FaHashtag className="text-pink-500"/>, title: "Social Media Videos & Reels", 
    desc: "Short-form, high-impact videos optimized for Instagram Reels, YouTube Shorts, Facebook, and LinkedIn to maximize reach and engagement" },
  { icon: <FaFilm className="text-blue-600"/>, title: "Corporate & Business Videos", 
    desc: "Professional videos for company profiles, presentations, internal communications, and investor pitches" },
  { icon: <FaChartLine className="text-green-600"/>, title: "Product Videos & Ads", 
    desc: "Visually appealing product videos that highlight features, benefits, and usage—ideal for e-commerce and paid advertising" },
  { icon: <FaCut className="text-amber-500"/>, title: "Event Coverage & Aftermovies", 
    desc: "Capture the energy and highlights of your events, launches, and corporate gatherings with cinematic storytelling" },
]

const Process = [
  { icon: <FaLightbulb className="text-yellow-500"/>, title: "Concept & Script Planning", 
    desc: "Understanding your goals and crafting the right story" },
  { icon: <FaClipboardList className="text-indigo-500"/>, title: "Pre-Production", 
    desc: "Planning shots, locations, and visuals" },
  { icon: <FaVideo className="text-red-500"/>, title: "Production",
    desc: "High-quality filming with professional equipment" },
  { icon: <FaEdit className="text-purple-600"/>, title: "Post-Production", 
    desc: "Editing, color grading, motion graphics, sound design" },
  { icon: <FaCheckCircle className="text-green-600"/>, title: "Final Delivery", 
    desc: "Optimized videos for all platforms" }
]

const whyChooseUs = [
  "Experienced Team",
  "Creative Storytelling",
  "Customized Solutions",
  "Platform-Optimized Video Formats",
  "Cutting-Edge Technology",
  "High-Quality Visuals and Editing",
  "End-to-End Service",
  "Affordable, Scalable Packages",
  "Client-Centric Approach",
  "Fast Turnaround Time"
]

const VideoProduction = () => {
  return (
    <>
    <Topbar/>
      <img src="/images/video-production-02.png" alt="" className="h-full w-[auto]" />
      <header className="bg-sky-100 py-10 px-5 space-y-6">
        <h2 className="text-4xl font-bold text-center">🎬 Video Production</h2>

        <div className="max-w-6xl mx-auto text-lg text-center space-y-4">
          <p>
            At <span className="font-semibold">Grow Peak Media</span>, we create powerful and
            story-driven videos that capture attention, communicate your brand message, 
            and drive real business results. In today’s digital world, video is the most 
            engaging form of content—and we help brands leverage it to stand out, connect, and convert.
          </p>

          <p>
            From concept to final delivery, our video production services are designed to reflect 
            your brand identity while appealing to your target audience across platforms like 
            Instagram, YouTube, Facebook, websites, and ad campaigns.
          </p>
        </div>
      </header>

      {/* Our Services */}
      <section className="bg-orange-400 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🎥 Our Video Production Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {Services.map((service, index) => (
            
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow 
              space-y-2 text-center">

              <div className="text-3xl flex flex-col items-center">{service.icon}</div>
              <div className="text-xl text-purple-600 font-semibold">{service.title}</div>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">🛠️ Our Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {Process.map((step, idx) => (

            <div
              key={idx} 
              className="bg-blue-100 py-5 px-2 rounded-lg space-y-1
              transition transform hover:-translate-y-2 text-center">
              
              <div className="flex justify-center text-3xl">{step.icon}</div>
              <div className="text-lg font-semibold text-indigo-600">{step.title}</div>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-100 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🚀 Why Choose Grow Peak Media??</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 max-w-7xl mx-auto">
          {whyChooseUs.map((point, index) => (

            <ul className="text-gray-700 text-lg">
              <li key={index}>✔ {point}</li>
            </ul>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime-100 py-10 px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">📈 Turn Your Views Into Impact</h2>

        <p className="max-w-3xl mx-auto text-lg text-center">
          Whether you’re launching a brand, promoting a product, or growing your online 
          presence, <span className="font-semibold">Grow Peak Media’s</span> Video Production Services
          help you tell your story in a way that inspires action.
        </p>
        
        <div className="flex flex-col items-center">
          <a href="#" 
          className="bg-green-600 rounded-full p-3 italic font-semibold text-white text-center text-lg">
            📩 Let’s create videos that grow your brand
          </a>
        </div>
      </section>
      <VideoPackages/>
    <FooterOne/> 
    </>
  )
}

export default VideoProduction
