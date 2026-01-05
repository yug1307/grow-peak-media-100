import React from 'react'
import Topbar from '../components/Topbar'
import FooterOne from '../components/FooterOne'
import { FaCalendarAlt, FaComments, FaBullhorn, FaChartLine, FaUsers } from 'react-icons/fa'
import SMMPackages from './packages/SMMPackages'

const Manage = [
  { icon: <FaCalendarAlt className="text-blue-500"/>, title: "Content Planning & Strategy",
    desc: "We create a tailored monthly content strategy based on your industry, target audience, and business goals, ensuring every post serves a purpose" },
  { icon: <FaBullhorn className="text-red-500"/>, title: "Content Creation & Posting", 
    desc: "From captions to creatives, we manage regular posting schedules using engaging formats such as posts, carousels, reels, and stories" },
  { icon: <FaComments className="text-indigo-600"/>, title: "Community Management", 
    desc: "We monitor comments, messages, and interactions to help maintain a positive brand image and improve audience engagement" },
  { icon: <FaChartLine className="text-green-600"/>, title: "Hashtag & Trend Research", 
    desc: "Relevant hashtags and trending topics are researched and applied to maximize reach and discoverability" }
]

const SocialMediaManagement = () => {
  return (
    <>
    <Topbar/>
      <header className="bg-sky-100 py-10 px-5 space-y-6">
        <h2 className="text-4xl font-bold text-center">📊 Social Media Management</h2>
 
        <div className="max-w-6xl mx-auto text-lg text-center space-y-4">
          <p>
            At <span className="font-semibold">Grow Peak Media</span>, we help brands grow, engage
            and convert audiences through strategic & consistent Social Media Management. 
            Social Media is more than just posting content - it's about building relationship,
            telling stories, and creating a strong digital presence that drives real business results.
          </p>

          <p>
            Our Social Media Management services ensures your platforms stay active, relevant, 
            and aligned with your brand voice while focusing on visibility, engagement, and growth.
          </p>
        </div>
      </header>

      {/* What We Manage */}
      <section className="bg-orange-400 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🔧 What We Manage</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {Manage.map((mng, idx) => (

            <div 
              key={idx} 
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow 
              space-y-2 text-center">

              <div className="flex justify-center text-3xl">{mng.icon}</div>
              <div className="text-xl text-purple-600 font-semibold">{mng.title}</div>
              <p className="text-gray-700">{mng.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-800 py-10 px-5 mx-3 rounded-xl space-y-4">
        <h2 className="text-3xl text-white font-bold text-center">📈 Performance Tracking & Optimization</h2>
      
        <p className="max-w-4xl mx-auto text-white text-lg text-center">
          We track key metrics such as reach, engagement, follower growth, and content performance. 
          Monthly insights help refine strategy and improve results continuously.
        </p>
      </section>

      {/* Why Choose Grow Peak Media */}
      <section className="bg-green-100 py-10 px-4 my-12 space-y-6">
        <h2 className="text-3xl font-bold text-center">🌟 Why Choose Grow Peak Media?</h2>

        <ul className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
          <li>✔ Consistent brand presence</li>
          <li>✔ Data-driven strategies</li>
          <li>✔ Platform-specific content</li>
          <li>✔ Focus on growth & engagement</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-lime-100 py-10 px-4 space-y-6">
        <h2 className="text-3xl font-bold text-center">📈 Turn Your Views Into Impact</h2>

        <p className="max-w-3xl mx-auto text-lg text-center">
          With <span className="font-semibold">Grow Peak Media’s</span> Social Media Management,
          your brand stays active, relevant and competitive — while you focus on your running business.
        </p>
         
        <div className="flex flex-col items-center">
          <a href="#" 
          className="bg-green-600 rounded-full p-3 italic font-semibold text-white text-center text-lg">
            📩 Let us manage your social presence, while you scale
          </a>
        </div>
      </section>
      <SMMPackages/>
    <FooterOne/> 
    </> 
  )
} 

export default SocialMediaManagement
