import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
    </Routes>
  </BrowserRouter>
)
