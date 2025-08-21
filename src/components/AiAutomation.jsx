import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const AIAutomationTools = () => {
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

  const navigate = useNavigate();
  const tools = [
    {
      name: "Zapier",
      logo: "https://www.deligence.com/wp-content/uploads/2025/01/Zapier-200x92.webp",
      color: "#FF4A00",
      description: "Zapier is a platform that connects your tools into automated workflows.",
    },
    {
      name: "ChatGPT",
      logo: "https://www.deligence.com/wp-content/uploads/2025/01/OpenAI-300x81.webp",
      color: "#10A37F",
      description: "OpenAI is the company that invented ChatGPT and other popular AI models. We're constantly testing its newest innovations.",
    },
    {
      name: "Gemini",
      logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png",
      color: "#4285F4",
      description: "Gemini is Google's official AI Project and competitor to Chat GPT.",
    },
    {
      name: "OpenAI",
      logo: "https://www.deligence.com/wp-content/uploads/2025/01/chatgpt-300x88.webp",
      color: "#000000",
      description: "ChatGPT is an artificial intelligence chatbot developed by OpenAI",
    },
    {
      name: "Make",
      logo: "https://www.deligence.com/wp-content/uploads/2025/01/make-300x184.webp",
      color: "#6366F1",
      description: "Make.com is a zapier competitor with a more visual interface and allows larger, more complex workflows.",
    },
    {
      name: "Python",
      logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
      color: "#3776AB",
      description: "We also use python and javascript to write custom scripting so we can automate more complex workflows.",
    }
  ];

  return (
    <section className="py-16 px-6 slide-up">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
            Our Expertise Lies In Advanced AI Automation Tools For Seamless Operations.
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="rounded-xl p-8 hover:shadow-xl transform transition-all duration-300 hover:scale-105 group fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Logo and Name */}
              <div className="flex flex-col items-center mb-6">
                <div
                  className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center items-center"
                  style={{
                    color: tool.color,
                    width: "120px",
                    height: "80px",
                  }}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                
              </div>

              {/* Description */}
              <div className="text-center">
                <p className="text-gray-700 leading-relaxed">{tool.description}</p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#55fbf4]/5 to-[#80ffff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 fade-in" style={{ transitionDelay: "600ms" }}>
          <p className="text-lg text-gray-700 mb-6">
            Ready to automate your business operations with cutting-edge AI tools?
          </p>
          <button 
            onClick={() => navigate("/contact")} 
            className="bg-gradient-to-r from-[#55fbf4] to-[#80ffff] text-black font-bold py-3 px-8 rounded-full text-lg hover:from-[#40e0d0] hover:to-[#70f0f0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
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
        
        /* Animated state */
        .fade-in.animate,
        .slide-up.animate,
        .slide-left.animate,
        .slide-right.animate {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>
    </section>
  );
};

export default AIAutomationTools;