import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/images/logo.png"; 

export default function Footer() {
  return (
    <footer id="footer" className="bg-blue-50 text-gray-700 px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <img src={logo} alt="Disease Detective Logo" className="w-40 mb-4" />
          <p className="text-sm">
            Get personalized health insights and early disease detection,
            all from the comfort of your home
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 style={{color:'#0367A1'}} className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help Articles</a></li>
            <li><a href="#">Report an issue</a></li>
            <li><a href="#">Contact Help Desk</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 style={{color:'#0367A1'}} className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Disease diagnosis through AI</a></li>
            <li><a href="#">Personal health assessments</a></li>
            <li><a href="#">Health history tracking</a></li>
            <li><a href="#">Upload and analyze medical exams</a></li>
            <li><a href="#">Multilingual guidance for accessibility</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 style={{color:'#0367A1'}} className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Notice</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Trust Center</a></li>
          </ul>
        </div>
      </div>

      {/* Social + Bottom */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        {/* Social Icons */}
        <div style={{color:'#0367A1'}} className="flex space-x-4 mb-4 md:mb-0 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        {/* Copyright */}
        <div>Disease Detective 2025 © All Rights Reserved</div>
      </div>
    </footer>
  );
}
