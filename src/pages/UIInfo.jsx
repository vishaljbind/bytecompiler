import React from "react";
import GraphicSlider from "../components/GraphicSlider";
import ServiceStage from "../components/ServiceStage";
import ContactForm from "../components/Contact";

const UIInfo = () => {
  const services = [
    { 
      name: "User Research", 
      description: "Understand user behavior and needs to guide design.", 
      icon: "fas fa-users" 
    },
    { 
      name: "Wireframing", 
      description: "Create structural blueprints for websites and apps.", 
      icon: "fas fa-drafting-compass" 
    },
    { 
      name: "Prototyping", 
      description: "Develop interactive prototypes for user testing.", 
      icon: "fas fa-layer-group" 
    },
    { 
      name: "Visual Design", 
      description: "Craft visually cohesive and appealing interfaces.", 
      icon: "fas fa-palette" 
    },
    { 
      name: "Interaction Design", 
      description: "Enhance user engagement through thoughtful interactions.", 
      icon: "fas fa-hand-pointer" 
    },
    { 
      name: "Usability Testing", 
      description: "Test interfaces to ensure an intuitive user experience.", 
      icon: "fas fa-check-circle" 
    },
    { 
      name: "User Interface Design", 
      description: "Design user-friendly and visually stunning interfaces.", 
      icon: "fas fa-desktop" 
    },
    { 
      name: "User Experience Design", 
      description: "Optimize overall user satisfaction with intuitive designs.", 
      icon: "fas fa-smile" 
    },
  ];

  return (
    <section className="md:py-4 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
      <GraphicSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          UI / UX Design Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Elevate your user interface with our expert UI design services tailored to create seamless and engaging experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-aqua-600 via-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1  opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16  rounded-full flex items-center justify-center text-purple-500 text-4xl">
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

export default UIInfo;
