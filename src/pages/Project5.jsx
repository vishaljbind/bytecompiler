import React from "react";
import ContactForm from "../components/Contact";

const PublicAutoAuctions = () => {
  return (
    <div className="w-full py-20 font-sans">
      {/* Public Auto Auctions Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-12">
              Public Auto Auctions
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  INDUSTRY
                </button>
                <span className="text-gray-700">Automotive</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  TECHNOLOGY
                </button>
                <span className="text-gray-700">Mobile App</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  ABOUT APP
                </button>
              </div>
            </div>

            <p className="text-gray-800 leading-relaxed">
              Public Auto Auctions aggregates pre-owned vehicle listings from bank and title-pawn
              repossessions, police auctions, dealer trade-ins, and private sellers — offering a
              secure, convenient platform to find and purchase used cars.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2023/09/car-auction-600x532.webp"
              alt="Auto Auction App Preview"
              className="rounded-xl max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-rose-500 text-white mt-12 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 md:mb-0">Download The App FREE!</h3>
          <div className="flex gap-4">
            {/* Google Play clickable */}
            <a href="https://play.google.com/store/apps/details?id=com.carauctionnetwork.publicautoauctions" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>

            {/* App Store placeholder */}
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
          </div>
        </div>

        {/* Project Brief + Challenge */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mb-4">Project Brief</h2>
            <p className="text-gray-700 leading-relaxed">
              Public Auto Auctions partnered with ByteCompiler to digitize and expand
              their auction model with a mobile app that centralizes diverse vehicle sources and
              simplifies discovery and bidding for a wider audience.
            </p>

            <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Challenge</h2>
            <p className="text-gray-700 leading-relaxed">
              They needed a transparent, user-friendly way for buyers to browse and bid on used
              vehicles. Traditional classifieds and dealership visits lacked convenience and
              real-time visibility into auctions across states and sellers.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2024/02/b1-297x600.webp"
              alt="Auction Inventory"
              className="rounded-xl max-h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Solution */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2024/02/b6-296x600.webp"
              alt="Bidding Experience"
              className="rounded-xl max-h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Solution</h2>
            <p className="text-gray-700 leading-relaxed">
              ByteCompiler delivered a mobile app that streamlines discovery and bidding:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Wide Inventory Access:</strong> Vehicles from police auctions, bank
                repossessions, dealer trade-ins, and private sellers.
              </li>
              <li>
                <strong>Rich Listings:</strong> Detailed photos and key specs per vehicle.
              </li>
              <li>
                <strong>State-Based Search:</strong> Find auctions in your state with filters.
              </li>
              <li>
                <strong>On-Device Bidding:</strong> Participate in online auctions directly from the app.
              </li>
              <li>
                <strong>Diverse Segments:</strong> Cars, SUVs, trucks, and vans from popular brands.
              </li>
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Results</h2>
            <p className="text-gray-700 leading-relaxed">
              The app modernized Public Auto Auctions’ operations and expanded reach. Buyers enjoy a
              transparent, efficient experience, while seasoned participants benefit from streamlined
              bidding and inventory discovery—driving higher engagement and customer satisfaction.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2024/02/b7-296x600.webp"
              alt="Successful Auction Result"
              className="rounded-xl max-h-[500px] object-cover"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default PublicAutoAuctions;
