import React from "react";
import WebSlider from "../components/WebSlider";
import TechUse from "../components/TechUse";
import ContactForm from "../components/Contact";
import DevStage from "../components/DevStage";
import GraphicSlider from "../components/GraphicSlider";

const Ecommerce = () => {
  const services = [
    { 
      name: "Custom E-commerce Development", 
      description: "Build tailor-made e-commerce platforms to meet your unique business needs.", 
      icon: "fas fa-shopping-cart" 
    },
    { 
      name: "E-commerce Website Design", 
      description: "Create visually stunning and user-friendly e-commerce websites.", 
      icon: "fas fa-palette" 
    },
    { 
      name: "Mobile E-commerce Apps", 
      description: "Develop mobile apps for seamless shopping experiences on the go.", 
      icon: "fas fa-mobile-alt" 
    },
    { 
      name: "E-commerce SEO & Marketing", 
      description: "Optimize your e-commerce site for search engines and drive traffic.", 
      icon: "fas fa-chart-line" 
    },
    { 
      name: "Payment Gateway Integration", 
      description: "Integrate secure and reliable payment gateways for smooth transactions.", 
      icon: "fas fa-credit-card" 
    },
    { 
      name: "E-commerce Analytics", 
      description: "Track and analyze customer behavior to improve sales and conversions.", 
      icon: "fas fa-chart-pie" 
    },
    { 
      name: "E-commerce Maintenance", 
      description: "Ensure your e-commerce platform runs smoothly with regular updates and support.", 
      icon: "fas fa-cogs" 
    },
    { 
      name: "E-commerce Migration", 
      description: "Seamlessly migrate your existing store to a new platform without data loss.", 
      icon: "fas fa-sync-alt" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
      <WebSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          E-commerce Solutions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Transform your online store with our comprehensive e-commerce solutions tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-bl from-aqua-600 via-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-rose-500 text-4xl">
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
      <TechUse />
      <ContactForm />
    </section>
  );
};

export default Ecommerce;