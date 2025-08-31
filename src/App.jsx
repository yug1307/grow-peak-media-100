import React, { Suspense } from 'react';
import Topbar from './components/Topbar'
import FAQ from "./components/FAQ";
import Carousel from './components/Carousel';

import WhyUs from './components/WhyUs';
import FooterOne from './components/FooterOne'
import { Video, Facebook, Instagram, TrendingUp } from "lucide-react";
import './App.css'

const Services = React.lazy(() => import('./components/Services'));

<Suspense fallback={<div>Loading...</div>}>
  <Services />
</Suspense>

const services = [
    { icon: <Video size={36} />, title: "Video Production" },
    { icon: <Facebook size={36} />, title: "Social Media Setup" },
    { icon: <Instagram size={36} />, title: "Social Media Management" },
    { icon: <TrendingUp size={36} />, title: "Brand Launch Packages" },
  ];

function App() {
  return (
    <>
      <Topbar /> 
      {/* <Carousel/> */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
    
      {/* Title */}
        <h2 className="text-4xl font-extrabold text-purple-600">
        Powerful Visual Content That Elevates Brands</h2>

        <p className="mt-4 text-lg text-gray-600">
        We create cinematic videos, stunning visuals, and engaging content that helps your brand business grow.
        </p>

        {/* About */}
        <div className="mt-10">
          <h3 className="text-4xl font-bold text-gray-900">About Us</h3>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-indigo-600">Grow Peak Media</span>, 
          we specialize in creating videos and social media content that helps your brand grow faster.
          From video production to brand launch packages, we partner with you to make your brand shine 
          among the people.
          </p>
        </div>
      </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-200 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">🚀 Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center text-blue-600">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <WhyUs/>
      </section>

      <FAQ />
      <FooterOne/>
    </>
  )
}

export default App
