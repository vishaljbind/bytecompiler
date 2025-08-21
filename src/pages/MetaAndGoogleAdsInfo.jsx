import React from "react";
import ServiceStage from "../components/ServiceStage";
import Contact from "./Contact";
import ContactForm from "../components/Contact";

const MetaAndGoogleAdsInfo = () => {
  const services = [
    { 
      name: "Search Engine Marketing (SEM)", 
      description: "Increase visibility through targeted search ads.", 
      icon: "fas fa-search" 
    },
    { 
      name: "Pay-Per-Click (PPC) Advertising", 
      description: "Drive traffic and conversions with cost-effective PPC campaigns.", 
      icon: "fas fa-mouse-pointer" 
    },
    { 
      name: "Display Advertising", 
      description: "Engage audiences with visually appealing display ads.", 
      icon: "fas fa-tv" 
    },
    { 
      name: "Social Media Advertising", 
      description: "Boost your brand's presence on social platforms like Facebook and Instagram.", 
      icon: "fas fa-share-alt" 
    },
    { 
      name: "Retargeting Ads", 
      description: "Reconnect with your audience and drive repeat visits.", 
      icon: "fas fa-undo" 
    },
    { 
      name: "Google Shopping Ads", 
      description: "Showcase your products directly in search results for better sales.", 
      icon: "fas fa-shopping-cart" 
    },
    { 
      name: "Facebook Ads", 
      description: "Run impactful ad campaigns to engage your target audience on Facebook.", 
      icon: "fab fa-facebook" 
    },
    { 
      name: "Instagram Ads", 
      description: "Create visually stunning ads tailored for Instagram users.", 
      icon: "fab fa-instagram" 
    },
  ];

  return (
    <section className=" py-6 md:py-12 ">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Meta & Google Ads Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Maximize your online presence and achieve your business goals with our tailored Meta and Google Ads services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-bl from-aqua-600 via-white  p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2 group-hover:text-purple-500">
                {service.name}
              </h3>
              <p className="text-sm text-center text-gray-600 group-hover:text-gray-800">
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

export default MetaAndGoogleAdsInfo;
