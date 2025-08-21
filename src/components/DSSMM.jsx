import React, { useState } from 'react';

const PricingCard = () => {
  const [selectedPlan, setSelectedPlan] = useState(2); // Default to Premium (index 1)
  const [expandedPlans, setExpandedPlans] = useState({}); // Track expanded state for each plan

  const plans = [
    {
      name: 'Standard',
      description: 'A great solution for beginners',
      regularPrice: '14,999/-',
      discountPrice: '9,999',
      savePercentage: '33.33%',
      renewalPrice: '9,999/-',
      isPopular: false,
      features: [
        { text: 'Weekly/monthly ( Single post,Multiple post slides,video and Gifs', included: true },
        { text: 'Festival Post', included: true },
        { text: 'Dedicated Account manager', included: true },
        { text: 'Acount Creation & Setup (Bio,Description,Backlink,Profile,cover Photo & more', included: false },
        { text: 'Facebook', included: false },
        { text: 'Instagram', included: true },
        { text: 'Content Creation, Marketing & Strategy', included: true },
        { text: 'Content Writing for Post', included: false },
        { text: 'Monthly all post approval by You', included: false },
        { text: 'Revision', included: false },
        { text: 'Content Duplicate Checking', included: false },
        { text: 'Hashtag Keyword Research in your Target Business', included: true },
        { text: 'Keyword Ranking and SEO', included: true },
        { text: 'Social Media Optimization (SMO)', included: true },
        { text: 'Google My Business Setup', included: true },
        { text: '1 Online Promotion in a month(for Engagement , reach or boost eg. 10-100k reach', included: true },
        { text: 'Paid Promotion(ads cost by you', included: false },
        { text: 'Meta & Google Ads Management', included: false },
        { text: 'Leads Generation', included: false },
        { text: 'Increase Brand Awareness & Followers', included: true },
        { text: 'Competitors Reports', included: false },
        { text: 'Testimonial / Review', included: false },
        { text: 'Queries Reply Management For Comment and Reviews', included: true },
        { text: 'Monthly and weekly Report', included: true },
        { text: 'Support 24/7', included: true },
        { text: 'PR - Press Release For Public Retention', included: false },
      ],
      months: 1,
    },
    {
      name: 'Plus',
      description: 'Level up with more power and enhanced features.',
      regularPrice: '24,999/-',
      discountPrice: '19,999',
      savePercentage: '20%',
      renewalPrice: '19,999',
      isPopular: false,
      features: [
        { text: 'Weekly/monthly ( Single post,Multiple post slides,video and Gifs', included: true },
        { text: 'Festival Post', included: true },
        { text: 'Dedicated Account manager', included: true },
        { text: 'Acount Creation & Setup (Bio,Description,Backlink,Profile,cover Photo & more', included: false },
        { text: 'Facebook', included: true },
        { text: 'Instagram', included: true },
        { text: 'Content Creation, Marketing & Strategy', included: true },
        { text: 'Content Writing for Post', included: true },
        { text: 'Monthly all post approval by You', included: true },
        { text: 'Revision', included: true },
        { text: 'Content Duplicate Checking', included: false },
        { text: 'Hashtag Keyword Research in your Target Business', included: true },
        { text: 'Keyword Ranking and SEO', included: true },
        { text: 'Social Media Optimization (SMO)', included: true },
        { text: 'Google My Business Setup', included: true },
        { text: '1 Online Promotion in a month(for Engagement , reach or boost eg. 10-100k reach', included: true },
        { text: 'Paid Promotion(ads cost by you', included: true },
        { text: 'Meta & Google Ads Management', included: true },
        { text: 'Leads Generation', included: true },
        { text: 'Increase Brand Awareness & Followers', included: true },
        { text: 'Competitors Reports', included: false },
        { text: 'Testimonial / Review', included: true },
        { text: 'Queries Reply Management For Comment and Reviews', included: true },
        { text: 'Monthly and weekly Report', included: true },
        { text: 'Support 24/7', included: true },
        { text: 'PR - Press Release For Public Retention', included: false },
      ],
      months: 3,
    },
    {
      name: 'Premium',
      description: 'Everything you need to Manage Your Social Media.',
      regularPrice: '29,999/-',
      discountPrice: '21,999',
      savePercentage: '26.67%',
      renewalPrice: '21,999',
      isPopular: true,
      features: [
        { text: 'Weekly/monthly ( Single post,Multiple post slides,video and Gifs', included: true },
        { text: 'Festival Post', included: true },
        { text: 'Dedicated Account manager', included: true },
        { text: 'Acount Creation & Setup (Bio,Description,Backlink,Profile,cover Photo & more', included: true },
        { text: 'Facebook', included: true },
        { text: 'Instagram', included: true },
        { text: 'Content Creation, Marketing & Strategy', included: true },
        { text: 'Content Writing for Post', included: true },
        { text: 'Monthly all post approval by You', included: true },
        { text: 'Revision', included: true },
        { text: 'Content Duplicate Checking', included: true },
        { text: 'Hashtag Keyword Research in your Target Business', included: true },
        { text: 'Keyword Ranking and SEO', included: true },
        { text: 'Social Media Optimization (SMO)', included: true },
        { text: 'Google My Business Setup', included: true },
        { text: '1 Online Promotion in a month(for Engagement , reach or boost eg. 10-100k reach', included: true },
        { text: 'Paid Promotion(ads cost by you', included: true },
        { text: 'Meta & Google Ads Management', included: true },
        { text: 'Leads Generation', included: true },
        { text: 'Increase Brand Awareness & Followers', included: true },
        { text: 'Competitors Reports', included: true },
        { text: 'Testimonial / Review', included: true },
        { text: 'Queries Reply Management For Comment and Reviews', included: true },
        { text: 'Monthly and weekly Report', included: true },
        { text: 'Support 24/7', included: true },
        { text: 'PR - Press Release For Public Retention', included: true },
      ],
      months: 3,
    },
  ];

  const handleSelectPlan = (index) => {
    setSelectedPlan(index);
  };

  const toggleExpandPlan = (index) => {
    setExpandedPlans((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the expanded state for the specific plan
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 ">
      <h1 className="text-2xl md:text-3xl p-4 md:p-8 font-bold text-center text-transparent bg-clip-text bg-black mb-6">
        Pick your perfect plan for <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-black">Social Media Management</span>
      </h1>

      <p className="text-center mb-10 text-gray-800">
        Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg border ${selectedPlan === index ? 'border-[#1affff] shadow-lg' : 'border-gray-200'} 
              ${plan.isPopular ? 'ring-2 ring-[#1affff]' : ''}`}
            style={{
              alignSelf: 'flex-start', // Prevent card from stretching
              height: 'auto', // Allow card to grow based on content
              display: 'flex',
              flexDirection: 'column',
              transform: index === 2 ? 'translateY(-20px)' : 'none', // Lift the Premium card up
            }}
          >
            {plan.isPopular && (
              <div className="bg-[#1affff] py-1 text-white text-center text-sm font-medium">
                MOST POPULAR
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow bg-gradient-to-bl from-[#1affff] to-white rounded-lg">
              <h2 className="text-xl font-bold text-black mb-1">{plan.name}</h2>
              <p className="text-sm text-gray-800 mb-4">{plan.description}</p>

              <div className="mb-2">
                <span className="text-sm line-through text-gray-500">₹{plan.regularPrice}</span>
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">SAVE {plan.savePercentage}</span>
              </div>

              <div className="flex items-baseline mb-1">
                <span className="text-black text-4xl font-bold">₹{plan.discountPrice}</span>
                <span className="text-gray-800 text-sm">/mo</span>
              </div>

              {plan.months > 0 && (
                <div className="text-sm text-black mb-4">+ GST</div>
              )}

              <button
                onClick={() => handleSelectPlan(index)}
                className={`w-full py-3 px-4 rounded-md font-medium mb-4 transition-colors ${
                  selectedPlan === index
                    ? 'bg-black text-white hover:bg-gray-800'
                    : plan.isPopular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'border border-black text-black hover:bg-gray-50'
                }`}
              >
                {selectedPlan === index ? 'Selected' : 'Choose plan'}
              </button>

              <div className="text-xs text-gray-800 mb-6">
                ₹ {plan.renewalPrice}/mo when you renew
              </div>

              <div className="space-y-3">
                {plan.features
                  .slice(0, expandedPlans[index] ? plan.features.length : 5) // Show all features if expanded, else first 5
                  .map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Show all features button */}
              <button
                onClick={() => toggleExpandPlan(index)}
                className="text-black flex items-center justify-center mt-4 text-sm font-medium"
              >
                {expandedPlans[index] ? 'Show less' : 'See all features'}
                <svg className={`h-4 w-4 ml-1 transition-transform ${expandedPlans[index] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 text-sm text-gray-800">
        Payment terms
      </div>
    </div>
  );
};

export default PricingCard;