import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import assets from '../assets/assests';

const WebSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Shalom Space",
      image: "https://www.deligence.com/wp-content/uploads/2023/09/Meditation-768x680.webp",
      description: "A Jewish-based meditation app that helps you connect with Jewish spiritual traditions.",
      alt: "Meditation app interface",
      tech: "Flutter",
      route: "/projectshalo",
    },
    {
      id: 2,
      title: "Animal Vision Simulator",
      image: "https://www.deligence.com/wp-content/uploads/2022/06/Animal-vision2-538x600.webp",
      description: "A mobile app that allows users to experience the world through the eyes of various animals.",
      alt: "Animal vision simulator",
      tech: "Java | OpenGL | Processing | Swift",
      route: "/projectAVS",
    },
    {
      id: 3,
      title: "Bspotz",
      image: "https://www.deligence.com/wp-content/uploads/2024/02/Bspotz-5-600x500.webp",
      description: "A platform that connects businesses with local service providers for on-demand services.",
      alt: "Bspotz app interface",
      tech: "React Native | Node.js | MongoDB",
      route: "/projectBspotzApp",
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      image: "https://www.deligence.com/wp-content/uploads/2017/11/Fitness-Tracker-App-1-600x500.webp",
      description: "A comprehensive fitness tracking app that integrates with various wearables and health devices.",
      alt: "Fitness tracking app interface",
      tech: "React Native | Node.js | MongoDB",
      route: "/projectFitnessTracker",
    },
    {
      id: 5,
      title: "Public Auto Auctions",
      image: "https://www.deligence.com/wp-content/uploads/2024/02/Car-Auction-1-600x500.webp",
      description: "A platform for public auto auctions that provides real-time bidding and auction management.",
      alt: "Public auto auctions platform",
      tech: "React | Node.js | PostgreSQL",
      route: "/projectAutoAuction",
    },
    {
      id: 6,
      title: " Ai Voice Agent",
      image: "https://www.deligence.com/wp-content/uploads/2025/03/banner-4.webp",
      description: "A platform for public auto auctions that provides real-time bidding and auction management.",
      alt: "Public auto auctions platform",
      tech: "React | Node.js | PostgreSQL",
      route: "/projectaiagent",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
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
      <div className="text-center mb-10 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Featured Projects
        </h1>
        <p className="text-md md:text-lg text-gray-700 max-w-4xl mx-auto">
          Explore my portfolio of modern web applications showcasing full-stack development capabilities, 
          responsive design, and integration with various technologies and APIs.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="px-2 cursor-pointer"
              onClick={() => navigate(project.route)}
            >
              <div className="bg-gradient-to-t from-aqua-600 via-white rounded-lg shadow-lg overflow-hidden w-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WebSlider;
