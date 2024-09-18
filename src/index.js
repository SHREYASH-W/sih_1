import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'; // Import the Home component
import MainDashboard from './components/main'; // Import the MainDashboard component
import Alerts from './components/alerts';
import GreenPractices from './components/greenpractices';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/alerts" element={< Alerts/>} /> 
        <Route path="/green-practices" element={<GreenPractices/>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
