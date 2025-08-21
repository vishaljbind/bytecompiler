import React, { useEffect } from "react";
import AIAutomationTools from "../components/AiAutomation";
import ContactForm from "../components/Contact";

const Blog = () => {
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

  const aiCapabilities = [
    {
      title: "Conversational AI",
      description: "Advanced natural language processing for intelligent interactions",
      features: [
        "AI-Powered IVR",
        "Customer Service Chatbots", 
        "HR Chatbots",
        "Custom Chatbots"
      ],
      bgImage: "url('https://builtin.com/sites/www.builtin.com/files/2023-01/typing-artificial-intelligence-conversational-ai.png')"
    },
    {
      title: "Generative AI",
      description: "Creative AI solutions for content and media generation",
      features: [
        "Text-to-Video Generation Tools",
        "Text-to-Image Generation Tools",
        "Content Generation Tools", 
        "Music Production AI"
      ],
      bgImage: "url('https://filestage.io/wp-content/uploads/2023/12/AI-report-header-image.webp')"
    },
    {
      title: "ML Models",
      description: "Machine learning solutions for data-driven insights",
      features: [
        "AI based Speech Recognition",
        "AI based Image Recognition",
        "AI Data Interpretation",
        "AI Data Extraction Models"
      ],
      bgImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAX6Mir7ktqHc839adSrCn8whY1etOgZN5EQ&s')"
    },
    {
      title: "NLUs", 
      description: "Natural Language Understanding for intelligent text processing",
      features: [
        "Sentiment Analysis by AI",
        "Intent Recognition by AI",
        "Multilingual Solutions",
        "Predictive Text Recognition"
      ],
      bgImage: "url('https://www.deligence.com/wp-content/uploads/2023/11/AI-5-600x336.webp')"
    },
    {
      title: "Deep Learning",
      description: "Advanced neural networks for complex pattern recognition",
      features: [
        "Object Detection and Recognition",
        "Time Series Analysis", 
        "Predictive Analysis",
        "Facial Recognition"
      ],
      bgImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrB03REE3POW-_3EKrdR_PzP9SanUH-9P6HA&s')"
    }
  ];

  const stats = [
    { 
      percentage: "83%", 
      description: "of companies claim that AI is a top priority in their business plans." 
    },
    { 
      percentage: "64%", 
      description: "of business owners believe that AI will improve business productivity." 
    },
    { 
      percentage: "80%", 
      description: "of retail executives expect their companies to adopt AI-powered intelligent automation by 2027." 
    },
    { 
      percentage: "97%", 
      description: "of executives said generative AI will be transformative to their company and industry." 
    },
    { 
      percentage: "56%", 
      description: "of respondents acknowledge data readiness is the top challenge to adopting AI." 
    },
    { 
      percentage: "95%", 
      description: "of organizations are increasing their investment as a % of revenue (an increase from 89% over the last 3 months)." 
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[570px] overflow-hidden slide-up">
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2021/05/07/73437-548173452_tiny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-0 w-full h-full flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight fade-in">
              Artificial Intelligence Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-cyan-100 font-light fade-in" style={{ transitionDelay: "100ms" }}>
              AI services and solutions to help you get more value from the cloud.
            </p>
          </div>
        </div>
      </section>
      <AIAutomationTools />

      {/* AI Capabilities Section */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 slide-up">
            Our Artificial Intelligence (AI) Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {aiCapabilities.slice(0, 3).map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] fade-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: capability.bgImage, backgroundSize: 'cover' }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {capability.title}
                  </h3>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <span className="text-[#55fbf4] mr-2 text-xl">➤</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {aiCapabilities.slice(3, 5).map((capability, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] fade-in"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div 
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: capability.bgImage, backgroundSize: 'cover' }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {capability.title}
                  </h3>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <span className="text-[#55fbf4] mr-2 text-xl">➤</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-4 md:py-12 px-6 relative overflow-hidden">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#55fbf4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8 slide-up">
            Why Prioritize Data & AI?
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed fade-in">
            Businesses understand that data and AI are the engines for enterprise innovation, but they also understand that more work needs to be done to realize the full potential of these technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 border-l-4 border-[#55fbf4] fade-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#55fbf4] mb-4">
                  {stat.percentage}
                </div>
                <hr className="w-16 h-1 bg-[#55fbf4] mx-auto mb-4 rounded" />
                <p className="text-gray-700 text-md leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />

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
    </div>
  );
};

export default Blog;