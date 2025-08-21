import React from "react";
import GraphicSlider from "../components/GraphicSlider";
import DevStage from "../components/DevStage";
import TechUse from "../components/TechUse";
import ContactForm from "../components/Contact";

const GraphicsInfo = () => {
  const services = [
    { 
      name: "Logo Design", 
      description: "Crafting unique logos that define your brand identity.", 
      icon: "fas fa-drafting-compass" 
    },
    { 
      name: "Brochure Design", 
      description: "Informative and engaging brochures tailored to your brand.", 
      icon: "fas fa-file-alt" 
    },
    { 
      name: "Infographic Design", 
      description: "Clear and compelling infographics for complex data.", 
      icon: "fas fa-chart-pie" 
    },
    { 
      name: "Business Card Design", 
      description: "Designing professional cards to make lasting impressions.", 
      icon: "fas fa-id-card" 
    },
    { 
      name: "Poster Design", 
      description: "High-impact posters for events and promotions.", 
      icon: "fas fa-image" 
    },
    { 
      name: "Social Media Graphics", 
      description: "Custom graphics to enhance your social media presence.", 
      icon: "fas fa-share-alt" 
    },
    { 
      name: "Icon Design", 
      description: "Unique and memorable icons for digital and print use.", 
      icon: "fas fa-icons" 
    },
    { 
      name: "Typography Design", 
      description: "Stylized typography to make your content stand out.", 
      icon: "fas fa-font" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
      <GraphicSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Our Graphic Design Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          We offer a wide range of graphic design services to bring your creative vision to life. From stunning logos to eye-catching social media graphics, we've got you covered!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-bl from-aqua-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16  rounded-full flex items-center justify-center text-blue-500 text-4xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2 group-hover:text-blue-500">
                {service.name}
              </h3>
              <p className="text-sm text-center text-gray-600 group-hover:text-gray-800">
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

export default GraphicsInfo;
