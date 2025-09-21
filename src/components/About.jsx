import React from 'react'
// import './About.css'
import Topbar from './Topbar'
import FooterOne from './FooterOne' 

const About = () => {
  return ( 
    <div> 
      <Topbar /> 
        <section class="bg-gradient-to-r from-orange-400 to-indigo-400 p-8">
        <div class="max-w-5xl mx-auto lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-5">About Us</h2>

        <div class="space-y-2 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p class="font-semibold text-xl">We Help Your Brand Grow Through Powerful Content</p>
          <p>At GrowPeak Media, we create videos and social media content that help brands stand out, connect with their audience, and grow faster.
          We believe great content isn’t just creative—it should bring real results.
          Whether you’re just starting out or ready to scale up, we’re here to help you grow with 
          confidence and clarity.</p>

          <p class="font-semibold text-xl">We’re Not Just a Video Production Company—We’re Your Partners in Growth</p>
          <p>We’re a creative team of video makers, designers, and digital strategists. Our goal is simple: to turn your ideas into powerful stories
          that people remember and act on. We’ve worked with startups, creators, small businesses, and personal brands—
          helping them grow online with smart, high-quality content.</p>
        </div>
        </div>
        </section>


        {/* What We Do Section */}
        <section class="bg-gradient-to-bl from-lime-400 to-blue-400 px-5 py-16 md:px-10" id="services">
          <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">What We Do</h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
          {/* Video Production  */}
          <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 class="text-2xl font-semibold text-blue-700 mb-3">1. Video Production</h3>
            <p class="text-gray-600 mb-4">From concept to final cut, we handle every aspect of video production:</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Instagram Reels</li>
                <li>Brand Films</li>
                <li>Product Videos</li>
                <li>Testimonials</li>
              </ul>
            <p class="mt-3 text-sm text-gray-500">High-quality videos that capture your brand’s essence and engage your audience.</p>
          </div>

          {/* Social Media Marketing */}
          <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 class="text-2xl font-semibold text-blue-700 mb-3">2. Social Media Marketing</h3>
            <p class="text-gray-600 mb-4">We manage your social media presence and content:</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Content Planning</li>
                <li>Posts & Reel Creation</li>
                <li>Strategy & Captions</li>
                <li>Account Growth Support</li>
              </ul>
            <p class="mt-3 text-sm text-gray-500">Keep your brand always in the spotlight with our social strategies.</p>
          </div>

          {/* Digital Launch Packages  */}
          <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 class="text-2xl font-semibold text-blue-700 mb-3">3. Digital Launch Packages</h3>
            <p class="text-gray-600 mb-4">Comprehensive packages to launch your brand or product:</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Brand Strategy</li>
                <li>Content Creation</li>
                <li>Social Media Management</li>
                <li>Website Design</li>
              </ul>
            <p class="mt-3 text-sm text-gray-500">We build your presence from scratch and help it grow with impact.</p>
          </div>
          </div>
          </div>
        </section>  
      <FooterOne/>
    </div>
  )
}

export default About
