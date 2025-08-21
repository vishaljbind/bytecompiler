import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (

    <div className="w-full bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5] py-8 md:py-28 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | ByteCompiler</title>
        <meta name="description" content="ByteCompiler India Privacy Policy compliant with IT Act 2000 and GDPR principles" />
      </Helmet>
      
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header with your theme colors */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-10 text-white">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end">
            <p className="text-blue-100">Effective: {new Date().toLocaleDateString('en-IN')}</p>
            <p className="text-sm bg-blue-700 px-3 py-1 rounded-full mt-2 sm:mt-0">
              Compliant with IT Act, 2000 &amp; GDPR Principles
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-8 sm:p-10 space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              Introduction
            </h2>
            <div className="ml-12 space-y-4 text-gray-700">
              <p>
                At <span className="font-semibold text-blue-600">ByteCompiler</span> ("we", "our", "us"), we are committed to protecting your privacy in compliance with India's Information Technology Act, 2000 and the SPDI Rules (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information Rules, 2011).
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI services platform (the "Service").
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              Information We Collect
            </h2>
            <div className="ml-12 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Personal Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Name, email address, phone number</li>
                <li>Company name and job title</li>
                <li>Payment and billing information</li>
                <li>Government ID (for KYC compliance when required)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">Usage Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address, browser type, device information</li>
                <li>Pages visited, time spent, navigation paths</li>
                <li>AI model usage patterns and preferences</li>
              </ul>
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Legal Basis for Processing (GDPR & IT Act Compliance)
            </h2>
            <div className="ml-12 space-y-4 text-gray-700">
              <p>
                We process your personal data under the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> When you explicitly agree to our data processing</li>
                <li><strong>Contractual Necessity:</strong> To fulfill our service obligations</li>
                <li><strong>Legal Compliance:</strong> As required by Indian laws and regulations</li>
                <li><strong>Legitimate Interests:</strong> For service improvement and fraud prevention</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Data Sharing & Third Parties
            </h2>
            <div className="ml-12 space-y-4 text-gray-700">
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers in India and abroad (with adequate safeguards)</li>
                <li>Legal authorities when required by Indian law</li>
                <li>Business partners with your consent</li>
              </ul>
              <p className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <strong>Note:</strong> We implement Standard Contractual Clauses (SCCs) for international data transfers as required by Indian data protection principles.
              </p>
            </div>
          </section>

          {/* User Rights - India Focus */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Your Rights Under Indian Law
            </h2>
            <div className="ml-12 space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">Right to Access & Correction</h3>
                  <p>Request access to or correction of your personal data under Section 43A of the IT Act.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">Right to Grievance Redressal</h3>
                  <p>Lodge complaints with our appointed Grievance Officer as mandated by Indian law.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">Withdrawal of Consent</h3>
                  <p>Withdraw consent for data processing at any time (may affect service functionality).</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">Data Portability</h3>
                  <p>Request your data in a structured, commonly used format.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              Data Security Measures
            </h2>
            <div className="ml-12 space-y-4 text-gray-700">
              <p>We implement ISO 27001-compliant security measures including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and multi-factor authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-4">
                Our data centers are located in <span className="font-semibold">Mumbai and Chennai</span>, India, with backups maintained within the country as per Indian data localization recommendations.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Contact Our Grievance Officer
            </h2>
            <div className="ml-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800">As required under Indian IT Act:</p>
              <p className="mt-2">Name: <span className="font-medium">Mr. Rajesh Kumar</span></p>
              <p>Email: <span className="font-medium text-blue-600">dpo@deligence.com</span></p>
              <p>Address: <span className="font-medium">ByteCompiler, 24th Floor, Tower B, Cyber City, Gurugram, Haryana 122002</span></p>
              <p className="mt-4 text-sm text-gray-600">Response time: Within 30 days as mandated by Indian law</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} ByteCompiler. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;