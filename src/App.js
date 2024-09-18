// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home'; // Import the new Home component

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;

