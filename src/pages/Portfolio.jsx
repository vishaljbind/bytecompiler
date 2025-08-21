import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import assets from '../assets/assests';
import Gallery from '../components/Gallary';
import WebSlider from '../components/WebSlider';  
import ContactForm from '../components/Contact';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('solutions');

  // Solutions data
  const solutions = [
    {
      id: 1,
      title: "Warehouse Management",
      description: "Optimizing warehouse operations and storage from receiving to shipping.",
      image: "/api/placeholder/300/200",
      alt: "Warehouse with forklift and packages"
    },
    {
      id: 2,
      title: "Grocery Application",
      description: "Track & manage orders with a comprehensive Grocery delivery system.",
      image: "/api/placeholder/300/200",
      alt: "Delivery person with grocery app"
    },
    {
      id: 3,
      title: "B2B Ecommerce",
      description: "Reform sales & management of furniture with a new-age E-commerce platform.",
      image: "/api/placeholder/300/200",
      alt: "Furniture e-commerce logo"
    },
    {
      id: 4,
      title: "DinePad",
      description: "Cutting-edge solutions to managing menu, reservations and restaurant operations.",
      image: "/api/placeholder/300/200",
      alt: "DinePad restaurant management app logo"
    },
    {
      id: 5,
      title: "Workforce Management",
      description: "Sophisticated Integrated Employee management System with automation.",
      image: "/api/placeholder/300/200",
      alt: "Workforce management system logo"
    },
  ];

  // Web projects data
  const webProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB integration.",
      image: assets.ecommerce,
      alt: "E-commerce platform interface",
      tech: "React/Redux | Node.js | MongoDB"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with interactive charts and metrics.",
      image: assets.socialmedia,
      alt: "Social media analytics dashboard",
      tech: "React | Firebase | Chart.js"
    },
    {
      id: 3,
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search and virtual tour features.",
      image: assets.realestate,
      alt: "Real estate website interface",
      tech: "Next.js | Mapbox | PostgreSQL"
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      description: "Workout tracking PWA with exercise database and progress visualization.",
      image: assets.fitness,
      alt: "Fitness tracking app interface",
      tech: "React Native | GraphQL | AWS"
    },
    {
      id: 5,
      title: "Travel Blog System",
      description: "CMS for travel bloggers with geotagging and interactive map features.",
      image: assets.travel,
      alt: "Travel blog website screenshot",
      tech: "Gatsby | Contentful | Leaflet"
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
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
    <div className="min-h-screen ">
      <WebSlider />
      <Gallery />
      <ContactForm />
      {/* Hero Section */}
      
    </div>
  );
};

export default Portfolio;