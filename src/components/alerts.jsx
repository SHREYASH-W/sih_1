import React from 'react';
import { AlertTriangle } from 'lucide-react';
import './alerts.css';

const Alerts = () => {
  const alerts = [
    { id: 1, title: 'Water Usage Alert', description: 'Excessive water consumption detected in Sector 7.' },
    { id: 2, title: 'Waste Management Alert', description: 'Recycling targets not met in District 3.' },
    { id: 3, title: 'Air Quality Alert', description: 'PM2.5 levels exceeding limits in Industrial Zone.' },
  ];

  return (
    <div className="alerts-Container">
      <h1 className="alerts-header">Alerts Dashboard</h1>
      <div className="alerts-grid">
        {alerts.map((alert) => (
          <div key={alert.id} className="alert-card">
            <div className="alert-header">
              <AlertTriangle className="alert-icon" size={24} />
              <h2 className="alert-title">{alert.title}</h2>
            </div>
            <p className="alert-description">{alert.description}</p>
            <button className="action-button">Take Action</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;