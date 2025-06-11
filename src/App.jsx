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

      <h2 className="text-3xl text-center mt-5 mb-5">Why Choose Us</h2>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-2 p-2 mb-5">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-teal-200 transition text-center">
          <b>Tailored Content:</b>
          <p>We know every brand is different, so we never use the same designs or videos twice. 
          Everything we create is made specifically for your business.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-teal-200 transition text-center">
          <b>Creative + Strategic:</b>
          <p>We mix fresh, bold ideas with smart strategies that are proven to work. 
          This helps your brand stand out and succeed.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-teal-200 transition text-center">
          <b>Complete Support:</b>
          <p>We don’t just set things up and leave—we’re with you from the beginning 
          and continue to support you as your brand grows.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-teal-200 transition text-center">
          <b>Trend-Focused:</b>
          <p>We keep up with what’s popular online, so your content always feels current and connects with your audience.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:bg-teal-200 transition text-center">
          <b>Growth-Driven:</b>
          <p>Our work doesn’t just look nice—it’s designed to help you get real
          results like more engagement, followers, or customers.</p>
        </div>
      </section>
    </div>
      <FAQ />
      <ContactForm />
      <FooterOne/>
    </>
  )
}

export default App
