import React from "react";
import WebSlider from "../components/WebSlider";
import TechUse from "../components/TechUse";
import ContactForm from "../components/Contact";
import DevStage from "../components/DevStage";
import GraphicSlider from "../components/GraphicSlider";
import PWAFeature from "../components/PWAFeature";
import assets from "../assets/assests";

const PWDInfo = () => {
  const services = [
    { 
      name: "Progressive Web App Development", 
      description: "Build fast, reliable, and engaging PWAs that work seamlessly across devices.", 
      icon: "fas fa-globe" 
    },
    { 
      name: "Offline-First PWA Development", 
      description: "Create PWAs that function even without an internet connection.", 
      icon: "fas fa-wifi" 
    },
    { 
      name: "PWA for E-commerce", 
      description: "Develop high-performing e-commerce PWAs for better user engagement.", 
      icon: "fas fa-shopping-cart" 
    },
    { 
      name: "PWA Migration Services", 
      description: "Convert your existing website or app into a Progressive Web App.", 
      icon: "fas fa-sync-alt" 
    },
    { 
      name: "PWA Performance Optimization", 
      description: "Enhance the speed and performance of your PWA for better user experience.", 
      icon: "fas fa-tachometer-alt" 
    },
    { 
      name: "PWA Push Notifications", 
      description: "Implement push notifications to keep users engaged with your PWA.", 
      icon: "fas fa-bell" 
    },
    { 
      name: "PWA for Enterprises", 
      description: "Build scalable and secure PWAs tailored for enterprise needs.", 
      icon: "fas fa-building" 
    },
    { 
      name: "PWA Maintenance & Support", 
      description: "Ensure your PWA stays updated and performs optimally over time.", 
      icon: "fas fa-cogs" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
      <WebSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Progressive Web App (PWA) Development Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Transform your web presence with high-performing, reliable, and engaging Progressive Web Apps.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-bl from-aqua-600 via-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1  opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16  rounded-full flex items-center justify-center text-rose-500 text-5xl">
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
      <PWAFeature />
      <DevStage />
      <TechUse />
      <ContactForm />
    </section>
  );
};

export default PWDInfo;