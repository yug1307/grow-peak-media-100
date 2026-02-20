import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne' 
import { FaBullhorn, FaChartLine, FaPalette, FaPodcast, FaShareAlt, FaVideo } from 'react-icons/fa'

const whatWeDo = [
  { icon: <FaVideo className="text-purple-500"/>, title: "Creative Media Production" },
  { icon: <FaShareAlt className="text-blue-600"/>, title: "Social Media Content Creation" },
  { icon: <FaPalette className="text-rose-500"/>, title: "Branding & Visual Identity" },
  { icon: <FaBullhorn className="text-red-500"/>, title: "Digital Advertising Creatives" },
  { icon: <FaChartLine className="text-purple-500"/>, title: "Media Strategy & Campaign Planning" },
  { icon: <FaPodcast className="text-cyan-500"/>, title: "Podcast & Audio Content Support" }
]

const About = () => {
  return (  
    <> 
    <Topbar /> 
      <header className="bg-gradient-to-b from-rose-400 to-blue-400 text-center py-10 px-5 space-y-4">
        <h2 className="font-bold text-3xl">Who We Are</h2>
          
        <p className="text-lg">Grow Peak Media is a forward-thinking digital solutions company dedicated to 
          helping businesses establish a powerful online presence, accelerate growth, and achieve measurable 
          success. We specialize in blending creativity with technology to deliver modern, scalable, and 
          result-driven digital experiences. From startups to established brands, we partner with businesses 
          to transform ideas into impactful digital products and marketing strategies.
        </p>
      </header>  

       {/* Mission & Vision */}
       <section className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto gap-6 px-5 my-8">
        <div className="bg-yellow-500 rounded-xl p-4 text-center space-y-3">
          <h3 className="font-bold text-2xl">Our Mission</h3>
          
          <p className="texl-lg">Our mission is to empower businesses with innovative web, marketing, and 
            technology solutions that drive visibility, engagement, and long-term growth. We aim to 
            bridge the gap between business goals and digital execution through strategy, design, and 
            engineering excellence.
          </p>
        </div>
        
        <div className="bg-yellow-500 rounded-xl p-4 text-center space-y-3">
          <h3 className="font-bold text-2xl">Our Vision</h3>
          
          <p className="texl-lg">We envision becoming a trusted digital growth partner for brands worldwide — known 
            for delivering reliable technology, creative excellence, and measurable business outcomes. Our goal is
            to help companies not only go digital, but grow digitally.
          </p>
        </div>
       </section>

       {/* What We Do */}
       <section className="bg-rose-500 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {whatWeDo.map((item, index) => (
            
            <div 
              key={index} 
              className="bg-white rounded-xl p-4 text-center space-y-2">

              <div className="text-3xl flex flex-col items-center">{item.icon}</div>
              <h3 className="text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
       </section>

       {/* Our Approach */}
       <section className="bg-indigo-800 py-10 px-5 rounded-xl text-center space-y-4 mx-3 my-8">
        <h2 className="text-3xl font-bold text-white">Our Approach</h2>

        <p className="text-lg text-amber-500">We believe successful digital products come from collaboration, strategy, and precision. 
          Our process combines research, planning, design, development, testing, and optimization to ensure 
          every project delivers real value. We work closely with clients, keeping communication transparent 
          and progress measurable at every stage.
        </p>
       </section>
      
      {/* Why Choose Us */}
      <section className="bg-green-100 py-10 px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>

        <ul className="text-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto gap-4">
          <li>✔ Results-driven development and marketing strategies</li>
          <li>✔ Scalable solutions built for long-term growth</li>
          <li>✔ Transparent workflow and professional communication</li>
          <li>✔ Strong focus on performance, security, and user experience</li>
          <li>✔ Dedicated support and partnership mindset</li>
        </ul>
      </section>
      
      {/* CTA */}
      <section className="bg-lime-100 py-10 px-4 text-center space-y-6">
        <p className="max-w-3xl mx-auto text-lg">
          At Grow Peak Media, we don’t just build websites or campaigns — we build digital growth engines. 
          Whether you're launching a new brand, scaling your business, or modernizing your online presence,
          we’re here to help you reach the next peak.
        </p>
         
        <div className="flex flex-col items-center">
          <a href="#" 
            className="bg-green-600 rounded-full p-3 italic font-semibold text-white text-center text-lg">
            📩 Let’s Grow Together
          </a>
        </div>
      </section>
    <FooterOne/>
    </>
  )
}

export default About
