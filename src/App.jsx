import React, { Suspense } from 'react';
import Topbar from './components/Topbar'
import FAQ from "./components/FAQ";
import Carousel from './components/Carousel';

import WhyUs from './components/WhyUs';
import FooterOne from './components/FooterOne'
import { Video, Facebook, Instagram, TrendingUp } from "lucide-react";
import './App.css'
import { Link } from 'react-router-dom';

// const Services = React.lazy(() => import('./components/Services')); 

// <Suspense fallback={<div>Loading...</div>}>
//   <Services />
// </Suspense>

const services = [
  { icon: <Video size={36} />, title: "Video Production", 
    caption: "Tell Your Story Through Compelling Visuals", link: "/video-production" },
  { icon: <Facebook size={36} />, title: "Social Media Setup", 
    caption: "Start Strong with a Professional Setup", link: "/social-media-setup" },
  { icon: <Instagram size={36} />, title: "Social Media Management", 
    caption: "Consistent, Creative & Growth-Oriented", link: "/social-media-management" },
  { icon: <TrendingUp size={36} />, title: "Brand Launch Packages", 
    caption: "Launch with Confidence and Transparency", link: "/brand-launch-packages" },
];

function App() {
  return (
    <>
      <Topbar /> 
      {/* <Carousel/> */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100 space-y-8">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
    
        {/* Title */} 
          <h2 className="text-4xl font-extrabold text-purple-600">
            Powerful Visual Content That Elevates Brands</h2>

          <p className="text-lg text-gray-600">
            We create cinematic videos, stunning visuals, and engaging content that helps your brand business grow.
          </p>
        </div>

        {/* About */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-indigo-600">Grow Peak Media</span>, 
          we specialize in creating videos and social media content that helps your brand grow faster.
          From video production to brand launch packages, we partner with you to make your brand shine 
          among the people.
          </p>

        <div className="bg-blue-800 py-3 px-4 w-40 rounded-lg text-lg text-orange-400 text-center max-w-xl mx-auto">
          <Link to="/services">Explore More</Link>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-cyan-500 py-16 px-6 my-12 space-y-8">
      <div className="space-y-7">
        <h2 className="text-4xl font-bold text-center">🚀 Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, i) => (

            <div
              key={i}
              className="p-6 bg-white rounded-2xl hover:shadow-xl 
              transition transform hover:-translate-y-2 space-y-2 text-center">

              <div className="flex justify-center text-blue-600">{service.icon}</div>
              <div className="text-lg font-semibold">{service.title}</div>
              <div className="text-gray-600">{service.caption}</div>

              <Link to={service.link} className="inline-block bg-lime-600 w-40 rounded-md">
                <div className="text-white my-2 font-semibold">Get Now</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </section>
      
      <WhyUs/>
      <FAQ />
      <FooterOne/>
    </>
  )
}

export default App
