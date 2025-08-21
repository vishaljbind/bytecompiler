import React from "react";

const ContentInfo = () => {
  const services = [
    { 
      name: "Article Writing", 
      description: "Engage readers with well-researched and compelling articles.", 
      icon: "fas fa-file-alt" 
    },
    { 
      name: "Blog Writing", 
      description: "Create relatable and informative blog posts tailored to your audience.", 
      icon: "fas fa-pen-nib" 
    },
    { 
      name: "Copywriting", 
      description: "Craft persuasive content that drives action and conversions.", 
      icon: "fas fa-copy" 
    },
    { 
      name: "E-book Writing", 
      description: "Deliver in-depth knowledge with professionally written e-books.", 
      icon: "fas fa-book" 
    },
    { 
      name: "Email Newsletter Writing", 
      description: "Stay connected with your audience through engaging newsletters.", 
      icon: "fas fa-envelope" 
    },
    { 
      name: "Ghostwriting", 
      description: "Bring your ideas to life with professional ghostwriting services.", 
      icon: "fas fa-user-secret" 
    },
    { 
      name: "Grant Writing", 
      description: "Secure funding with expertly crafted grant proposals.", 
      icon: "fas fa-hand-holding-usd" 
    },
    { 
      name: "Press Release Writing", 
      description: "Announce your news effectively with professionally written press releases.", 
      icon: "fas fa-bullhorn" 
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#F7FF80] via-white to-[#F7FF80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Content Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Deliver impactful and engaging content with our range of professional writing services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F7FF80] via-white to-[#F7FF80] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2 group-hover:text-green-500">
                {service.name}
              </h3>
              <p className="text-sm text-center text-gray-600 group-hover:text-gray-800">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentInfo;
