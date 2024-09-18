import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Bell, Search, Sun, Moon, BarChart2, Leaf, AlertTriangle } from 'lucide-react';
import './home.css';
import MainDashboard from './main';
import Alerts from './alerts';// Import the new Alerts component
import GreenPractices from './greenpractices';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h1>Swachhta & LiFE</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center">
                <BarChart2 size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/green-practices" className="flex items-center">
                <Leaf size={20} />
                <span>Green Practices</span>
              </Link>
            </li>
            <li>
              <Link to="/alerts" className="flex items-center">
                <AlertTriangle size={20} />
                <span>Alerts</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <Search className="text-gray-500" />
          </div>
          <div className="header-icons">
            <Bell />
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-500" />}
            </button>
          </div>
        </header>
     
        <Routes>
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/green-practices"element={<GreenPractices/>}/>
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
       
        <div className="ai-images-section">
          <h2 className="text-xl font-semibold mb-4">AI-Processed Images</h2>
          <div className="ai-images-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="ai-image-card">
                <div className="ai-image-placeholder">
                  <p className="text-gray-500 dark:text-gray-400">Image {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;