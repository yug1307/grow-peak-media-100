import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () =>{  
  return(
    <>  
    <footer className="bg-gray-900 text-gray-300">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 px-5 gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center">
        <svg width="180" height="180" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          {/* Peak Icon */}
          <path d="M250 600 L512 140 L780 600 Z" fill="#ffffff"/>

          {/* Inner Peak Accent */}
          <path d="M512 140 L660 600 L364 600 Z" fill="#f4b400"/>

          {/* Growth Line */}
          {/* <path d="M240 650 C460 680, 470 540, 520 500 S640 420, 700 360" stroke="#2ecc71"
          stroke-width="12" fill="none" stroke-linecap="round"/> */}

          {/* Arrow Tip */}
          {/* <polygon points="700,360 680,370 692,342" fill="#2ecc71"/> */}

          {/* Company Name */}
          <text x="512" y="760" font-family="Poppins, Montserrat, Arial, sans-serif" font-size="100"
            text-anchor="middle" fill="#ffffff" font-weight="600">GROW <tspan fill="#f4b400">PEAK</tspan>
          </text>

          {/* MEDIA Text */}
          <text x="512" y="830" font-family="Poppins, Montserrat, Arial, sans-serif" font-size="60"
            text-anchor="middle" fill="#bbbbbb" letter-spacing="10">MEDIA
          </text>
        </svg>
        </div>
        
        {/* Company */}
        <div className="space-y-4">
          <h2 className="text-xl text-white font-semibold">Company</h2>

          <ul className="space-y-2">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="space-y-4">
          <h2 className="text-xl text-white font-semibold">Our Services</h2>

          <ul className="space-y-2">
            <li><Link to="/video-production">Video Production</Link></li>
            <li><Link to="/social-media-setup">Social Media Setup</Link></li>
            <li><Link to="/social-media-management">Social Media Management</Link></li>
            <li><Link to="/brand-launch-packages">Brand Launch Packages</Link></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <a href="https://www.facebook.com/share/19Q5eYMq54/?mibextid=wwXIfr" className="hover:text-blue-500"><FaFacebook/></a>
            <a href="https://wa.me/917888020432" className="hover:text-green-400"><FaWhatsapp/></a>
            <a href="https://www.instagram.com/growpeakmedia?igsh=MXJ6M3kzOGx0MzBkOA%3D%3D&utm_source=qr" className="hover:text-pink-500"><FaInstagram/></a>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="border-t border-gray-700"></div>

      <div className="py-12 text-center text-md">© {new Date().getFullYear()} Grow Peak Media. All Rights Reserved</div>
    </footer>
    </>
  )
}

export default FooterOne
