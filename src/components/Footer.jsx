import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assests"; // Replace with your logo's path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faGlobe,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className=  " bg-gradient-to-b from-[#00e6e6] via-white to-[#00e6e6] text-black font-bold py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <img src={assets.logo} alt="Logo" className="h-32" />
            <div className="text-sm text-left max-w-xs">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-black-500" />
                <p>+91 9892246353 / +91 8080822692</p>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGlobe} className="text-black-500" />
                <p>www.ByteCompiler.com</p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-black-500" />
                <p>info@ByteCompiler.com</p>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-black-400"
                />
                <p>
                  {/* C-106, Gladiolus Tower, Yashwant Smart City, Vasai (E), */}
                  Mumbai - 401208.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center">
            <Link to="/terms" className="hover:text-[#ce0509]">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-[#ce0509]">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#ce0509]">
              Contact
            </Link>
            
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ce0509]"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ce0509]"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ce0509]"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ce0509]"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} BYTE COMPILER All Rights Reserved.
          </p>
          <p className="text-xs mt-2">
            Designed with <span className="text-[#ce0509]">passion</span> by
            our team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
