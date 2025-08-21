import React from "react";
import WebSlider from "../components/WebSlider";
import TechUse from "../components/TechUse";
import ContactForm from "../components/Contact";
import DevStage from "../components/DevStage";
import GraphicSlider from "../components/GraphicSlider";
import ServiceStage from "../components/ServiceStage";

const DigitalMarketing = () => {
  const services = [
    { 
      name: "Search Engine Optimization (SEO)", 
      description: "Improve your website's visibility and rank higher on search engines.", 
      icon: "fas fa-search" 
    },
    { 
      name: "Pay-Per-Click Advertising (PPC)", 
      description: "Drive targeted traffic to your website with paid advertising campaigns.", 
      icon: "fas fa-ad" 
    },
    { 
      name: "Social Media Marketing", 
      description: "Engage your audience and grow your brand on social media platforms.", 
      icon: "fas fa-share-alt" 
    },
    { 
      name: "Content Marketing", 
      description: "Create valuable content to attract and retain your target audience.", 
      icon: "fas fa-pen" 
    },
    { 
      name: "Email Marketing", 
      description: "Reach your customers directly with personalized email campaigns.", 
      icon: "fas fa-envelope" 
    },
    { 
      name: "Influencer Marketing", 
      description: "Leverage influencers to promote your brand and reach a wider audience.", 
      icon: "fas fa-users" 
    },
    { 
      name: "Analytics & Reporting", 
      description: "Track and analyze your marketing performance to optimize strategies.", 
      icon: "fas fa-chart-bar" 
    },
    { 
      name: "Online Reputation Management", 
      description: "Monitor and improve your brand's online reputation.", 
      icon: "fas fa-star" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Digital Marketing Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Boost your online presence and grow your business with our expert digital marketing solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-bl from-aqua-600 via-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
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
      <ServiceStage />
      
      <ContactForm />
    </section>
  );
};

export default DigitalMarketing;