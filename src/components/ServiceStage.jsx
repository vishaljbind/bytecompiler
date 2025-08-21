import React from 'react'
import ContactForm from './Contact'

const ServiceStage = () => {
  return (
    <section className="py-16 px-6 md:px-12 ">
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-black mb-4 sm:mb-6">
        Why to Choose ByteCompiler
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black mb-8 sm:mb-10 md:mb-12 bg-[#66ffff] rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3">
          We're more than just an agency—we're your innovation ally. Here's why you'll enjoy collaborating with us 🌟
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative Thinking",
              description:
                "We bring fresh, creative ideas that help your brand shine in a crowded space.",
              icon: "🌟",
            },
            {
              title: "Impact-Driven Solutions",
              description:
                "Creativity is essential, but delivering results is our priority—we ensure your brand not only looks great but also performs exceptionally.",
              icon: "✅",
            },
            {
              title: "Tailored Strategies",
              description:
                "Every project is custom-built to align with your specific goals—no generic solutions here.",
              icon: "🎯",
            },
            {
              title: "Collaborative Synergy",
              description:
                "We work alongside you, valuing open communication and teamwork at every stage.",
              icon: "🤝",
            },
            {
              title: "Execution with Precision",
              description:
                "No unnecessary delays or vague commitments—just high-quality work that drives tangible outcomes.",
              icon: "⚡",
            },
            {
              title: "Proven Excellence",
              description:
                "With a strong portfolio and years of expertise, we consistently deliver top-tier results.",
              icon: "🏆",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-bl from-aqua-600 via-white to-black-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-800">{item.description}</p>
            </div>
          ))}
        </div>
        </div>
        
      </section>
  )
}

export default ServiceStage