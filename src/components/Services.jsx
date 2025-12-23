import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne'

const Services = () => {
  return (
    <div>
      <Topbar />
      <section class="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-12 space-y-6">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800">Our Services</h2>

          <div class="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p class="font-semibold text-gray-900 text-xl">We Help Your Brand Grow Through Powerful Content</p>
            
            <p>At GrowPeak Media, we specialize in video production, social media management, 
            and brand launch services to help startups, creators, and businesses build a strong digital presence. 
            Whether you’re starting from scratch or ready to scale, we create content and strategies that 
            move your brand forward—with clarity, creativity, and consistency.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="bg-gradient-to-t from-yellow-400 to-emerald-400 py-16 px-4 md:px-10" id="services">
        <div class="max-w-6xl mx-auto space-y-8">
          <h2 class="text-4xl font-bold text-center text-gray-800">What We Offer</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Video Production */}
            <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 class="text-2xl font-semibold text-blue-700">1. Video Production</h3>
              <p class="text-gray-600 my-2">Tell Your Story Through Compelling Visuals</p>

              <p class="text-gray-600 my-1">Our Video Services:</p>
              <ul class="list-disc mb-3 pl-5 text-gray-700 space-y-1">
                <li>Instagram Reels</li>
                <li>Brand Films</li>
                <li>Product Videos</li>
                <li>Testimonials</li>
              </ul>

              <p class="text-gray-600 my-1">Production Includes:</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Scriptwriting & creative direction</li>
                <li>Professional shooting with high-end cameras</li>
                <li>Editing with music, transitions, effects & graphics</li>
              </ul>
              
              <p class="mt-3 text-sm text-gray-500">We produce high-quality videos that capture attention, 
              connect with your audience, and communicate your message clearly. 
              From short-form reels to full-length brand films, our video content is designed to make a lasting impact.</p>
            </div>

            {/* Social Media Management */}
            <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 class="text-2xl font-semibold text-blue-700">2. Social Media Management</h3>
              <p class="text-gray-600 my-2">Consistent, Creative & Growth-Oriented</p>

              <p class="text-gray-600 my-1">What's Included:</p>
              <ul class="list-disc mb-3 pl-5 text-gray-700 space-y-1">
                <li>Monthly content planning & strategy</li>
                <li>Custom post, story, and reel design</li>
                <li>Caption writing with effective hashtags</li>
                <li>Consistent posting & engagement</li>
                <li>Monthly analytics & performance reporting</li>
              </ul>

              <p class="text-gray-600 my-1">Platforms We Manage</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li className='list-none'>Instagram | YouTube | LinkedIn | Facebook | Twitter (X) | Pinterest | Threads</li>
              </ul>
              
              <p class="mt-3 text-sm text-gray-500">We manage your social media channels with a 
              strategy-first approach—so your brand stays relevant, active, and engaging. 
              Whether you’re looking to build awareness, grow your audience, or drive conversions, 
              we’ve got you covered.</p>
            </div>

            {/* Social Media Setup */}
            <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 class="text-2xl font-semibold text-blue-700">3. Social Media Setup</h3>
              <p class="text-gray-600 my-2">Start Strong with a Professional Setup</p>

              <p class="text-gray-600 my-1">Setup Services Include:</p>
              <ul class="list-disc mb-3 pl-5 text-gray-700 space-y-1">
                <li>Creating and optimizing profiles</li>
                <li>Branded profile & cover photos   </li>
                <li>Writing bios and setting up contact details</li>
                <li>Story highlight covers and templates</li>
                <li>Grid layout and visual feed design</li>
                <li>Link-in-bio setup (Linktree, Beacons, or custom)</li>
                <li>Niche-based hashtag strategy</li>
                <li>Optional: Google Business Profile setup</li>
              </ul>

              <p class="text-gray-600 my-1">Available for:</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li className='list-none'>Instagram | Facebook | LinkedIn | YouTube | Twitter (X) | 
                  Pinterest | Threads | WhatsApp Business</li>
              </ul>
              
              <p class="mt-3 text-sm text-gray-500">First impressions matter. We ensure your brand looks 
              professional and cohesive across all social platforms from day one. 
              Perfect for new businesses or rebrands.</p>
            </div>

            {/* Brand Launch Packages */}
            <div class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 class="text-2xl font-semibold text-blue-700">4. Brand Launch Packages</h3>
              <p class="text-gray-600 my-2">Launch with Confidence and Clarity</p>

              <p class="text-gray-600 my-1">Launch Packages Include:</p>
              <ul class="list-disc mb-3 pl-5 text-gray-700 space-y-1">
                <li>Logo design & complete brand identity</li>
                <li>Launch video & announcement reels</li>
                <li>Full social media setup & optimization</li>
                <li>30-day content calendar with post designs</li>
                <li>Link-in-bio or mini website setup (optional)</li>
              </ul>

              <p class="text-gray-600 my-1">Perfect For:</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li className='list-none'>Startups | Small Businesses | Content Creators | Coaches | Personal Brands</li>
              </ul>
              
              <p class="mt-3 text-sm text-gray-500">Our curated launch kits provide everything you need to go 
              live with a polished and professional brand presence. 
              Ideal for entrepreneurs, creators, and coaches looking to make a bold entrance.</p>
              </div>
          </div>
        </div>
      </section>
        <FooterOne/>
    </div>
  )
}

export default Services
