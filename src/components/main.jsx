import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './main.css'

const MainDashboard = () => {
  const data = [
    { name: 'Jan', cleanliness: 4000, greenPractices: 2400, alerts: 2400 },
    { name: 'Feb', cleanliness: 3000, greenPractices: 1398, alerts: 2210 },
    { name: 'Mar', cleanliness: 2000, greenPractices: 9800, alerts: 2290 },
    { name: 'Apr', cleanliness: 2780, greenPractices: 3908, alerts: 2000 },
    { name: 'May', cleanliness: 1890, greenPractices: 4800, alerts: 2181 },
    { name: 'Jun', cleanliness: 2390, greenPractices: 3800, alerts: 2500 },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Swachhta and LiFE Dashboard</h2>
     
      <div className="summary-grid">
        <div className="summary-item">
          <h3>Cleanliness Score</h3>
          <p className="summary-score">85%</p>
        </div>
        <div className="summary-item">
          <h3>Green Practices Adherence</h3>
          <p className="summary-score">92%</p>
        </div>
        <div className="summary-item">
          <h3>Active Alerts</h3>
          <p className="summary-score alert">3</p>
        </div>
      </div>

      <div className="chart-container">
        <h3 className="chart-title">Monthly Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cleanliness" fill="#8884d8" />
            <Bar dataKey="greenPractices" fill="#82ca9d" />
            <Bar dataKey="alerts" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="alerts-container">
        <h3 className="alerts-title">Recent Alerts</h3>
        <ul className="alerts-list">
          <li className="alert-item">Water conservation measures needed in Branch #1234</li>
          <li className="alert-item">Energy usage spike detected in Branch #5678</li>
          <li className="alert-item">Waste segregation improvement required in Branch #9101</li>
        </ul>
      </div>
    </div>
  );
};

export default MainDashboard;