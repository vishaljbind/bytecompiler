import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GraphicsInfo from "./pages/GraphicsInfo";

import ContentInfo from "./pages/ContentInfo";
import WebInfo from "./pages/WebInfo";
import AppInfo from "./pages/AppInfo";
import UIInfo from "./pages/UIInfo";

import MetaAndGoogleAdsInfo from "./pages/MetaAndGoogleAdsInfo";
import PWDInfo from "./pages/PWDInfo";
import Ecommerce from "./pages/Ecommerce";
import SMM from "./pages/SMM";
import DigitalMarketing from "./pages/DigitalMarketing";
import BlogAdmin from "./pages/AdminComponent";
import CareerPage from "./pages/Careers";
import ShalomSpace from "./pages/Project1";
import AnimalVisionSimulator from "./pages/Project2";
import BspotzApp from "./pages/Project3";
import FitnessTrackerApp from "./pages/Project4";
import PublicAutoAuctions from "./pages/Project5";
import AIVoiceAgent from "./pages/Project6";


const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#99ffff] via-white md:via-white to-[#80ffff] md:from-[#55fbf4] md:to-[#55fbf5] ">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aiservices" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          
          <Route path="/careers" element={<CareerPage />} />

          <Route path="/privacy" element={<PrivacyPolicy />} />
          
          
          <Route path="/services/graphic-designing" element={<GraphicsInfo />} />
          <Route path="/services/pwa-development" element={<PWDInfo />} />
          <Route path="/services/content" element={<ContentInfo />} />
          <Route path="services/web-development" element={<WebInfo />} />
          <Route path="/services/app-development" element={<AppInfo />} />
          <Route path="/services/ui/ux-designing" element={<UIInfo />} />
          <Route path="/services/ecommerce-solutions" element={<Ecommerce />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          
          <Route path="/services/social-media-management" element={< SMM />} />
          <Route path="/services/google-&-meta-ads" element={<MetaAndGoogleAdsInfo />} />
          <Route path="/projectshalom" element={< ShalomSpace />} />
          <Route path="/projectAVS" element={<AnimalVisionSimulator />} />
          <Route path="/projectBspotzApp" element={<BspotzApp />} />
          <Route path="/projectFitnessTracker" element={<FitnessTrackerApp />} />
          <Route path="/projectAutoAuction" element={<PublicAutoAuctions />} />
          <Route path="/projectAiagent" element={<AIVoiceAgent />} />
          

          
          {/* Add more routes as needed */}


        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
