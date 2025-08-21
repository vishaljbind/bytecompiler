import React from "react";
import ContactForm from "../components/Contact";

const FitnessTrackerApp = () => {
  return (
    <div className="w-full py-20 font-sans">
      {/* Fitness Tracker Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-12">
              Fitness Tracker App
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  INDUSTRY
                </button>
                <span className="text-gray-700">Fitness Industry</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  TECHNOLOGY
                </button>
                <span className="text-gray-700">Meteor JS and Cordova</span>
              </div>

              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-medium">
                  ABOUT APP
                </button>
            <p className="text-gray-800 leading-relaxed">
              Transform your health with our innovative solutions.
            </p>
              </div>
            </div>

          </div>

          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2022/12/1-600x337.png"
              alt="App Screenshot"
              className="rounded-xl max-h-[600px]"
            />
          </div>
        </div>

        {/* Project Brief */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mb-4">
              Project Brief
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ByteCompiler, a leader in fitness app development services, partnered with
              Gusto Technologies, Inc., renowned for its innovative fitness device, Versa Climber.
              The project aimed to integrate IoT technology into fitness equipment, creating a
              seamless ecosystem with a cross-platform mobile app and cloud services. This initiative
              aligned with Gusto’s ethos of fostering fitness, passion, and community, aiming to
              elicit positive emotions and user engagement.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The primary objective was to develop a comprehensive fitness tracker system that
              facilitates individual workouts, team competitions, and studio management.
            </p>
          </div>
          
        </div>

        {/* Challenge */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mb-4">
              Challenge
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The primary challenge was to design and implement a robust system that seamlessly
              connects Versa Climber fitness equipment, mobile applications, and cloud services.
              Integrating Bluetooth Low Energy (BLE) technology introduced technical hurdles,
              necessitating meticulous planning to ensure compatibility across various devices and
              platforms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Additionally, developing interactive features such as team competitions and real-time
              data synchronization added layers of complexity. Striking a balance between
              user-friendly interfaces and comprehensive functionality was crucial to meeting the
              diverse needs of individual gym-goers, fitness trainers, and gym owners.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Furthermore, ensuring the system’s scalability to accommodate multiple studios and
              users while maintaining high performance and security was a significant challenge.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2022/12/6-800x435.png"
              alt="App Preview"
              className="rounded-xl max-h-[500px]"
            />
          </div>
        </div>

        {/* Solution */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2022/12/4-800x435.png"
              alt="App Preview"
              className="rounded-xl max-h-[500px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mb-4">Solution</h2>
            <p className="text-gray-700 leading-relaxed">
              To address the challenges, Gusto Technologies devised a comprehensive solution
              encompassing hardware, software, and cloud infrastructure. Leveraging BLE technology,
              the IoT-enabled fitness equipment seamlessly communicates with the cross-platform
              mobile app, enabling real-time workout tracking and performance monitoring.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The mobile app featured interactive features such as stack-ranked leaderboards, team
              races, and tug-of-war competitions, fostering a sense of camaraderie and motivation
              among users.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              A robust cloud backend facilitated data storage, synchronization, and web reporting,
              ensuring accessibility and scalability. The web panel empowered gym owners and
              administrators to manage users, schedule classes, and customize app settings,
              enhancing the overall user experience. Customization options such as UI settings and
              branding elements allowed for a personalized touch, reinforcing brand identity and
              user engagement.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-rose-600 mb-4">Results</h2>
            <p className="text-gray-700 leading-relaxed">
              The implementation of the fitness tracker app revolutionized the fitness industry,
              garnering acclaim for its innovative features and seamless user experience. Users
              embraced interactive competitions and real-time performance tracking, enhancing
              motivation and engagement in their fitness journeys.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Gym owners benefitted from streamlined studio management tools, improving operational
              efficiency and customer satisfaction. The scalability of the system facilitated its
              adoption by numerous studios worldwide, cementing Gusto Technologies’ position as a
              pioneer in connected fitness solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Overall, the fitness app project achieved unprecedented success, exemplifying Gusto’s
              commitment to excellence and innovation in the pursuit of fostering fitness, passion,
              and community.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.deligence.com/wp-content/uploads/2022/12/5-800x435.png"
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

export default FitnessTrackerApp;
