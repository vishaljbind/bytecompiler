import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets/assests';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate curve height based on scroll position (max 100px)
  const curveHeight = Math.min(scrollPosition * 0.5, 100);
  
  return (
    <section className="relative flex h-screen md:h-screen flex-col md:flex-row items-center justify-between text-black py-16 px-6 md:px-12 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-center object-cover"
        >
          <source src={assets.robo} type="video/mp4" />
        </video>
      </div>

      <div className="flex-1 max-w-lg text-center px-10 md:text-left mt-10 relative z-0">
        <h1 className="text-3xl text-[#66ffff] md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-[#ce0509]">
            AI-Driven Experiences
          </span>{" "}
          <br />
          Future-Ready Results
        </h1>
        
        <p className="text-lg text-[#99ffff] mb-6">
          Welcome to <strong>ByteCompiler</strong> — where <strong>artificial intelligence</strong>, 
          human creativity, and cutting-edge technology unite to build 
          <strong> intelligent websites, smart apps, and data-driven marketing</strong> 
          <br />that evolve with your audience. The future isn’t coming — <strong>we’re building it now</strong>.
        </p>

        <button className="bg-gradient-to-r from-[#ce0509] to-[#55fbf4] font-bold text-black px-6 py-3 rounded-md shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
          <Link to="/contact">Let’s Build the Future</Link>
        </button>
      </div>

      {/* Curved Bottom Div */}
      <div 
        className="absolute bottom-0 left-0 w-full h-24 z-0 border-none"
        style={{
          borderRadius: `${curveHeight}% ${curveHeight}% 0 0`,
          background: 'linear-gradient(to right, rgb(255, 255, 255), rgb(85, 251, 245))',
          transform: `translateY(${Math.max(0, 96 - curveHeight)}px)`,
          transition: 'all 0.3s ease-out',
          ...(window.innerWidth < 768 && {
            background: 'linear-gradient(to bottom right, #99ffff, white, #80ffff)'
            
          })
        }}

      />
    </section>
  );
};

export default HeroSection;
