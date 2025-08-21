import React, { useState } from 'react';
import { FaArrowRight, FaTimes } from "react-icons/fa";

const CareerPage = () => {

  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    role: '',
    skillsRating: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const jobListings = [
    {
      title: "Graphic Designer Intern",
      experience: "Freshers",
      positions: 2,
      location: "Remote",
      type: "3 Months",
      postedDays: "1 day Ago"
    },
    {
      title: "UI & UX Intern",
      experience: "Freshers",
      positions: 2,
      location: "Remote",
      type: "3 Months",
      postedDays: "1 day Ago"
    },
    
    {
      title: "Fullstack Developer Intern",
      experience: "Freshers",
      positions: 2,
      location: "Remote",
      type: "3 Months",
      postedDays: "1 day Ago"
    },
    {
      title: "frontend Developer Intern",
      experience: "Freshers",
      positions: 2,
      location: "Remote",
      type: "3 Months",
      postedDays: "1 day Ago"
    },
    {
      title: "Backend Developer Intern",
      experience: "Freshers",
      positions: 2,
      location: "Remote",
      type: "3 Months",
      postedDays: "1 day Ago"
    },
    {
      title: "Backend Developer",
      experience: "0 to 3 years",
      positions: 2,
      location: "Vasai, Mumbai",
      type: "Full Time",
      postedDays: "90 day Ago"
    },
    {
      title: "Web Developer",
      experience: "0 to 2 years",
      positions: 2,
      location: "Vasai, Mumbai",
      type: "Full Time",
      postedDays: "120 day Ago"
    },
    
    {
      title: "SEO Expert ",
      experience: "1 to 3 years",
      positions: 2,
      location: "Vasai, Mumbai",
      type: "Full Time",
      postedDays: "120 day Ago"
    },
    
    {
      title: "App Developer",
      experience: "0 to 3 years",
      positions: 2,
      location: "Vasai, Mumbai",
      type: "Full Time",
      postedDays: "120 days Ago"
    }
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'skillsRating') {
      const rating = parseInt(value);
      if (rating < 1 || rating > 10) return;
    }
    
    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== '') {
        formData.append(key, value);
      }
    });

    try {
      const res = await fetch(`${API}/api/apply`, {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      
      if (res.ok) {
        setSubmitMessage('Application submitted successfully!');
        setForm({
          fullname: '',
          email: '',
          experience:'',
          role: '',
          skillsRating: '',
          resume: null
        });
        setTimeout(() => {
          setShowForm(false);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage(data.message || 'Error submitting application');
      }
    } catch (error) {
      setSubmitMessage('Network error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setForm(prev => ({
      ...prev,
      role: jobTitle
    }));
    setShowForm(true);
  };

  const handleSendResume = () => {
    window.location.href = "mailto:hr@example.com?subject=Job Application&body=Please find my resume attached.";
  };

  const handleContactHR = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#99ffff] via-white to-[#80ffff] py-24 md:py-36 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-opacity-40"></div>
        <div className="relative z-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-lg mb-4 uppercase tracking-wide">CAREER</p>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                Opportunities don't happen, <br />
                <span className="text-black">you create them.</span>
              </h1>
              <button className="group inline-flex items-center gap-2 text-black font-semibold hover:text-orange-500 transition-colors duration-300">
                Join Our Team
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg">
                  <div className="text-center">
                    <img src="https://iili.io/Ftt8yf2.jpg" className='object-fill h-[34.5vh] w-[100vh]' alt="join team" />
                    <p className="text-gray-800 mt-2">Be part of something amazing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="mx-auto max-w-6xl py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              We're <span className="text-orange-500">Hiring!</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <div key={index} className="rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 p-6 border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">{job.title}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">Required Experience</span>
                      <span className="text-black font-semibold">{job.experience}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">Number of Position</span>
                      <span className="text-black font-semibold">{job.positions}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">Job Location</span>
                      <span className="text-black font-semibold">{job.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">Job Type</span>
                      <span className="text-black font-semibold">{job.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">{job.postedDays}</span>
                  <button 
                    onClick={() => handleApplyClick(job.title)}
                    className="group inline-flex items-center gap-2 bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-all duration-300"
                  >
                    Apply Now
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-orange-500">Apply for {selectedJob}</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Skills Rating (1-10)</label>
                  <input
                    type="number"
                    name="skillsRating"
                    value={form.skillsRating}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    min="1"
                    max="10"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Resume (PDF/DOC)</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
              
              {submitMessage && (
                <div className={`mt-4 p-2 rounded-lg text-center ${
                  submitMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-800 text-lg mb-8">
            Don't see a position that fits? We're always looking for talented individuals. 
            Send us your resume and tell us how you can contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleSendResume}
              className="inline-flex items-center gap-2 bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              <span>📧</span>
              Send Resume
            </button>
            <button 
              onClick={handleContactHR}
              className="inline-flex items-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <span>💬</span>
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;