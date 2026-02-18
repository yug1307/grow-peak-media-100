import React from 'react'
import Topbar from './Topbar';
import FooterOne from './FooterOne';
import ContactForm from "./ContactForm"
import { MapPin, Phone, Mail } from "lucide-react"; 

const ContactUs = () => {
  return (
    <> 
    <Topbar/>
    <ContactForm/>
      <section className="bg-gradient-to-b from-white to-blue-50 py-16 text-center">
      {/* Contact Us Section */}
      <h2 className="text-3xl font-bold mb-8">📞 Contact Us</h2>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-3 text-gray-700">
          <MapPin className="text-red-500" />
          <p>Nandanvan, Nagpur - 440 024</p>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-700">
          <Phone className="text-green-500" />
          <a href="tel:+91 7888020432">7888020432,</a>
          <a href="tel:+91 7974472452">7974472452,</a>
          <a href="tel:+91 9322276364">9322276364</a>
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-700">
          <Mail className="text-blue-500" />
          <a href="mailto:team@growpeakmedia.com" className="hover:text-blue-600 cursor-pointer">
           team@growpeakmedia.com
          </a>
        </div>
      </div>
      </section>
      <FooterOne/>
    </>
  )
}

export default ContactUs