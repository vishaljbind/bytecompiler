import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const AboutAgency = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef(null);
  const statsRef = useRef(null);
  const navigate = useNavigate();
  
  const targetCounts = {
    projects: 150,
    clients: 80,
    team: 12,
    years: 2
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startCountingAnimation();
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    // Add scroll animation for the stats section
    const handleScroll = () => {
      if (statsRef.current) {
        const statsElement = statsRef.current;
        const rect = statsElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          const scrollPercent = Math.min(
            1,
            Math.max(0, (window.innerHeight - rect.top) / window.innerHeight)
          );
          
          // Apply parallax effect to each stat card
          const cards = statsElement.querySelectorAll('.stat-card');
          cards.forEach((card, index) => {
            const delay = index * 0.1;
            const translateY = scrollPercent * 20 * (1 - delay);
            const opacity = Math.min(1, scrollPercent * 3 - delay);
            
            card.style.transform = `translateY(${translateY}px)`;
            card.style.opacity = opacity;
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startCountingAnimation = () => {
    const duration = 2000; // 2 seconds for the animation
    
    const projectsInterval = setInterval(() => {
      setProjectsCount(prev => {
        const newValue = prev + Math.ceil(targetCounts.projects / (duration / 50));
        if (newValue >= targetCounts.projects) {
          clearInterval(projectsInterval);
          return targetCounts.projects;
        }
        return newValue;
      });
    }, 50);
    
    const clientsInterval = setInterval(() => {
      setClientsCount(prev => {
        const newValue = prev + Math.ceil(targetCounts.clients / (duration / 50));
        if (newValue >= targetCounts.clients) {
          clearInterval(clientsInterval);
          return targetCounts.clients;
        }
        return newValue;
      });
    }, 50);
    
    const teamInterval = setInterval(() => {
      setTeamCount(prev => {
        const newValue = prev + Math.ceil(targetCounts.team / (duration / 50));
        if (newValue >= targetCounts.team) {
          clearInterval(teamInterval);
          return targetCounts.team;
        }
        return newValue;
      });
    }, 50);
    
    const yearsInterval = setInterval(() => {
      setYearsCount(prev => {
        const newValue = prev + Math.ceil(targetCounts.years / (duration / 50));
        if (newValue >= targetCounts.years) {
          clearInterval(yearsInterval);
          return targetCounts.years;
        }
        return newValue;
      });
    }, 50);
  };
  
  return (
    <div ref={componentRef} className="max-w-7xl mx-auto p-8 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left section */}
        <div className="md:w-1/2">
          <div className="text-[#ce0509] font-medium mb-2">ABOUT US</div>
          <h1 className=" text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-[#ce0509]">
              Top-Rated
            </span>{" "} Web And Mobile App Development Company
          </h1>
          
          <div className="text-black-400 space-y-4">
            <p>
              Digital India spearheads a sweeping movement, impacting all sectors, including online business.
              A robust infrastructure entails a meticulously crafted, responsive, and fully operational website.
              ByteCompiler, a leading web development company, specializes in delivering top-tier,
              personalized, visually appealing, and highly functional web solutions for those aiming to establish
              a formidable online business presence.
            </p>
          </div>
          
          <button onClick={() => navigate("/about")} className="mt-6 px-6 py-3 bg-white text-[#ce0509] border border-[#ce0509] rounded-full flex items-center group hover:bg-orange-50 transition-colors">
            <span>About Us</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        
        {/* Right section with stats - added ref and animation classes */}
        <div ref={statsRef} className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="stat-card bg-gradient-to-bl from-aqua-600 via-white to-aqua-600 p-6 rounded-lg transition-all duration-500 transform hover:scale-105 opacity-0">
            <div className="text-[#ce0509] font-medium mb-2">PROJECTS</div>
            <div className="text-4xl font-bold mb-2">{projectsCount}+</div>
            <p className="text-black-400">
              Innovative, diverse, and impactful projects shape our journey to excellence.
            </p>
          </div>
          
          <div className="stat-card bg-gradient-to-bl from-aqua-600 via-white p-6 rounded-lg transition-all duration-500 transform hover:scale-105 opacity-0">
            <div className="text-[#ce0509] font-medium mb-2">CLIENTS</div>
            <div className="text-4xl font-bold mb-2">{clientsCount}+</div>
            <p className="text-black-400">
              Valued clients, the heartbeat of our success, inspire our every endeavor.
            </p>
          </div>
          
          <div className="stat-card bg-gradient-to-bl from-aqua-600 via-white p-6 rounded-lg transition-all duration-500 transform hover:scale-105 opacity-0">
            <div className="text-[#ce0509] font-medium mb-2">TEAM</div>
            <div className="text-4xl font-bold mb-2">{teamCount}+</div>
            <p className="text-black-400">
              A dedicated, talented team fuels our creativity and drives our success.
            </p>
          </div>
          
          <div className="stat-card bg-gradient-to-bl from-aqua-600 via-white p-6 rounded-lg transition-all duration-500 transform hover:scale-105 opacity-0">
            <div className="text-[#ce0509] font-medium mb-2">YEARS</div>
            <div className="text-4xl font-bold mb-2">{yearsCount}+</div>
            <p className="text-black-400">
              Years mold experience, turning knowledge into wisdom, and guiding our path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;