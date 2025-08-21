import React from "react";
import ContactForm from "../components/Contact";

const AnimalVisionSimulator = () => {
  return (
    <div className="w-full py-20 font-sans">
      {/* Animal Vision Simulator Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-12">
              Animal Vision Simulator
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  INDUSTRY
                </button>
                <span className="text-gray-700">Animal Healthcare Industry</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  TECHNOLOGY
                </button>
                <span className="text-gray-700">
                  Mobile App (Java, OpenGL 4.0, Processing 3.0 for Android; Swift for iOS)
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  ABOUT APP
                </button>
              </div>
            </div>

            <p className="text-gray-800 leading-relaxed">
              Animal Vision Simulator is a mobile app that allows users to experience the world
              through the eyes of various animals.
            </p>

            
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2023/09/animal-vision-768x622.webp"
              alt="App Screenshot"
              className="rounded-xl max-h-[500px]"
            />
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-rose-500 text-white mt-12 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          
          
          <h3 className="text-xl font-semibold mb-4 md:mb-0">
            Download The App FREE!
          </h3>
          <div className="flex gap-4">
            {/* Google Play clickable */}
            <a
              href="https://apps.apple.com/us/app/animal-vision/id1464890327"
              target="_blank"
              rel="noopener noreferrer"
            >
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

        {/* Project Brief & Challenge */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mb-4">
              Challenge
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Understanding how different animals perceive the world can be challenging.
              Traditional methods involve textbooks or documentaries, which may lack interactivity
              and a truly immersive experience.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2022/06/Animal-vision1-600x323.webp"
              alt="App Preview"
              className="rounded-xl max-h-[500px]"
            />
          </div>
        </div>

        {/* Solution */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2022/06/Animal-vision2-538x600.webp"
              alt="App Preview"
              className="rounded-xl max-h-[500px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">
              Solution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To solve this problem, the team at ByteCompiler created a special app –
              <strong> Animal Vision Simulator </strong> – that utilizes advanced technologies to offer:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Real-time Animal Vision Simulation:</strong> Users can experience the
                world through the eyes of rabbits, fish, birds, dogs, cats, and mice.
              </li>
              <li>
                <strong>Educational Insights:</strong> Provides detailed information about each
                animal’s vision.
              </li>
              <li>
                <strong>Multilingual Support:</strong> Available in English and Thai.
              </li>
              <li>
                <strong>Interactive Features:</strong> Gallery, image-click function, and
                screenshot capabilities to capture and share experiences.
              </li>
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">
              Results
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Animal Vision Simulator offers a fun and educational way to explore the wonders of
              animal vision. By experiencing the world through different eyes, users gain a new
              appreciation for the diverse ways animals perceive their surroundings. The app serves
              as a valuable tool for students, animal enthusiasts, and anyone curious about the
              animal kingdom.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2022/06/Animal-vision3-600x435.webp"
              alt="App Preview"
              className="rounded-xl max-h-[500px]"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default AnimalVisionSimulator;
