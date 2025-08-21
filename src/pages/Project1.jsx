import React from "react";
import ContactForm from "../components/Contact";

const ShalomSpace = () => {
  return (
    <div className="w-full py-20 font-sans">
      {/* Project Brief Section */}
      

      {/* ShalomSpace Section */}
      <div className=" py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-12">ShalomSpace</h2>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  INDUSTRY
                </button>
                <span className="text-gray-700">Meditation</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  TECHNOLOGY
                </button>
                <span className="text-gray-700">Flutter</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  ABOUT APP
                </button>
              </div>
            </div>

            <p className="text-gray-800 leading-relaxed">
              ShalomSpace is a Jewish-based meditation app that helps you connect with Jewish
              spiritual traditions, deepen your faith, and find peace, comfort, and meaning in your
              daily lives. It combines Jewish teachings with mindfulness practices in an accessible
              and user-friendly way.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2023/09/Meditation-768x680.webp"
              alt="App Screenshot"
              className="rounded-xl max-h-[500px]"
            />
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-blue-600 text-white mt-12 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
  <h3 className="text-xl font-semibold mb-4 md:mb-0">Download The App FREE!</h3>
  <div className="flex gap-4">
    {/* Google Play clickable */}
    <a
      href="https://play.google.com/store/apps/details?id=com.shalom.shalomspace"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Google Play"
        className="h-12"
      />
    </a>

    {/* App Store placeholder (still just an image for now) */}
    <img
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="App Store"
      className="h-12"
    />
  </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-rose-600 mb-4">Project Brief</h2>
          <p className="text-gray-700 leading-relaxed">
            ShalomSpace is a Jewish-based meditation app designed for the perusal of the Jewish
            culture which enables people to come together for meditation, cultural exchange, sharing
            thoughts, and building connections. It is a safe and welcoming platform that Jews can use
            to express themselves among others, which in turn builds a strong bond between Jews
            regardless of geographical boundaries.
          </p>

          <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Challenge</h2>
          <p className="text-gray-700 leading-relaxed">
            The main challenge while creating ShalomSpace was building a user community that would be
            competitive in a world where dominant platforms already existed. Another challenge was to
            provide a safe and diverse community while regulating different ideas.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://www.deligence.com/wp-content/uploads/2023/09/A7-400x812.webp"
            alt="App Preview"
            className="rounded-xl  max-h-[500px]"
          />
        </div>
      </div>


        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
            <div className="flex justify-center">
            <img
                src="https://www.deligence.com/wp-content/uploads/2023/09/A6-400x812.webp"
                alt="App Preview"
                className="rounded-xl  max-h-[500px]"
            />
            </div>
        <div>
          
          

          <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Solution</h2>
          <p className="text-gray-700 leading-relaxed">
            As a way of overcoming these challenges, we started on a detailed development project. Each meditation was carefully and uniquely constructed to prompt and reach the listeners at a spiritual level and equip them with useful meditative techniques for daily usage.

From the technical viewpoint, the ByteCompiler focused on creating easy and convenient means of using their software. The app has an intuitive interface which makes it easier for the user to move from screen to screen and to choose between meditation themes and duration. The streak counter helps the users monitor their progress and what they have achieved, which in turn motivates them to always keep up with their meditation practices. In addition to that, we have provided offline access to the app, and also a download option for listening anytime, anywhere even in the absence of the internet.

          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Results</h2>
          <p className="text-gray-700 leading-relaxed">
            ShalomSpace successfully addressed its initial challenges, creating a unique Jewish meditation app that stands out in a crowded market. The platform features carefully crafted, culturally relevant meditations and an intuitive interface developed by ByteCompiler. Key features include easy navigation, a motivational streak counter, and offline accessibility. Most importantly, ShalomSpace has become a safe, welcoming space for Jews worldwide to connect, meditate, and share experiences. By focusing on the specific needs of the Jewish community, the app has carved out its niche, offering a compelling alternative to mainstream meditation platforms.
          </p>
        </div>
        <div className="flex justify-center">
            <img
                src="https://www.deligence.com/wp-content/uploads/2023/09/A5-400x812.webp"
                alt="App Preview"
                className="rounded-xl  max-h-[500px]"
            />
            </div>

      </div>

    <ContactForm />

      </div>
    </div>
  );
};

export default ShalomSpace;
