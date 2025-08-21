import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: 'interested in',
    message: '',
    agree: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agree) {
      setSubmitStatus({ success: false, message: 'Please agree to the Terms & Conditions' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
        // ✅ Use env variable for API
        const API = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${API}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            services: [formData.service],
            message: formData.message,
          }),
        });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      setSubmitStatus({ success: true, message: 'Message sent successfully! We will contact you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: 'interested in',
        message: '',
        agree: false
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message || 'Failed to send message. Please try again.' });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Background content - Orange section with contact info */}
      <div className="p-8 text-rose-600">
        <div className="max-w-6xl mx-auto">
          {/* For desktop view */}
          <div className="hidden md:block md:w-1/2">
            <h3 className="text-lg font-medium mb-4">ENQUIRY</h3>
            <h2 className="text-4xl font-bold mb-16">Let's Get in Touch</h2>
            
            <div className="space-y-8">
              <div>
                <p className="mb-2">Sales Department</p>
                <div className="bg-white text-gray-700 rounded-md p-3 flex items-center w-64">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 976 4281 201</span>
                </div>
              </div>
              
              <div>
                <p className="mb-2">WhatsApp No.</p>
                <div className="bg-white text-gray-700 rounded-md p-3 flex items-center w-64">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 954 5097 341</span>
                </div>
              </div>
              
              <div>
                <p className="mb-2">Email</p>
                <div className="bg-white text-gray-700 rounded-md p-3 flex items-center w-64">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@ByteCompiler.in</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* For mobile view - Contact info at top */}
          <div className="md:hidden space-y-4">
            <div className="space-y-4">
              <h3 className="text-lg text-rose-600 font-medium mb-2">ENQUIRY</h3>
              <h2 className="text-3xl text-rose-600 font-bold mb-4">Let's Get in Touch</h2>
              <div>
                <p className="mb-1 text-rose-500">Sales Department</p>
                <div className="bg-white text-gray-700 rounded-md p-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 989 2246 353</span>
                </div>
              </div>
              
              <div>
                <p className="mb-1 text-rose-500">WhatsApp No.</p>
                <div className="bg-white text-gray-700 rounded-md p-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 989 2246 353</span>
                </div>
              </div>
              
              <div>
                <p className="mb-1 text-rose-500">Email</p>
                <div className="bg-white text-gray-700 rounded-md p-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@ByteCompiler.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form section - Right side on desktop, overlapping card on mobile */}
      <div className="md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full flex items-center">
        <div className="w-full p-1 md:p-8">
          <div className="bg-gradient-to-br from-aqua-600 via-white to-black-600 rounded-lg shadow-lg p-8 mx-auto max-w-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Please fill in the form below.</h2>
            
            {submitStatus && (
              <div className={`mb-4 p-3 rounded-md ${
                submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Contact Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-500 bg-white"
                  required
                >
                  <option value="interested in">interested in</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="SEO">SEO</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              
              <div>
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-rose-300 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <span className="text-sm text-gray-600">I agree to the Terms & Conditions of ByteCompiler</span>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting || !formData.agree}
                className={`w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send your enquiry
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
              
              <div className="text-center text-sm text-gray-500">
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  We hate spam, and we respect your privacy.
                </span>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">We Deliver</h3>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-orange-100 p-2 rounded-full mb-1">
                      <span className="text-xl">💰</span>
                    </div>
                    <span className="text-xs md:text-sm">Best Price</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-100 p-2 rounded-full mb-1">
                      <span className="text-xl">🏅</span>
                    </div>
                    <span className="text-xs md:text-sm">Quality Service</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-red-100 p-2 rounded-full mb-1">
                      <span className="text-xl">👨‍💼</span>
                    </div>
                    <span className="text-xs md:text-sm">Good Support</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-yellow-100 p-2 rounded-full mb-1">
                      <span className="text-xl">⭐</span>
                    </div>
                    <span className="text-xs md:text-sm">Satisfaction</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;