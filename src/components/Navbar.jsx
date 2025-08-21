import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assests";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [currentService, setCurrentService] = useState("Services");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Services for transition effect
  const services = [
    "Web Development",
    "App Development",
    "PWA Development",
    "AI Automations",
    "Ecommerce Solutions",
    "UI/UX Designing",
    "Graphic Designing",
    "Digital Marketing",
    "Google & Meta Ads",
    "Social Media Management",
  ];

  // Enhanced cycle through services for mobile view with transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start transition out
      setIsTransitioning(true);
      
      // Schedule the content change after transition out completes
      setTimeout(() => {
        const currentIndex = services.indexOf(currentService) !== -1 
          ? services.indexOf(currentService) 
          : 0;
        const nextIndex = (currentIndex + 1) % services.length;
        setCurrentService(services[nextIndex]);
        
        // Start transition in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 500);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [currentService]);

  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300bg-transparent bg-white bg-opacity-30 backdrop-blur-lg flex items-center justify-between text-black h-[75px] sm:h-24 w-full mx-auto md:w-[90%] lg:w-[70%] rounded-full shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={assets.logo} alt="Logo" className="h-20 sm:h-[110px]" />
            </Link>
          </div>

          {/* Mobile Services Text Transition (visible only on mobile) */}
          <div className="md:hidden flex-1 mx-4 overflow-hidden h-6">
            <div 
              className={`text-black font-bold text-lg text-center transition-all duration-500 ease-in-out transform ${
                isTransitioning ? "opacity-0 -translate-y-6" : "opacity-100 translate-y-0"
              }`}
            >
              {currentService}
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm sm:text-base lg:text-lg">
            <li className="relative group font-bold">
              <Link to="/" onClick={handleLinkClick}>
                Home
                <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group font-bold">
              <Link to="/careers" onClick={handleLinkClick}>
                Career
                <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className="text-lg font-bold">
                Services
                <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>

              {/* Dropdown Menu for Desktop */}
              {isServicesOpen && (
                <ul className="absolute top-full left-0 w-56 bg-opacity-80 bg-white shadow-lg rounded-lg py-2 z-10">
                  {services.map((service, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-teal-100">
                      <Link to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`} onClick={handleLinkClick}>
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative group font-bold">
              <Link to="/aiservices" onClick={handleLinkClick}>
                AI Automations
                <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="relative group font-bold">
              <Link to="/portfolio" onClick={handleLinkClick}>
                Portfolio
                <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            
            <li className="relative group font-bold">
              <Link to="/about" onClick={handleLinkClick}>
                About
                <span className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>

          {/* Contact Button with Water Fill Effect */}
          <button className="hidden md:block relative bg-black text-white px-6 py-3 rounded-full font-bold tracking-wide overflow-hidden transition-all duration-300 group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              <Link to="/contact">Get in Touch</Link>
            </span>
            {/* Water fill effect */}
            <div className="absolute inset-0 bg-[#ce0509] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-bottom"></div>
          </button>

          {/* Mobile Hamburger Icon */}
          <button className="md:hidden text-black focus:outline-none relative" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 transition-transform duration-300"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="absolute top-[100%] left-0 w-full bg-gradient-to-r font-semibold from-[#b3ffff] to-[#99ffff] text-black flex flex-col items-center space-y-6 py-6 z-20 animate-slideIn">
              <li>
                <Link to="/" onClick={handleLinkClick} className="hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/careers" onClick={handleLinkClick} className="hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                  Careers
                </Link>
              </li>
              <li className="relative w-full flex flex-col items-center">
                <div className="flex items-center justify-center w-full">
                  <Link 
                    to="/services" 
                    onClick={handleLinkClick} 
                    className="hover:text-rose-500 transition-all duration-300 transform hover:scale-110"
                  >
                    Services
                  </Link>
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                    className="ml-2 focus:outline-none"
                  >
                    {isMobileServicesOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
                
                {isMobileServicesOpen && (
                  <ul className="bg-[#7cecfc] w-56 rounded-lg shadow-md text-center mt-2">
                    {services.map((service, index) => (
                      <li key={index} className="py-2 hover:bg-rose-400">
                        <Link 
                          to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`} 
                          onClick={handleLinkClick}
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link to="/aiservices" onClick={handleLinkClick} className="hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                  AI Automations
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={handleLinkClick} className="hover:text-rose-500  transition-all duration-300 transform hover:scale-110">
                  Portfolio
                </Link>
              </li>
              
              <li>
                <Link to="/about" onClick={handleLinkClick} className="hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;