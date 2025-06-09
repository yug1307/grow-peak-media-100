import React, { Suspense } from 'react';
import Topbar from './components/Topbar'
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm"
import FooterOne from './components/FooterOne'
import { PiVideoCameraFill } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa"; 
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import './App.css' 

const Services = React.lazy(() => import('./components/Services'));

<Suspense fallback={<div>Loading...</div>}> 
  <Services />
</Suspense>

function App() {
  return (
    <>
    <div className="app-container">
      <Topbar />
      <main className="max-w-7xl mx-auto">
      <h2 className="text-4xl text-center p-2 mt-10 mb-4">Powerful Visual Content That Elevates Brands</h2>
        <p className="text-xl text-center mb-6">We create cinematic videos, stunning visuals, and engaging content that helps
        your brand business grow.
        </p>
      </main>

      <h2 className="text-2xl text-center mt-5 mb-5">Our Services</h2>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 mb-5">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-blue-300 transition text-center">
          <PiVideoCameraFill className="video"/>Video Production
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-blue-300 transition text-center">
          <FaFacebookSquare className="video"/>Social Media Setup
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-blue-300 transition text-center">
          <AiFillInstagram className="video"/>Social Media Management
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-blue-300 transition text-center">
          <FaArrowTrendUp className="video"/>Brand Launch Packages
        </div>
      </section>

        {/* FAQs Section */}

    </div>
      <FAQ />
      <ContactForm />
      <FooterOne/>
    </>
  )
}

export default App
