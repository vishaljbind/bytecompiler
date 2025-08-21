import React, { useState } from "react";
import assests from "../assets/assests";
import { Link } from "react-router-dom";
import AboutAgency from "../components/AboutAgency";
import ProjectSlider from "../components/ProjectSlider";
import Contact from "../components/Contact";
import ContactForm from "../components/Contact";
import assets from "../assets/assests";
import HeroSection from "../components/Hero";
import Whatsapp from "../components/Whatsapp";
import WhyPartner from "../components/WhyPartner";
import HeroService from "./HeroService";
import AIAutomationTools from "../components/AiAutomation";




const Home = () => {
  const [activeTab, setActiveTab] = useState("Web");

  const technologiesTabs = ["Web", "Mobile", "Database", "CMS"];
  const technologies = {
  Web: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Node.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" }
  ],
  Mobile: [
    { name: "iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ],
  Database: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" }
  ],
  CMS: [
    { name: "Magento", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
    { name: "Wordpress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Woo Commerce", icon: assests.wooCommerce || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" }
  ],
};

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "We create sleek, fast, and responsive websites that engage visitors, drive conversions, and look amazing on any device.",
  },
  {
    id: "02",
    title: "App Development",
    description:
      "From concept to launch, we develop feature-rich apps with intuitive interfaces that keep users coming back for more.",
  },
  {
    id: "03",
    title: "UI/UX Design",
    description:
      "We create user-friendly interfaces that guide users effortlessly and make every interaction enjoyable.",
  },
  {
    id: "04",
    title: "Meta & Google Ads",
    description:
      "Smart, targeted ad campaigns that put your brand in front of the right people to boost clicks and conversions.",
  },
  {
    id: "05",
    title: "Graphic Designing",
    description:
      "Eye-catching visuals for logos, packaging, social media graphics, and promotional materials.",
  },
  {
    id: "06",
    title: "Social Media Management",
    description:
      "Strategic content planning, scheduling, and engagement to grow your audience and build brand loyalty.",
    
  },
];


  return (
    <div className="">
      <HeroSection />
      <Whatsapp />
      
      

      {/* Services Section */}
      <HeroService services={services} />

      
      

      <section className=" bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
        
          <AboutAgency />
          
      </section>

      
      <section className=" bg-gradient-to-bl from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
        <ProjectSlider />
      </section>
      {/* Technologies Section */}

      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-rose-600">Technologies</span> we work with
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-10 border-b">
            {technologiesTabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-[#ff6347] border-b-2 border-[#ff6347]"
                    : "text-gray-800 hover:text-[#ff6347]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {technologies[activeTab].map((tech) => (
              <div
                key={tech.name}
                className="bg-gradient-to-bl from-aqua-600 via-white to-aqua-600  hover:shadow-xl transform p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-4 object-contain"
                />
                <h3 className="text-gray-800 text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <WhyPartner />
      
      
      <section className=" bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5]">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
