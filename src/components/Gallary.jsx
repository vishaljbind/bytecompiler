import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('graphic');
  const [previewImage, setPreviewImage] = useState(null);

  const graphicItems = [
    
    { id: 27, imgSrc: "https://iili.io/FtZ9bYg.jpg", alt: "The Cat Returns", heightClass: "h-48 md:h-64" },
    { id: 28, imgSrc: "https://iili.io/FtZ9mva.jpg", alt: "Ghibli spring garden", heightClass: "h-64" },
    { id: 29, imgSrc: "https://iili.io/FtZH9Tv.jpg", alt: "Ghibli lake view", heightClass: "h-80 md:h-96" },
    { id: 30, imgSrc: "https://iili.io/FtZHHjR.jpg", alt: "Ghibli flying ship", heightClass: "h-64 md:h-80" },
    { id: 1, imgSrc: "https://iili.io/FtZ9z11.jpg", alt: "The Wind Rises scene", heightClass: "h-64 md:h-80" },
    { id: 2, imgSrc: "https://iili.io/FtZ9IrF.jpg", alt: "Studio Ghibli characters", heightClass: "h-48 md:h-64" },
    { id: 3, imgSrc: "https://iili.io/FtZ9xqP.jpg", alt: "Totoro with umbrella", heightClass: "h-64 md:h-96" },
    { id: 4, imgSrc: "https://iili.io/FtZ9nLB.jpg", alt: "Totoro in forest", heightClass: "h-48 md:h-64" },
    { id: 5, imgSrc: "https://iili.io/FtZ9A7a.jpg", alt: "Totoro and friends", heightClass: "h-64" },
    { id: 6, imgSrc: "https://iili.io/FtZ9RkJ.jpg", alt: "The Wind Rises painting scene", heightClass: "h-80 md:h-96" },
    { id: 7, imgSrc: "https://iili.io/FtZ9YIR.jpg", alt: "Ghibli village view", heightClass: "h-48 md:h-64" },
    { id: 8, imgSrc: "https://iili.io/FtZ95mv.jpg", alt: "Ghibli meadow scene", heightClass: "h-64 md:h-96" },
    { id: 9, imgSrc: "https://iili.io/FtZ9aXp.jpg", alt: "Totoro and Catbus", heightClass: "h-48 md:h-64" },
    { id: 10, imgSrc: "https://iili.io/FtZ90BI.jpg", alt: "Ponyo ocean view", heightClass: "h-64" },
    { id: 11, imgSrc: "https://iili.io/FtZ911t.jpg", alt: "Howl’s Moving Castle", heightClass: "h-80 md:h-96" },
    { id: 12, imgSrc: "https://iili.io/FtZ9ErX.jpg", alt: "Princess Mononoke", heightClass: "h-64 md:h-80" },
    { id: 13, imgSrc: "https://iili.io/FtZ9WkG.jpg", alt: "Ghibli countryside", heightClass: "h-48 md:h-64" },
    { id: 14, imgSrc: "https://iili.io/FtZ9Xpf.jpg", alt: "My Neighbor Totoro night scene", heightClass: "h-64 md:h-96" },
    { id: 15, imgSrc: "https://iili.io/FtZ9jI4.jpg", alt: "Ghibli spring view", heightClass: "h-48 md:h-64" },
    { id: 16, imgSrc: "https://iili.io/FtZ9whl.jpg", alt: "Kiki’s Delivery Service", heightClass: "h-64" },
    { id: 17, imgSrc: "https://iili.io/FtZ9eBS.jpg", alt: "Laputa: Castle in the Sky", heightClass: "h-80 md:h-96" },
    { id: 18, imgSrc: "https://iili.io/FtZ9kE7.jpg", alt: "Spirited Away bathhouse", heightClass: "h-64 md:h-80" },
    { id: 19, imgSrc: "https://iili.io/FtZ9S2e.jpg", alt: "Ghibli riverbank", heightClass: "h-48 md:h-64" },
    { id: 20, imgSrc: "https://iili.io/FtZ9gkb.jpg", alt: "Totoro field walk", heightClass: "h-64 md:h-96" },
    { id: 21, imgSrc: "https://iili.io/FtZ9rpj.jpg", alt: "Porco Rosso flying scene", heightClass: "h-48 md:h-64" },
    { id: 22, imgSrc: "https://iili.io/FtZ96Tx.jpg", alt: "Ocean waves scene", heightClass: "h-64" },
    { id: 23, imgSrc: "https://iili.io/FtZ9iQV.jpg", alt: "Whisper of the Heart", heightClass: "h-80 md:h-96" },
    { id: 24, imgSrc: "https://iili.io/FtZ9LCB.jpg", alt: "Ghibli sunset sky", heightClass: "h-64 md:h-80" },
    { id: 25, imgSrc: "https://iili.io/FtZ9QEP.jpg", alt: "Grave of the Fireflies", heightClass: "h-48 md:h-64" },
    { id: 26, imgSrc: "https://iili.io/FtZ9D3F.jpg", alt: "Ghibli rainy scene", heightClass: "h-64 md:h-96" },

      ];

  const uiUxItems = [
    { id: 1, imgSrc: "https://iili.io/FtZQcbI.jpg", alt: "Ghibli scenic view", heightClass: "h-64 md:h-80" },
    { id: 2, imgSrc: "https://iili.io/FtZQaON.jpg", alt: "Ghibli character art", heightClass: "h-48 md:h-64" },
    { id: 3, imgSrc: "https://iili.io/FtZQ1WX.jpg", alt: "Nature and Totoro", heightClass: "h-64 md:h-96" },
    { id: 4, imgSrc: "https://iili.io/FtZQ0xt.jpg", alt: "Fantasy landscape", heightClass: "h-48 md:h-64" },
    { id: 5, imgSrc: "https://iili.io/FtZQV0G.jpg", alt: "Studio Ghibli poster", heightClass: "h-64" },
    { id: 6, imgSrc: "https://iili.io/FtZQhJ4.jpg", alt: "Howl’s Moving Castle scene", heightClass: "h-80 md:h-96" },
    { id: 7, imgSrc: "https://iili.io/FtZQj5l.jpg", alt: "Spirited Away river spirit", heightClass: "h-64 md:h-80" },
    { id: 8, imgSrc: "https://iili.io/FtZQwe2.jpg", alt: "Castle in the Sky view", heightClass: "h-48 md:h-64" },
    { id: 9, imgSrc: "https://iili.io/FtZQkX9.jpg", alt: "Ponyo underwater scene", heightClass: "h-64 md:h-96" },
    { id: 10, imgSrc: "https://iili.io/FtZQvse.jpg", alt: "Ghibli magical forest", heightClass: "h-48 md:h-64" },
    { id: 11, imgSrc: "https://iili.io/FtZQSqu.jpg", alt: "Ghibli friends together", heightClass: "h-64" },
    { id: 12, imgSrc: "https://iili.io/FtZQU0b.jpg", alt: "My Neighbor Totoro bus stop scene", heightClass: "h-80 md:h-96" },
    { id: 13, imgSrc: "https://iili.io/FtZQPeV.jpg", alt: "Howl and Sophie walking", heightClass: "h-64 md:h-80" },
    { id: 14, imgSrc: "https://iili.io/FtZQimB.jpg", alt: "Chihiro and Haku flying", heightClass: "h-48 md:h-64" },
    { id: 15, imgSrc: "https://iili.io/FtZQZLF.jpg", alt: "Totoro in nature", heightClass: "h-64 md:h-96" },
    { id: 16, imgSrc: "https://iili.io/FtZQDqg.jpg", alt: "Kiki’s Delivery Service city view", heightClass: "h-48 md:h-64" },
    { id: 17, imgSrc: "https://iili.io/FtZZHep.jpg", alt: "Arrietty garden scene", heightClass: "h-64" },
    { id: 18, imgSrc: "https://iili.io/FtZZ2II.jpg", alt: "Laputa castle scene", heightClass: "h-80 md:h-96" },
    { id: 19, imgSrc: "https://iili.io/FtZZFLX.jpg", alt: "Ghibli dream sequence", heightClass: "h-64 md:h-80" },
    { id: 20, imgSrc: "https://iili.io/FtZZfBn.jpg", alt: "Spirited Away bathhouse", heightClass: "h-48 md:h-64" },
    { id: 21, imgSrc: "https://iili.io/FtZZq1s.jpg", alt: "Castle in the Sky flying ship", heightClass: "h-64 md:h-96" },
    { id: 22, imgSrc: "https://iili.io/FtZZBrG.jpg", alt: "Totoro and Mei", heightClass: "h-48 md:h-64" },
    { id: 23, imgSrc: "https://iili.io/FtZZn2f.jpg", alt: "Ghibli landscape art", heightClass: "h-64" },
    { id: 24, imgSrc: "https://iili.io/FtZZo74.jpg", alt: "Ponyo and Sosuke", heightClass: "h-80 md:h-96" },
    { id: 25, imgSrc: "https://iili.io/FtZZn2f.jpg", alt: "Duplicate scenic image", heightClass: "h-64 md:h-80" },
    { id: 26, imgSrc: "https://iili.io/FtZZTIS.jpg", alt: "The Wind Rises airplane", heightClass: "h-48 md:h-64" },
    { id: 27, imgSrc: "https://iili.io/FtZZuh7.jpg", alt: "Howl’s castle moving", heightClass: "h-64 md:h-96" },
    { id: 28, imgSrc: "https://iili.io/FtZZAQ9.jpg", alt: "Forest spirit and friends", heightClass: "h-48 md:h-64" },
    { id: 29, imgSrc: "https://iili.io/FtZZ5Be.jpg", alt: "Studio Ghibli montage", heightClass: "h-64" },

  ];

  const portfolioItems = activeTab === 'graphic' ? graphicItems : uiUxItems;
  const title = activeTab === 'graphic' ? 'Graphic Design' : 'UI/UX Design';
  const description =
    activeTab === 'graphic'
      ? "A collection of beautiful scenes inspired by Studio Ghibli's iconic artwork."
      : "User interface and experience designs for web and mobile applications.";

  // Prevent right-click
  const handleProtection = (e) => {
    e.preventDefault();
    return false;
  };

  useEffect(() => {
    const disableRightClick = (e) => {
      if (e.button === 2) {
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => document.removeEventListener("contextmenu", disableRightClick);
  }, []);

  return (
    <div className="w-full p-4" onContextMenu={handleProtection}>
      {/* Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 select-none"
          onClick={() => setPreviewImage(null)}
          onContextMenu={handleProtection}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setPreviewImage(null);
              }}
            >
              &times;
            </button>
            <div
              className="relative"
              onContextMenu={handleProtection}
              onDragStart={handleProtection}
            >
              <img
                src={previewImage.imgSrc}
                alt={previewImage.alt}
                className="w-full h-full object-contain max-h-[80vh] rounded-lg"
                draggable="false"
                onContextMenu={handleProtection}
              />
            </div>
            <div className="text-white text-center mt-2 select-none">
              <h3 className="font-bold text-lg">{previewImage.alt}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("graphic")}
            className={`px-6 py-2 mx-2 rounded-t-lg font-medium ${
              activeTab === "graphic"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Graphic Design
          </button>
          <button
            onClick={() => setActiveTab("uiux")}
            className={`px-6 py-2 mx-2 rounded-t-lg font-medium ${
              activeTab === "uiux"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            UI/UX Design
          </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {title}
        </h1>
        <div className="w-16 h-1 bg-gray-800 mx-auto mb-4"></div>
        <p className="text-center text-gray-800 max-w-lg mx-auto text-xl">
          {description}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`mb-4 break-inside-avoid rounded-lg overflow-hidden group relative ${item.heightClass}`}
            onClick={() => setPreviewImage(item)}
          >
            <div
              className="relative w-full h-full"
              onContextMenu={handleProtection}
              onDragStart={handleProtection}
            >
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg"
                draggable="false"
                onContextMenu={handleProtection}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end justify-center transition-all duration-300 opacity-0 group-hover:bg-opacity-40 group-hover:opacity-100 p-4">
              <div className="text-white text-center">
                <h3 className="font-bold text-sm md:text-md">{item.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
