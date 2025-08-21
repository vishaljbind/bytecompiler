import React from 'react';

import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const Whatsapp = () => {
  const phoneNumber = '+91 9892246353'; // Replace with your actual phone number

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=9892246353`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4  z-50">
      <button 
        onClick={handlePhoneClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
        aria-label="Call"
      >
        <IoCallOutline className="w-7 h-7 md:w-10 md:h-10" />
      </button>
      
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 md:w-10 md:h-10" />
      </button>
    </div>
  );
};

export default Whatsapp;