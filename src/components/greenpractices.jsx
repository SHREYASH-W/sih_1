import React, { useState, useEffect } from 'react';
import { Leaf, Droplet, Wind, Trash2, Battery, Thermometer } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './green.css';

const GreenPractices = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  const practices = [
    { name: 'Water Conservation', icon: Droplet, color: '#3498db', progress: 85 },
    { name: 'Energy Efficiency', icon: Battery, color: '#e74c3c', progress: 92 },
    { name: 'Waste Reduction', icon: Trash2, color: '#2ecc71', progress: 78 },
    { name: 'Air Quality', icon: Wind, color: '#9b59b6', progress: 70 },
    { name: 'Green Space', icon: Leaf, color: '#f1c40f', progress: 88 },
    { name: 'Climate Action', icon: Thermometer, color: '#e67e22', progress: 65 },
  ];

  const monthlyData = [
    { name: 'Jan', value: 65 }, { name: 'Feb', value: 59 }, { name: 'Mar', value: 80 },
    { name: 'Apr', value: 81 }, { name: 'May', value: 56 }, { name: 'Jun', value: 55 },
    { name: 'Jul', value: 40 }, { name: 'Aug', value: 70 }, { name: 'Sep', value: 90 },
    { name: 'Oct', value: 95 }, { name: 'Nov', value: 92 }, { name: 'Dec', value: 85 }
  ];

  const handlePracticeClick = (practice) => {
    setSelectedPractice(practice);
  };

  return (
    <div className="gp-container">
      <h1 className="gp-header">Green Practices Dashboard</h1>
      <div className="gp-practices-grid">
        {practices.map((practice) => (
          <div
            key={practice.name}
            className={`gp-practice-card ${selectedPractice === practice ? 'selected' : ''} ${animationTrigger ? 'animate' : ''}`}
            onClick={() => handlePracticeClick(practice)}
          >
            <practice.icon size={40} color={practice.color} />
            <h2>{practice.name}</h2>
            <div className="gp-progress-bar">
              <div className="gp-progress" style={{ width: `${practice.progress}%`, backgroundColor: practice.color }}></div>
            </div>
            <p>{practice.progress}% Achieved</p>
          </div>
        ))}
      </div>
      {selectedPractice && (
        <div className="gp-practice-details">
          <h2>{selectedPractice.name} Details</h2>
          <div className="gp-charts-container">
            <div className="gp-chart">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[{ value: selectedPractice.progress }, { value: 100 - selectedPractice.progress }]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill={selectedPractice.color}
                    dataKey="value"
                  >
                    <Cell fill={selectedPractice.color} />
                    <Cell fill="#ecf0f1" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p>Overall Progress</p>
            </div>
            <div className="gp-chart">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke={selectedPractice.color} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <p>Monthly Trend</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GreenPractices;