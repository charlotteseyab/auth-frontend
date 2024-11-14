// ClientDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImg from '../../assets/img/welcome-img.svg';
import Home from './home.jsx';
import AccountSettings from './accountSettings.jsx';

const ClientDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(
    localStorage.getItem('clientActiveSection') || 'home'
  );

  useEffect(() => {
    if (!localStorage.getItem('clientActiveSection')) {
      localStorage.setItem('clientActiveSection', 'home'); // Default to 'home' if not set
    }
  }, []);

  useEffect(() => {
    const checkRole = setInterval(() => {
      const storedRole = localStorage.getItem('userRole');
      if (storedRole === 'admin') {
        clearInterval(checkRole);
        navigate('/adminDashboard');
      }
    }, 1000);

    return () => clearInterval(checkRole);
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem('clientActiveSection', activeSection);
  }, [activeSection]);

  const handleRoleChange = () => {
    localStorage.setItem('userRole', 'admin');
  };

  const handleLogout = () => {
    localStorage.removeItem('clientActiveSection');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'account':
        return <AccountSettings onRoleChange={handleRoleChange} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="sm:w-1/4 bg-blue-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-semibold mb-6">Client Dashboard</h2>
        <button
          onClick={() => setActiveSection('home')}
          className={`py-3 px-4 text-left mb-4 hover:bg-gray-700 rounded ${
            activeSection === 'home' ? 'bg-blue-600' : ''
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection('account')}
          className={`py-3 px-4 text-left mb-4 hover:bg-gray-700 rounded ${
            activeSection === 'account' ? 'bg-blue-600' : ''
          }`}
        >
          Account Settings
        </button>
        <button
          onClick={handleLogout}
          className="py-3 px-4 text-left mt-auto bg-red-600 hover:bg-red-700 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="sm:w-3/4 p-6">
        <h1 className="text-3xl font-semibold mb-6">Welcome to Your Client Dashboard</h1>
        <div className="bg-white p-6 shadow-md rounded-lg">
          {activeSection === 'home' && (
            <img
              src={welcomeImg}
              alt="Client's Dashboard Image"
              className="rounded-lg mb-4 max-w-full"
            />
          )}
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
