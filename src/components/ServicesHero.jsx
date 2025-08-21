import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServicesHero = ({ services }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);

  // Handle scroll events
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

  

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-bl from-[#99ffff] via-white to-[#80ffff] md:from-[#55fbf4] md:via-white md:to-[#55fbf5] py-8 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-black text-center mb-4 md:mb-6">
          Our Services
        </h2>
        <div className="flex justify-center px-2 sm:px-6 mb-8 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl text-[#66ffff] w-full sm:w-4/5 md:w-1/2 rounded-full text-center font-semibold bg-black py-2">
            What We Do Best 🚀
          </h3>
        </div>

        {/* Mobile view - column of wider octagons */}
        <div className="md:hidden flex flex-col items-center space-y-6 mb-8">
          {services.map((service, index) => {
            // Calculate rotation based on scroll position and card index
            const rotationAngle = (scrollPosition * 0.05 * (index % 2 === 0 ? 1 : -1)) % 360;
            
            return (
              <div
                key={index}
                className="w-80 h-56 flex flex-col items-center justify-center p-4 shadow-lg transform transition-all duration-300 text-center mx-auto"
                style={{
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 25%, 100% 75%, 80% 100%, 20% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(to bottom, #1f2937, #000000)",
                  border: "2px solid #66ffff",
                  transform: `rotate(${rotationAngle}deg)`,
                  transition: "transform 0.3s ease-out"
                }}
              >
                <div className="transform" style={{ transform: `rotate(${-rotationAngle}deg)` }}>
                  <h3 className="text-lg font-semibold text-[#66ffff] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {service.description.substring(0, 100)}...
                  </p>
                  <Link to="/contact">
                    <a className="text-sm text-[#66ffff] hover:underline mt-1 inline-block px-3 py-1 border border-[#66ffff] rounded-full">
                      Next Step
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop/tablet view - circular layout */}
        <div className="hidden md:block relative">
          {/* Center circle with GIF */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div 
              className="w-52 h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-b from-gray-800 to-black p-2 shadow-lg border-2 border-[#66ffff]"
              style={{
                transform: `rotate(${scrollPosition * 0.05}deg)`,
                transition: "transform 0.3s ease-out"
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="https://media4.giphy.com/media/lebpnk3qVPAjBxIKKc/giphy.gif?cid=6c09b9523zl49lwima2otwd9k8cai9g1lettp3rwdw4h6bva&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" 
                  alt="ByteCompiler Services"
                  className="w-full h-full object-cover"
                  style={{
                    transform: `rotate(${-scrollPosition * 0.05}deg)`,
                    transition: "transform 0.3s ease-out"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Service octagons - circular layout */}
          <div className="w-full aspect-square relative mx-auto max-w-4xl py-40">
            {services.map((service, index) => {
              // Calculate position around the circle
              const angle = (index * (2 * Math.PI)) / services.length;
              const radius = 38; // Percentage
              
              // Add extra rotation based on scroll position
              const scrollRotation = scrollPosition * 0.03;
              const dynamicAngle = angle + (scrollRotation * Math.PI / 180);
              
              // Calculate x and y coordinates as percentages
              const x = 50 + radius * Math.cos(dynamicAngle - Math.PI / 2);
              const y = 50 + radius * Math.sin(dynamicAngle - Math.PI / 2);

              // Individual card rotation (alternating directions)
              const cardRotation = scrollPosition * 0.07 * (index % 2 === 0 ? 1 : -1);

              return (
                <div
                  key={index}
                  className="absolute w-44 h-40 md:w-52 md:h-44 lg:w-60 lg:h-48 flex flex-col items-center justify-center p-4 shadow-lg transform transition-all duration-300 hover:scale-105 text-center"
                  style={{
                    left: `calc(${x}% - 110px)`,
                    top: `calc(${y}% - 90px)`,
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
                    background: "linear-gradient(to bottom, #1f2937, #000000)",
                    border: "2px solid #66ffff",
                    transform: `rotate(${cardRotation}deg)`,
                    transition: "all 0.5s ease-out"
                  }}
                >
                  <div className="transform" style={{ transform: `rotate(${-cardRotation}deg)` }}>
                    <h3 className="text-sm md:text-base lg:text-xl font-semibold text-[#66ffff] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 mb-2">
                      {service.description.substring(0, 85)}...
                    </p>
                    <Link to="/contact">
                      <a className="text-xs md:text-sm text-[#66ffff] hover:underline mt-1 inline-block px-3 py-1 border border-[#66ffff] rounded-full">
                        Next Step
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;