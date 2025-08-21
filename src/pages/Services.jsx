import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WhyUs from "../components/WhyUs";
import DevStage from "../components/DevStage";
import ContactForm from "../components/Contact";
import TechUse from "../components/TechUse";
import AboutAgency from "../components/AboutAgency";
import assets from "../assets/assests";

const Services = () => {
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

  return (
    <section className="py-4 px-6 md:px-12 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
      <div>
        <WhyUs />
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center slide-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-black mb-12">
          Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-12 gap-8">
          {[
            {
              title: "Web Development",
              description: "Strengthen your digital presence with our professional web development and design solutions, customized to fit your business requirements",
              image: `${assets.webdevimg}`,
              route: "/services/web-development",
            },
            {
              title: "App Development",
              description: "Developing mobile applications for iOS and Android.",
              image: `${assets.anddevimg}`,
              route: "/services/app-development",
            },
            {
              title: "PWA Development",
              description: "Editing and enhancing videos for professional and personal use, including film, television, and social media.",
              image: `${assets.pwaimg}`,
              route: "/services/pwa-development",
            },
            {
              title: "Graphic Designing",
              description: "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
              image: `${assets.graphicimg}`,
              route: "/services/graphic-designing",
            },
            {
              title: "Digital Marketing",
              description: "Promoting products or services through digital channels to reach a wider audience and drive sales.",
              image: `${assets.dmimg}`,
              route: "/services/digital-marketing",
            },
            {
              title: "UI/UX Design",
              description: "Designing user-friendly and visually appealing interfaces for websites and applications.",
              image: `${assets.uiuximg}`,
              route: "/services/ui/ux-designing",
            },
            {
              title: "Meta & Google Ads",
              description: "Managing and optimizing ad campaigns on Meta (Facebook, Instagram) and Google platforms.",
              image: `${assets.gandmimg}`,
              route: "/services/google-&-meta-ads",
            },
            {
              title: "Ecommerce Solutions",
              description: "Developing online stores and e-commerce platforms for businesses.",
              image: `${assets.ecomimg}`,
              route: "/services/ecommerce-solutions",
            },
            {
              title: "Social Media Management",
              description: "Creating and managing social media profiles for businesses to increase brand visibility and engagement.",
              image: `${assets.smmimg}`,
              route: "/services/social-media-management",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-2 bg-gradient-to-bl from-aqua-600 via-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 fade-in"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img 
                src={service.image} 
                className="h-40 w-full object-cover mb-4" 
                alt="services" 
              />
              <h3 className="text-2xl font-semibold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-gray-800">{service.description}</p>
              <Link
                to={service.route}
                className="inline-block mt-4 bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <AboutAgency />
      <DevStage />
      <TechUse />
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
    </section>
  );
};

export default Services;