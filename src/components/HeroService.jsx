import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets/assests';
import HeroService from '../pages/HeroService';

const HeroService = ({ services }) => {
  useEffect(() => {
    // Scroll animation setup
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right, .scale-in');
      
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
    <section className="bg-gradient-to-bl from-[#99ffff] via-white to-[#80ffff] md:from-[#55fbf4] md:via-white md:to-[#55fbf5] py-8 md:py-16 slide-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl block md:hidden font-bold text-transparent bg-clip-text bg-black text-center mb-4 md:mb-6 slide-up">
          Our Services
        </h2>
        <div className="flex justify-center px-2 sm:px-6 mb-8 md:mb-16 slide-up" style={{ transitionDelay: '100ms' }}>
          <h3 className="text-lg sm:text-xl md:text-2xl block md:hidden text-[#66ffff] w-full sm:w-4/5 md:w-1/2 rounded-full text-center font-semibold bg-black py-2">
            What We Do Best 🚀
          </h3>
        </div>

        {/* Mobile view - column of wider octagons */}
        <div className="md:hidden flex flex-col items-center space-y-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-80 h-56 flex flex-col items-center justify-center p-4 shadow-lg transform transition-all duration-300 text-center mx-auto fade-in"
              style={{
                clipPath: "polygon(20% 0%, 80% 0%, 100% 25%, 100% 75%, 80% 100%, 20% 100%, 0% 75%, 0% 25%)",
                background: "linear-gradient(to bottom, #1f2937, #000000)",
                border: "2px solid #66ffff",
                transitionDelay: `${200 + (index * 100)}ms`
              }}
            >
              <h3 className="text-lg font-semibold text-[#66ffff] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                {service.description.substring(0, 100)}...
              </p>
              <Link to="/services">
                <a href="#" className="text-sm text-[#66ffff] hover:underline mt-1 inline-block px-3 py-1 border border-[#66ffff] rounded-full">
                  Next Step
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop/tablet view - circular layout */}
        <div className="hidden md:block relative">
          {/* Center circle with GIF */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 scale-in">
            <div className="w-52 h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-b from-gray-800 to-black p-2 shadow-lg border-2 border-[#66ffff]">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={assets.our}
                  alt="ByteCompiler Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Service octagons - circular layout */}
          <div className="w-full aspect-square relative mx-auto max-w-4xl py-40">
            {services.map((service, index) => {
              const angle = (index * (2 * Math.PI)) / services.length;
              const radius = 38;
              const x = 50 + radius * Math.cos(angle - Math.PI / 2);
              const y = 50 + radius * Math.sin(angle - Math.PI / 2);

              return (
                <div
                  key={index}
                  className="absolute w-44 h-40 md:w-52 md:h-44 lg:w-60 lg:h-48 flex flex-col items-center justify-center p-4 shadow-lg transform transition-all duration-300 hover:scale-105 text-center fade-in"
                  style={{
                    left: `calc(${x}% - 110px)`,
                    top: `calc(${y}% - 90px)`,
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
                    background: "linear-gradient(to bottom, #1f2937, #000000)",
                    border: "2px solid #66ffff",
                    transitionDelay: `${300 + (index * 100)}ms`
                  }}
                >
                  <h3 className="text-sm md:text-base lg:text-xl font-semibold text-[#66ffff] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 mb-2">
                    {service.description.substring(0, 85)}...
                  </p>
                  <Link to="/services">
                    <a href="#" className="text-xs md:text-sm text-[#66ffff] hover:underline mt-1 inline-block px-3 py-1 border border-[#66ffff] rounded-full">
                      Next Step
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation styles */}
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
        
        .scale-in {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        /* Animated state */
        .fade-in.animate,
        .slide-up.animate,
        .slide-left.animate,
        .slide-right.animate,
        .scale-in.animate {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
      `}</style>
    </section>
  );
};

export default HeroService;