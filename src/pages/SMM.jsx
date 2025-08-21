import React from "react";
import WebSlider from "../components/WebSlider";
import TechUse from "../components/TechUse";
import ContactForm from "../components/Contact";
import DevStage from "../components/DevStage";
import GraphicSlider from "../components/GraphicSlider";
import PricingCard from "../components/DSSMM";

const SMM = () => {
  const services = [
    { 
      name: "Social Media Strategy", 
      description: "Develop a tailored strategy to grow your brand on social media platforms.", 
      icon: "fas fa-chart-line" 
    },
    { 
      name: "Content Creation & Curation", 
      description: "Create engaging and shareable content to captivate your audience.", 
      icon: "fas fa-pen" 
    },
    { 
      name: "Community Management", 
      description: "Engage with your audience and build a loyal community around your brand.", 
      icon: "fas fa-users" 
    },
    { 
      name: "Social Media Advertising", 
      description: "Run targeted ad campaigns to reach your ideal audience on social media.", 
      icon: "fas fa-ad" 
    },
    { 
      name: "Influencer Collaboration", 
      description: "Partner with influencers to amplify your brand's reach and credibility.", 
      icon: "fas fa-handshake" 
    },
    { 
      name: "Analytics & Reporting", 
      description: "Track performance and optimize your social media efforts with detailed insights.", 
      icon: "fas fa-chart-bar" 
    },
    { 
      name: "Crisis Management", 
      description: "Handle negative feedback and crises effectively to protect your brand reputation.", 
      icon: "fas fa-exclamation-triangle" 
    },
    { 
      name: "Platform Management", 
      description: "Manage and optimize your presence across all major social media platforms.", 
      icon: "fas fa-thumbs-up" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
      
      <PricingCard />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Social Media Management Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Elevate your brand's social media presence with our expert management and strategy services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-bl from-aqua-600 via-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1  opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16  rounded-full flex items-center justify-center text-rose-600 text-4xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-black mb-2 group-hover:text-rose-800">
                {service.name}
              </h3>
              <p className="text-sm text-center text-gray-800 group-hover:text-gray-800">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <DevStage />
      
      <ContactForm />
    </section>
  );
};

export default SMM;