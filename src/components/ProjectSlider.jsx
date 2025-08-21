import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import assets from '../assets/assests';

const ProjectSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const solutions = [
    {
      id: 1,
      title: "Warehouse Management",
      description: "Optimizing warehouse operations and storage from receiving to shipping.",
      image: "https://leanafy.com/wp-content/uploads/2024/08/176-warehouse-management.webp",
      alt: "Warehouse with forklift and packages"
    },
    {
      id: 2,
      title: "Grocery Application",
      description: "Track & manage orders with a comprehensive Grocery delivery system.",
      image: "https://www.siegpartners.com/wp-content/uploads/2024/06/grocery-delivery-app-development-banner.png",
      alt: "Delivery person with grocery app"
    },
    {
      id: 3,
      title: "B2B Ecommerce",
      description: "Reform sales & management of furniture with a new-age E-commerce platform.",
      image: "https://www.netsolutions.com/wp-content/uploads/2024/12/7-Reasons-Why-Sellers-Need-a-B2B-eCommerce-Website-1.webp",
      alt: "Furniture e-commerce logo"
    },
    {
      id: 4,
      title: "DinePad",
      description: "Cutting-edge solutions to managing menu, reservations and restaurant operations.",
      image: "https://www.fegno.com/wp-content/uploads/2022/03/dine-1-1024x1024.png",
      alt: "DinePad restaurant management app logo"
    },
    {
      id: 5,
      title: "Workforce Management",
      description: "Shophisticated Integrated Employee management System with automation.",
      image: "https://www.callcentrehelper.com/images/stories/2019/03/workforce-management-235794283-760.jpg",
      alt: "DinePad restaurant management app logo"
    },

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows:false,
    
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className=" text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ideas That Make Impact</h1>
        <p className="text-md text-gray-700 max-w-4xl mx-auto">
        Boost efficiency, maximize ROI, and cut costs in your business or startup with a seamless workflow powered by advanced digital tools. Elevate field service operations, enhance workforce performance, track warehouse activities and key business metrics, and deliver exceptional customer service with cutting-edge software solutions.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {solutions.map((solution) => (
            <div key={solution.id} className="px-2">
              <div className="bg-gradient-to-b from-aqua-600 via-white to-rose-600 rounded-lg shadow-lg overflow-hidden w-full transition-all duration-300 transform hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.alt}
                    className="w-full p-2 h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                  <p className="text-gray-800 mb-4">{solution.description}</p>
                  {/* <button className="font-bold text-gray-800 hover:text-gray-600">
                    Know More
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectSlider;