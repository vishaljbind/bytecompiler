import React from 'react';
import assets from '../assets/assests';

const WhyUs = () => {
  // Prevent right-click menu
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Prevent drag-and-drop
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 font-sans">
      <div className="flex flex-col md:flex-row items-center pt-24 justify-between gap-8">
        <div className="md:w-3/5">
          <h1 className="text-2xl md:text-4xl font-bold text-navy-900 mb-6">
            Why Should You Choose ByteCompiler As Your Technical Partner
          </h1>
          
          <p className="text-md text-gray-700 leading-relaxed">
            ByteCompiler is your ideal partner in terms of precision and efficacy to provide you with 
            leading-edge highly advanced custom made as well as ready-made solutions with a 
            sophisticated path defining seven-step refinement process.
          </p>
        </div>
        
        <div className="md:w-2/5 relative">
          <div className='flex-1 relative'>
            {/* Laptop frame image */}
            <img 
              src={assets.screen} 
              alt='Laptop screen' 
              className='mt-4 z-0 relative w-full'
              onContextMenu={handleContextMenu}
              draggable="false"
            />
            
            {/* Transparent overlay to block interactions */}
            <div 
              className="absolute top-0 left-0 w-[76%] h-[75%] translate-x-[15%] translate-y-[6%] z-10 cursor-default"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
            />
            
            {/* Protected video */}
            <video
              className='absolute top-0 left-0 w-[76%] h-[75%] object-fill z-0 translate-x-[15%] translate-y-[6%] pointer-events-none'
              playsInline
              autoPlay
              muted
              loop
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              disablePictureInPicture
              controlsList="nodownload noremoteplayback"
            >
              <source src={assets.freelancing} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;