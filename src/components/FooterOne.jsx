// import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa"; 
import { FaWhatsapp } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import './FooterOne.css' 

const FooterOne = () => {
  return (
    <div> 
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Company Section */}
        <div className="company"> 
          <h3 className="text-lg text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            {/* <li><a href="#" className="hover:text-gray-400">Testimonials</a></li> */}
            <li><a href="/privacypolicy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div> 

        {/* Our Services Section */}
        <div className="services">
          <a href="/services"><h3 className="text-lg text-white font-semibold mb-4">Our Services</h3></a>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Video Production</a></li>
            <li><a href="#" className="hover:text-white">Social Media Setup</a></li>
            <li><a href="#" className="hover:text-white">Brand Launch Packages</a></li>
            <li><a href="#" className="hover:text-white">Social Media Management</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>

          <ul className="follow-us">
           <li>
            <a href="https://www.facebook.com/share/19Q5eYMq54/?mibextid=wwXIfr" className="text-white">
              <FaFacebook className="text-blue-500 fb"/>
            </a>
           </li>

           <li>
            <a href="https://wa.me/917888020432" className="text-white">
              <FaWhatsapp className="whatsapp"/>
            </a>
           </li>

           <li>
            <a href="https://www.instagram.com/growpeakmedia?igsh=MXJ6M3kzOGx0MzBkOA%3D%3D&utm_source=qr" className="text-white">
              <FaInstagram className="text-red-600 insta"/>
            </a>
           </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="contact-us"> 
          <h3 className="text-lg text-white font-semibold mb-4">Contact Us</h3>

          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span>📍</span>
              <p className="text-white">Nandanvan, Nagpur - 440024</p>
            </li>
 
            <li className="flex items-center space-x-2">  
              <span className="text-white"><BiPhoneCall/></span>
              <a href="tel:+91 7888020432" className="hover:text-white">7888020432,</a>
              <a href="tel:+91 7974472452" className="hover:text-white">7974472452,</a>
              <a href="tel:+91 9322276364" className="hover:text-white">9322276364</a>
            </li>

            <li className="flex items-center space-x-2">
              <span>📧</span>
              <a href="mailto:team@growpeakmedia.com" className="hover:text-white">team@growpeakmedia.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default FooterOne