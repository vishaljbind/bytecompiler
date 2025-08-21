import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import assets from '../assets/assests';

const GraphicSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Graphic Design",
      description: "Creating visually appealing designs for branding, marketing, and digital media, including logos, posters, and social media graphics.",
      image: assets.ecommerce,
      alt: "E-commerce platform interface",
      tech: "React/Redux | Node.js | MongoDB"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces for websites and applications, focusing on usability, accessibility, and aesthetics.",
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
    },
    {
      id: 6,
      title: "Brand Identity Design",
      description: "Crafting unique and memorable brand identities, including logos, color palettes, and typography for businesses.",
      image: assets.ecommerce, // Replace with appropriate image asset
      alt: "Brand identity design showcase",
      tech: "Adobe Illustrator | Photoshop | Figma"
    },
    {
      id: 7,
      title: "Social Media Graphics",
      description: "Designing eye-catching visuals for social media platforms to boost engagement and brand presence.",
      image: assets.socialmedia, // Replace with appropriate image asset
      alt: "Social media graphics examples",
      tech: "Canva | Adobe Spark | Figma"
    },
    {
      id: 8,
      title: "Website UI/UX Redesign",
      description: "Revamping existing websites with modern, user-centric designs to improve usability and aesthetics.",
      image: assets.realestate, // Replace with appropriate image asset
      alt: "Website redesign before and after",
      tech: "Figma | Sketch | Adobe XD"
    },
    {
      id: 9,
      title: "Mobile App Prototyping",
      description: "Creating interactive prototypes for mobile apps to test and refine user experiences before development.",
      image: assets.fitness, // Replace with appropriate image asset
      alt: "Mobile app prototype screens",
      tech: "Figma | InVision | Marvel"
    },
    {
      id: 10,
      title: "Blog Content Creation",
      description: "Writing SEO-optimized, engaging blog posts to drive traffic and establish thought leadership.",
      image: assets.travel, // Replace with appropriate image asset
      alt: "Blog content writing examples",
      tech: "WordPress | Grammarly | Surfer SEO"
    },
    {
      id: 11,
      title: "Product Descriptions",
      description: "Writing compelling and concise product descriptions to boost sales and improve customer understanding.",
      image: assets.ecommerce, // Replace with appropriate image asset
      alt: "Product description examples",
      tech: "Shopify | WooCommerce | Hemingway Editor"
    },
    {
      id: 12,
      title: "Infographic Design",
      description: "Transforming complex data into visually appealing and easy-to-understand infographics.",
      image: assets.socialmedia, // Replace with appropriate image asset
      alt: "Infographic design examples",
      tech: "Adobe Illustrator | Canva | Piktochart"
    },
    {
      id: 13,
      title: "E-commerce UI/UX",
      description: "Designing seamless and intuitive user interfaces for e-commerce platforms to enhance shopping experiences.",
      image: assets.ecommerce, // Replace with appropriate image asset
      alt: "E-commerce UI/UX design",
      tech: "Figma | Sketch | Adobe XD"
    },
    {
      id: 14,
      title: "Email Newsletter Design",
      description: "Creating visually stunning and responsive email newsletters to engage subscribers and drive conversions.",
      image: assets.socialmedia, // Replace with appropriate image asset
      alt: "Email newsletter design examples",
      tech: "Mailchimp | HubSpot | Adobe XD"
    },
    {
      id: 15,
      title: "Whitepaper Writing",
      description: "Developing in-depth, research-driven whitepapers to showcase expertise and generate leads.",
      image: assets.travel, // Replace with appropriate image asset
      alt: "Whitepaper writing examples",
      tech: "Google Docs | Grammarly | Surfer SEO"
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
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Featured Projects</h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Explore my portfolio of modern web applications showcasing full-stack development capabilities, 
          responsive design, and integration with various technologies and APIs.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2">
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
                  {/* <div className="flex justify-between items-center">
                    <button className="font-bold text-black hover:text-gray-800">
                      Live Demo →
                    </button>
                    <button className="px-4 py-2 bg-black text-white rounded hover:bg-black">
                      View
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GraphicSlider;