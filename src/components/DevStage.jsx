import React, { useState, useEffect } from 'react';

const DevStage = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  
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

  const steps = [
    {
      id: 1,
      title: "Requirement Gathering",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M16,12h32c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V16C12,13.8,13.8,12,16,12z" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
          <path d="M20,8v8M32,8v8M44,8v8" stroke="#000" strokeWidth="2"/>
          <line x1="12" y1="24" x2="48" y2="24" stroke="#000" strokeWidth="2"/>
          <line x1="20" y1="32" x2="40" y2="32" stroke="#000" strokeWidth="2"/>
          <line x1="20" y1="38" x2="40" y2="38" stroke="#000" strokeWidth="2"/>
          <line x1="20" y1="44" x2="30" y2="44" stroke="#000" strokeWidth="2"/>
        </svg>
      ),
      description: "Gathering and analyzing client requirements to define the project scope and objectives."
    },
    {
      id: 2,
      title: "Design",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M32,40c0,0-18-10-18-24c0-6,4-12,10-12c4,0,8,4,8,8c0-4,4-8,8-8c6,0,10,6,10,12C50,30,32,40,32,40z" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
          <path d="M22,20l4,8M32,20l4,8M42,20l-4,8" stroke="#f5a623" strokeWidth="2"/>
        </svg>
      ),
      description: "Creating wireframes, UI/UX designs, and layouts to establish a seamless user experience."
    },
    {
      id: 3,
      title: "Prototype",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <rect x="12" y="12" width="40" height="30" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
          <rect x="16" y="18" width="32" height="18" fill="#e6e6e6" stroke="#000" strokeWidth="2"/>
          <line x1="16" y1="22" x2="48" y2="22" stroke="#4a90e2" strokeWidth="2"/>
          <rect x="20" y="26" width="8" height="6" fill="#f5a623" strokeWidth="0"/>
          <rect x="32" y="26" width="8" height="6" fill="#7ed321" strokeWidth="0"/>
          <line x1="18" y1="46" x2="46" y2="46" stroke="#000" strokeWidth="2"/>
          <line x1="24" y1="42" x2="24" y2="50" stroke="#000" strokeWidth="2"/>
          <line x1="40" y1="42" x2="40" y2="50" stroke="#000" strokeWidth="2"/>
        </svg>
      ),
      description: "Developing an interactive prototype to visualize functionality and gather early feedback."
    },
    {
      id: 4,
      title: "Development",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <rect x="10" y="14" width="30" height="24" rx="2" fill="#4a90e2" stroke="#000" strokeWidth="2"/>
          <path d="M40,32l14-8v16L40,32z" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
          <rect x="18" y="42" width="28" height="8" rx="2" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
          <text x="20" y="28" fontSize="12" fill="#fff">&lt;/&gt;</text>
        </svg>
      ),
      description: "Writing clean and efficient code to build the core functionality of the application."
    },
    {
      id: 5,
      title: "Quality Assurance",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <circle cx="32" cy="32" r="20" fill="#f0f0f0" stroke="#f5a623" strokeWidth="3"/>
          <path d="M26,32l6,6l12-12" stroke="#7ed321" strokeWidth="3" fill="none"/>
          <path d="M14,20l-4-8M18,14l-8-4" stroke="#f5a623" strokeWidth="2"/>
          <path d="M50,20l4-8M46,14l8-4" stroke="#f5a623" strokeWidth="2"/>
        </svg>
      ),
      description: "Performing rigorous testing to identify and fix bugs, ensuring a high-quality product."
    },
    {
      id: 6,
      title: "Deployment",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <path d="M32,12c0,0-10,8-10,20c0,12,10,20,10,20" stroke="#4a90e2" strokeWidth="3" fill="none"/>
          <path d="M32,12c0,0,10,8,10,20c0,12-10,20-10,20" stroke="#4a90e2" strokeWidth="3" fill="none"/>
          <circle cx="32" cy="20" r="6" fill="#f5a623" stroke="#000" strokeWidth="2"/>
          <path d="M28,45l4-15l4,15" stroke="#000" strokeWidth="2" fill="none"/>
        </svg>
      ),
      description: "Deploying the final product to production, ensuring seamless performance and reliability."
    },
    {
      id: 7,
      title: "Support & Maintenance",
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12">
          <circle cx="24" cy="32" r="12" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
          <circle cx="24" cy="28" r="4" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
          <path d="M18,38c0-4,3-6,6-6s6,2,6,6" stroke="#000" strokeWidth="2" fill="none"/>
          <path d="M38,20c8,0,12,8,12,12s-4,12-12,12" stroke="#4a90e2" strokeWidth="2" fill="none"/>
          <path d="M42,16l-4,4l4,4M42,44l-4-4l4-4" stroke="#4a90e2" strokeWidth="2" fill="none"/>
        </svg>
      ),
      description: "Providing ongoing updates, bug fixes, and technical support to ensure long-term stability."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 slide-up">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Development Process We Follow</h1>
        <p className="text-lg text-gray-600">
          Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.slice(0, 4).map((step, index) => (
          <div 
            key={step.id}
            className="bg-gradient-to-bl from-aqua-600 via-white rounded-lg shadow-lg p-6 transition-all duration-300 relative overflow-hidden fade-in"
            onMouseEnter={() => setHoveredStep(step.id)}
            onMouseLeave={() => setHoveredStep(null)}
            style={{ transitionDelay: `${100 + (index * 100)}ms` }}
          >
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {hoveredStep === step.id && (
              <>
                <div className="absolute top-6 right-6 text-6xl font-bold text-red-400 animate-fade-in">0{step.id}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className="h-full bg-gradient-to-r from-rose-200 to-red-500 animate-progress-bar"></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {steps.slice(4).map((step, index) => (
          <div 
            key={step.id}
            className="bg-gradient-to-bl from-aqua-600 via-white rounded-lg shadow-lg p-6 transition-all duration-300 relative overflow-hidden fade-in"
            onMouseEnter={() => setHoveredStep(step.id)}
            onMouseLeave={() => setHoveredStep(null)}
            style={{ transitionDelay: `${500 + (index * 100)}ms` }}
          >
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {hoveredStep === step.id && (
              <>
                <div className="absolute top-6 right-6 text-6xl font-bold text-red-400 animate-fade-in">0{step.id}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div className="h-full bg-gradient-to-r from-red-300 to-red-500 animate-progress-bar"></div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

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
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes progressBar {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .animate-progress-bar {
          animation: progressBar 0.5s ease-in-out;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default DevStage;