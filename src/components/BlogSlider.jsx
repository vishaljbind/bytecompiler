import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Trending blogs data
  const trendingBlogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      description: "Exploring emerging trends and technologies shaping the web development landscape in 2025.",
      image: "💻",
      author: "John Doe",
      date: "March 1, 2025",
      href: "/blog/future-of-web-development",
    },
    {
      id: 2,
      title: "Mastering UI/UX Design Principles",
      description: "Key insights into creating user-centered designs that enhance user experience and engagement.",
      image: "🎨",
      author: "Jane Smith",
      date: "February 15, 2025",
      href: "/blog/ui-ux-design-principles",
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for 2025",
      description: "Innovative approaches to digital marketing that can help businesses grow their online presence.",
      image: "📈",
      author: "Mike Johnson",
      date: "February 28, 2025",
      href: "/blog/digital-marketing-strategies",
    },
    {
      id: 4,
      title: "Mobile App Development Trends",
      description: "Latest innovations and technologies transforming the mobile app development industry.",
      image: "📱",
      author: "Sarah Williams",
      date: "February 20, 2025",
      href: "/blog/mobile-app-development-trends",
    },
    {
      id: 5,
      title: "E-commerce Evolution: Future of Online Shopping",
      description: "How emerging technologies are reshaping the e-commerce landscape and customer experiences.",
      image: "🛒",
      author: "Alex Rodriguez",
      date: "March 5, 2025",
      href: "/blog/ecommerce-evolution",
    },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 blogs at a time
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 blogs on tablets
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 blog on mobile
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mt-20 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Trending Blogs</h1>
        <p className="text-md md:text-lg text-gray-700 max-w-4xl mx-auto">
          Discover the most popular and insightful blogs on the latest trends and technologies.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {trendingBlogs.map((blog) => (
            <div key={blog.id} className="px-2">
              <div className="bg-gradient-to-bl from-[#1affff] to-white rounded-lg shadow-lg overflow-hidden w-full transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2">
                {/* Blog Image */}
                <div className="h-48 bg-white flex items-center justify-center">
                  <span className="text-6xl">{blog.image}</span>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-2">{blog.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{blog.author}</span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={blog.href}
                      className="font-bold text-black hover:text-gray-800"
                    >
                      Read More →
                    </a>
                    <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlider;