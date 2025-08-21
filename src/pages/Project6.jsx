import React from "react";

const AIVoiceAgent = () => {
  return (
    <div className="w-full py-20 font-sans">
      {/* Header Section */}
      <div className="py-4 px-6 max-w-6xl mx-auto text-center">
        <div className="flex flex-row items-center justify-between mb-8">
            <div>
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
                Versatile AI Voice Agent for Any Industry
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                AI-powered voice agent for any industry—seamlessly handling receptionist duties, 
                appointment scheduling, credit support, loan assistance, and more. 
                Enhance customer interactions with intelligent, automated voice support.
                </p>
            </div>
        <img src="https://www.deligence.com/wp-content/uploads/2025/03/banner.webp" alt="" />
        
        </div>
      </div>

      {/* Project Brief */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-rose-600 mb-4">Project Brief</h2>
          <p className="text-gray-700 leading-relaxed">
            Our AI Voice Agent, powered by Synthflow, is a versatile solution designed 
            to revolutionize customer interactions across various industries. It seamlessly 
            manages tasks such as receptionist duties, appointment scheduling, credit support, 
            and loan assistance. By providing a human-like conversational experience, it enhances 
            operational efficiency and customer satisfaction, breaking geographical barriers 
            and ensuring consistent service quality.
          </p>
        </div>
        
      </div>

      {/* Challenge */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-rose-600 mb-4">Challenge</h2>
          <p className="text-gray-700 leading-relaxed">
            Businesses across various industries struggle with managing customer interactions 
            efficiently. Handling appointment scheduling, reception duties, credit and loan 
            support, and general inquiries requires significant human resources, leading to 
            high operational costs and potential delays in response time.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://www.deligence.com/wp-content/uploads/2025/03/banner-4.webp"
            alt="Challenge"
            className="rounded-xl max-h-[400px] object-contain"
          />
        </div>
      </div>

      {/* Solution */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="https://www.deligence.com/wp-content/uploads/2025/03/banner-5.webp"
            alt="Solution"
            className="rounded-xl max-h-[400px] object-contain"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-rose-600 mb-4">Solution</h2>
          <p className="text-gray-700 leading-relaxed">
            We developed an AI-powered voice agent using Synthflow, enabling businesses 
            to automate customer interactions seamlessly. This AI agent functions as a 
            virtual receptionist, appointment scheduler, credit and loan support representative, 
            and more. It intelligently understands user queries, processes requests, and provides 
            instant responses—enhancing efficiency and customer experience.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-6 flex justify-between py-12">
        <div>
        <h2 className="text-3xl font-semibold text-rose-600 mb-6">Results</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Increased efficiency:</strong> Reduced response time and streamlined 
            customer interactions.
          </li>
          <li>
            <strong>Cost savings:</strong> Lower operational costs by automating repetitive tasks.
          </li>
          <li>
            <strong>Scalability:</strong> Adaptable for various industries, including healthcare, 
            finance, and customer service.
          </li>
          <li>
            <strong>24/7 availability:</strong> Ensures uninterrupted support without human intervention.
          </li>
        </ul>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" className="h-[200px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AIVoiceAgent;
