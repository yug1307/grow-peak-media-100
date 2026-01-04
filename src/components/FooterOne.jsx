import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const FooterOne = () =>{
  return(
    <>
    <footer className="mt-auto bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Company */}
        <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/privacypolicy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Our Services</h3>
          
          <ul className="space-y-2">
            <a href="/video-production"><li>Video Production</li></a>
            <li>Social Media Setup</li>
            <li>Brand Launch Packages</li>
            <li>Social Media Management</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          
          <div className="flex gap-5 text-2xl">
            <a href="https://www.facebook.com/share/19Q5eYMq54/?mibextid=wwXIfr" className="hover:text-blue-500"><FaFacebook/></a>
            <a href="https://wa.me/917888020432" className="hover:text-green-400"><FaWhatsapp/></a>
            <a href="https://www.instagram.com/growpeakmedia?igsh=MXJ6M3kzOGx0MzBkOA%3D%3D&utm_source=qr" className="hover:text-pink-500"><FaInstagram/></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="my-10 border-t border-gray-700"></div>

      <div className="text-center text-md">© {new Date().getFullYear()} Grow Peak Media. All rights reserved.</div>
    </footer>
    </>
  )
}

export default FooterOne
