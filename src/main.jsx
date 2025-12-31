import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import About from './components/About.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import ContactUs from './components/ContactUs.jsx';

import VideoProduction from './services/VideoProduction.jsx';
import SocialMediaSetup from './services/SocialMediaSetup.jsx';
import SocialMediaManagement from './services/SocialMediaManagement.jsx';
import BrandLaunchPackages from './services/BrandLaunchPackages.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>  
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
      <Route path="/contact" element={<ContactUs/>} /> 
      <Route path="/video-production" element={<VideoProduction/>} />
      <Route path="/social-media-setup" element={<SocialMediaSetup/>} />
      <Route path="/social-media-management" element={<SocialMediaManagement/>} />
      <Route path="/brand-launch-packages" element={<BrandLaunchPackages/>} />
    </Routes>
  </BrowserRouter>
)
