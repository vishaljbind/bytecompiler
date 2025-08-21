import React, { useState } from 'react';
import { FaRocket, FaEye, FaHandshake, FaFire } from 'react-icons/fa';

const OurGoal = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <FaRocket className="text-rose-500" size={24} />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-rose-600 mb-4">Our Mission</h2>
          <p className="text-slate-700 mb-4">
            At <strong>ByteCompiler</strong>, we focus on delivering high-quality digital solutions. 
            With years of experience in web development and digital marketing, we help brands build 
            a strong online presence through cutting-edge technology and creativity.
          </p>
          <p className="text-slate-700">
            We work closely with our clients to bring their ideas to life, continuously 
            innovating to enhance brand visibility. At <strong>ByteCompiler</strong>, 
            we don’t just develop websites—we create impactful digital experiences 
            that connect with audiences.
          </p>
        </>
      ),
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: <FaEye className="text-rose-500" size={24} />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-rose-600 mb-4">Our Vision</h2>
          <p className="text-slate-700 mb-4">
            Our vision is to shape the future of digital presence by enabling brands 
            to break barriers online. <strong>ByteCompiler</strong> aims to be a leader in 
            website development and marketing innovation, delivering unmatched digital experiences.
          </p>
          <p className="text-slate-700">
            We believe in blending technology with creativity to ensure that every client’s 
            story is uniquely told. Our goal is to create a digital ecosystem where brands 
            thrive, innovate, and grow without limitations.
          </p>
        </>
      ),
    },
    {
      id: 'commitment',
      title: 'Our Commitment',
      icon: <FaHandshake className="text-rose-500" size={24} />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-rose-600 mb-4">Our Commitment</h2>
          <p className="text-slate-700 mb-4">
            <strong>ByteCompiler</strong> is dedicated to transforming ideas into digital reality. 
            We uphold the values of trust, transparency, and timely delivery to ensure that 
            every project exceeds expectations.
          </p>
          <p className="text-slate-700">
            More than just a service provider, we act as strategic partners in digital success. 
            We are committed to delivering excellence in every aspect of our work, building 
            long-term relationships with our clients.
          </p>
        </>
      ),
    },
    {
      id: 'values',
      title: 'Core Values',
      icon: <FaFire className="text-rose-500" size={24} />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-rose-600 mb-4">Core Values</h2>
          <p className="text-slate-700 mb-4">
            At <strong>ByteCompiler</strong>, our values define our work ethic and dedication 
            to our clients. We stand by **innovation, integrity, and client empowerment**, ensuring 
            transparency and ethical practices in all our projects.
          </p>
          <p className="text-slate-700">
            Client satisfaction is not just a goal—it’s our guiding principle. We integrate 
            creativity with functionality to deliver results that exceed expectations, helping 
            brands achieve long-term digital success.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-6xl p-6 gap-6">
      {/* Sidebar */}
      <div className="md:w-1/3 lg:w-1/4">
        <div className="flex flex-col gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-4 p-6 rounded-lg cursor-pointer transition-all ${
                activeTab === tab.id ? 'bg-gradient-to-t from-aqua-600 via-white to-rose-300' : 'bg-gradient-to-bl from-aqua-600 via-white to-aqua-600'
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-50">
                {tab.icon}
              </div>
              <h3 className={`font-medium ${activeTab === tab.id ? 'text-rose-600' : 'text-rose-300'}`}>
                {tab.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="md:w-2/3 lg:w-3/4 h-auto p-8 bg-gradient-to-bl from-aqua-600 via-white to-aqua-600 rounded-lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default OurGoal;
