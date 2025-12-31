import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import SMSetupPackages from './packages/SMSetupPackages'

const Setup = [
  { icon: "", title: "Platform Account Creation & Optimization",
    desc: "We create or professionally optimize your accounts on platforms such as Instagram, Facebook, LinkedIn, YouTube, and X (Twitter). This includes username selection, profile bios, descriptions, and links aligned with your brand." },
  { icon: "", title: "Profile & Branding Setup", 
    desc: "Your profile images, cover banners, highlights, and basic visual elements are designed or aligned to ensure brand consistency across all platforms." },
  { icon: "", title: "Business & Creator Account Configuration", 
    desc: "We set up business/creator accounts, connect them with Meta Business Manager where applicable, and enable essential features such as insights, messaging tools, and ad readiness." },
  { icon: "", title: "Basic Content Strategy Guidance", 
    desc: "We provide recommendations on posting formats, content categories, tone of voice, and best practices tailored to your industry and target audience." }
]

const SocialMediaSetup = () => {
  return (
    <>
    <Topbar/>
      <header className="bg-sky-100 py-10 px-5 space-y-6">
        <h2 className="text-4xl font-bold text-center">📱 Social Media Setup</h2>
 
        <div className="max-w-6xl mx-auto text-lg text-center space-y-4">
          <p>
            At <span className="font-semibold">Grow Peak Media</span>, we help brands establish a 
            strong and professional presence across all major social media platforms. 
            A well-structured social media setup is the foundation of successful digital marketing — it ensures 
            your brand looks credible, consistent, and ready to engage with your audience from day one.
          </p>

          <p>
            Our Social Media Setup service is designed to position your brand for growth by creating 
            optimized profiles that reflect your identity, communicate your value, 
            and attract the right audience.
          </p>
        </div>
      </header>

      {/* What We Set Up */}
      <section className="bg-orange-400 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🔧 What We Set Up</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {Setup.map((set, idx) => (

            <div 
              key={idx} 
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow 
              space-y-2 text-center">

              <div className="text-3xl flex flex-col items-center">{set.icon}</div>
              <div className="text-xl text-purple-600 font-semibold">{set.title}</div>
              <p className="text-gray-700">{set.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Social Media Setup Matters */}
      <section className="bg-green-100 py-10 px-4 space-y-6">
        <h2 className="text-3xl text-center font-bold">🚀 Why Social Media Setup Matters?</h2>

        <ul className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <li>✔ Builds brand credibility</li>
          <li>✔ Improves discoverability and reach</li>
          <li>✔ Prepares accounts for ads and growth campaigns</li>
          <li>✔ Saves time and avoids common mistakes</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-lime-100 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🌱 Start Strong with Grow Peak Media</h2>

        <p className="max-w-3xl mx-auto text-lg text-center">
          A strong social media presence starts with the right setup. 
          With <span className="font-semibold">Grow Peak Media’s</span> Social Media Setup, 
          your brand is ready to connect, engage, and grow confidently across digital platforms.
        </p>
        
        <div className="flex flex-col items-center">
          <a className="bg-green-600 rounded-full p-3 italic font-semibold text-white text-center text-lg">
            📩 Let us set the foundation for your social media success
          </a>
        </div>
      </section>

      {/* Why Grow Peak Media? */}
      <section className="bg-fuchsia-100 py-10 px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">⭐ Why Grow Peak Media?</h2>

        <ul className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <li>✔ Professional & brand-focused setup</li>
          <li>✔ Platform-optimized configuration</li>
          <li>✔ Growth-ready accounts</li>
          <li>✔ Transparent pricing, no hidden costs</li>
        </ul>
      </section>
      <SMSetupPackages/>
    <FooterOne/> 
    </>
  )
}

export default SocialMediaSetup