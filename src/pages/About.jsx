import React, { useEffect } from 'react';
import OurGoal from '../components/OurGoal';
import { FaUserTie, FaClock, FaUsers, FaHeart, FaHandsHelping, FaAward } from 'react-icons/fa';
import AboutAgency from '../components/AboutAgency';
import { HiBuildingOffice } from "react-icons/hi2";
import ContactForm from '../components/Contact';

const About = () => {
  useEffect(() => {
    // Scroll animation setup
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mt-20 w-full py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4 fade-in">
              <div className="w-6 h-6 text-2xl text-rose-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <HiBuildingOffice />
              </div>
              <span className="text-rose-600 font-medium ml-2 uppercase tracking-wide hover:text-rose-600 transition-colors duration-300">ABOUT US</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-navy-900 slide-up">
              We are a <span className="text-rose-600 hover:text-rose-600 transition-colors duration-300">Creative</span> digital
              agency located in India.
            </h2>
            
            <div className="space-y-6 text-gray-800 slide-left">
              <p className=" p-2 rounded transition-all duration-300">
                The Digital India initiative has revolutionized industries, making an online presence crucial for success. Having a robust and user-friendly website is an essential part of this transformation. At ByteCompiler, we specialize in developing customized, visually engaging, and high-performing web solutions tailored to your business needs.
              </p>
              
              <p className=" p-2 rounded transition-all duration-300">
                A well-optimized website enhances visibility, boosts sales, and strengthens market positioning. In today's interconnected business world, digital platforms eliminate geographical barriers, allowing businesses to engage with customers nationwide. ByteCompiler ensures seamless integration into the online market, helping businesses establish a strong digital identity.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 slide-right">
            <img 
              src="https://i.ibb.co/mWGN5qj/business.jpg" 
              alt="Business discussion" 
              className="w-full h-[500px] rounded-lg shadow-md hover:shadow-xl  hover:scale-[1.02] transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
      
      <OurGoal />
      
      {/* Transparency and Ethics Section */}
     

        <div className="max-w-6xl mt-2 mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-rose-600 fade-in">Transparency and Ethics</h1>
          <p className="text-center text-gray-800 mt-4 max-w-3xl mx-auto fade-in">
            Honesty and ethical business practices form the foundation of long-term success, building credibility and trust among clients and partners.
          </p>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {/* Client-focused Approach */}
            <div className="bg-rose-50 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-2 transition-all duration-300 fade-in">
              <div className="bg-white  w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300">
                <FaUserTie className="w-8 h-8 text-rose-600 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4 hover:text-rose-600 transition-colors duration-300">Client-focused Approach</h3>
            </div>

            {/* Timely Service Delivery */}
            <div className="bg-rose-50 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-2 transition-all duration-300 fade-in" style={{ transitionDelay: '100ms' }}>
              <div className="bg-white  w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300">
                <FaClock className="w-8 h-8 text-rose-600 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4 hover:text-rose-600 transition-colors duration-300">Timely Service Delivery</h3>
            </div>

            {/* Seamless Collaboration */}
            <div className="bg-rose-50 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-2 transition-all duration-300 fade-in" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white  w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300">
                <FaUsers className="w-8 h-8 text-rose-600 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4 hover:text-rose-600 transition-colors duration-300">Seamless Collaboration</h3>
            </div>

            {/* Employee Well-being */}
            <div className="bg-rose-50 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-2 transition-all duration-300 fade-in" style={{ transitionDelay: '300ms' }}>
              <div className="bg-white  w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300">
                <FaHeart className="w-8 h-8 text-rose-600 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4 hover:text-rose-600 transition-colors duration-300">Employee Well-being</h3>
            </div>

            {/* Teamwork */}
            <div className="bg-rose-50 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-2 transition-all duration-300 fade-in" style={{ transitionDelay: '400ms' }}>
              <div className="bg-white  w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300">
                <FaHandsHelping className="w-8 h-8 text-rose-600 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4 hover:text-rose-600 transition-colors duration-300">Teamwork</h3>
            </div>

            {/* Excellence in Service */}
            <div className="bg-rose-50 p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-2 transition-all duration-300 fade-in" style={{ transitionDelay: '500ms' }}>
              <div className="bg-white  w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300">
                <FaAward className="w-8 h-8 text-rose-600 hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4 hover:text-rose-600 transition-colors duration-300">Excellence in Service</h3>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <ContactForm />
        </div>
      
      {/* Add these styles to your global CSS */}
      <style jsx global>{`
        /* Animation classes */
        .fade-in {
          opacity: 0;
          transition: opacity 0.6s ease-out;
        }
        
        .slide-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .slide-left {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .slide-right {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        /* Animated state */
        .fade-in.animate,
        .slide-up.animate,
        .slide-left.animate,
        .slide-right.animate {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>
    </div>
  );
};

export default About;