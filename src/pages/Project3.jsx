import React from "react";
import ContactForm from "../components/Contact";

const BspotzApp = () => {
  return (
    <div className="w-full py-10 md:py-20 font-sans">
      {/* Bspotz Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-12">
              Bspotz Mobile Application
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  INDUSTRY
                </button>
                <span className="text-gray-700">Social, Entertainment, Events</span>
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
              Bspotz is an app that combines online events with real-world walks and video chats
              using users’ locations. It allows users to socialize virtually while exploring their
              surroundings and meeting like-minded people nearby for memorable experiences.
            </p>


            
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2024/02/Bspotz-2-768x768.webp"
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
            <a href="#" target="_blank" rel="noopener noreferrer">
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

        {/* Challenge */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mb-4">Challenge</h2>
            <p className="text-gray-700 leading-relaxed">
              These days, it’s hard to make real social connections. Online platforms let you chat
              with people, but you can’t really explore the world around you or meet up in person
              easily. And many people worry about sharing their location or personal info online
              because of privacy and safety concerns. Sometimes, you simply want to experience
              something but don’t have the time or resources for it.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bspotz wanted to solve these issues. The challenge was creating an app that allows
              people to truly connect with others nearby, go on walks together, gather experiences,
              and attend fun events – all while keeping users’ information private and secure.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              It’s difficult to balance letting people interact in the real world while still
              protecting their personal data and locations from being shared too openly. Bspotz
              aimed to build a social app that brings online and offline experiences together in a
              safe way that users can control.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2024/02/Bspotz-4-768x768.webp"
              alt="App Preview"
              className="rounded-xl max-h-[500px]"
            />
          </div>
        </div>

        {/* Solution */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2024/02/Bspotz-3-768x768.webp"
              alt="App Preview"
              className="rounded-xl max-h-[500px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Solution</h2>
            <p className="text-gray-700 leading-relaxed">
              Bspotz is a new kind of social app that makes it easy and fun to connect with people
              worldwide. It combines online features with real-world activities so you can explore
              the world while meeting new people.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Share your location:</strong> Uses your phone’s location to show events and
                people nearby, with search options.
              </li>
              <li>
                <strong>Lots of event choices:</strong> Online meetups, walks, and events for
                different interests.
              </li>
              <li>
                <strong>Safe video calls:</strong> Secure video chats with fun backgrounds and text
                chat.
              </li>
              <li>
                <strong>Find cool events:</strong> See what’s happening near you, tailored to your
                interests.
              </li>
              <li>
                <strong>Privacy control:</strong> Decide who can view your location and events.
              </li>
              <li>
                <strong>Private messaging:</strong> Message friends before or after events.
              </li>
              <li>
                <strong>Reminders:</strong> Get alerts about events, requests, and messages.
              </li>
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mt-12 mb-4">Results</h2>
            <p className="text-gray-700 leading-relaxed">
              Bspotz bridges the gap between online and offline social experiences, providing a
              dynamic platform for individuals to explore their surroundings, connect with
              like-minded people, and participate in diverse events. With its innovative features
              and robust privacy controls, Bspotz empowers users to build meaningful connections
              while experiencing the world around them in a whole new way.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2024/02/Bspotz-1-768x768.webp"
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

export default BspotzApp;
