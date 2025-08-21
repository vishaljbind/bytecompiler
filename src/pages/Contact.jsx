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
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

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
    setSubmitStatus({ success: false, message: '' });

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
      if (!response.ok) throw new Error(data.message || 'Submission failed');

      setSubmitStatus({ success: true, message: 'Message sent successfully! We will contact you soon.' });
      setFormData({ name: '', email: '', phone: '', subject: '', service: 'interested in', message: '', agree: false });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message || 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      
      {/* Left Contact Info */}
      <div className="bg-gradient-to-bl from-[#00e6e6] via-white to-[#00e6e6] md:h-[550px] p-8 rounded-2xl shadow">
        <h2 className="text-2xl text-rose-600 font-semibold text-center mb-4">Let's Create Something Amazing Together</h2>
        <p className="text-center text-gray-800 mb-6 text-lg italic">
          "Great things in business are never done by one person. They're done by a team of people working together."
        </p>
        <p className="text-center text-gray-800 mb-8">
          We're excited to hear about your project and explore how we can help bring your vision to life.
        </p>
        <div className="space-y-4 text-gray-700">
          <p className="font-bold text-lg">📍 Our Headquarters</p>
          <div className="space-y-2">
            <h3 className="font-semibold">ByteCompiler.</h3>
            <p>1 King Street West</p>
            <p>Mumbai Maharashtra India </p>
          </div>
          <div className="space-y-2 mt-6">
            <p className="flex items-center gap-2">📞 <span className="font-medium">+1 (289) 772-7883</span></p>
            <p className="flex items-center gap-2">📧 <span className="font-medium">sales@bytecompiler.in</span></p>
            <p className="flex items-center gap-2">💬 <span className="font-medium">vj.bytecompiler</span></p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-gradient-to-bl from-[#00e6e6] via-white to-[#00e6e6] p-8 rounded-2xl shadow">
        {/* <h2 className="text-lg font-medium text-rose-600">We Provide Best Services. Need Help?</h2> */}
        <h1 className="text-2xl font-bold text-rose-600  mb-2">Send Us Message</h1>
        

        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-700 bg-gray-50"
            required
          >
            <option value="interested in">Select a service</option>
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

          <div className="flex items-center text-sm gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
            />
            <label htmlFor="agree" className="text-gray-700">
              I agree to the <a href="/terms" className="text-rose-600 underline">Terms & Conditions</a>
            </label>
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us something about your requirement"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-400 placeholder:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          
          <button
            type="submit"
            disabled={isSubmitting || !formData.agree}
            className={`w-full py-3 bg-rose-500 text-white font-medium rounded hover:bg-rose-600 transition ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Processing...' : 'Book Consultation'}
          </button>
        </form>
      </div>
        <div className='mb-5'></div>
    </div>
  );
};

export default ContactForm;