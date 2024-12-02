// ClientDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImg from '../../assets/img/welcome-img.svg';
// import Home from './home.jsx';
import { Toaster } from 'react-hot-toast';
import { useUser } from '../../hooks/user.js';

const ClientDashboard = () => {
  const [logoutLoading, setLogoutLoading] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useUser()
  const [activeSection, setActiveSection] = useState(
    localStorage.getItem('clientActiveSection') || 'home'
  );

  console.log("user in state-->", user)


  const handleRoleChange = () => {
    localStorage.setItem('userRole', 'admin');
  };

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);
      await logout()
      navigate('/');
    } catch (error) {
      console.log("Error logging out user:", error);
    } finally {
      setLogoutLoading(false)
    }

  };



  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="sm:w-1/5 bg-gradient-to-b from-blue-600 to-blue-800 bg-opacity-90 backdrop-blur-lg text-white flex flex-col p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome {user ? user.name : "User"}</h2>
        <button
          onClick={() => setActiveSection('home')}
          className={`py-2 px-4 text-left mb-3 hover:bg-blue-700 rounded-lg transition duration-300 transform hover:scale-105 ${activeSection === 'home' ? 'bg-blue-500' : ''
            }`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection('account')}
          className={`py-2 px-4 text-left mb-3 hover:bg-blue-700 rounded-lg transition duration-300 transform hover:scale-105 ${activeSection === 'account' ? 'bg-blue-500' : ''
            }`}
        >
          Account Settings
        </button>
        <button
          onClick={handleLogout}
          className="py-2 px-4 text-left mt-auto bg-red-600 hover:bg-red-700 rounded-lg transition duration-300 transform hover:scale-105"
        >
          {logoutLoading ? "Logging out..." : "Logout"}
        </button>
      </div>

      {/* Main Content */}
      <div className="sm:w-4/5 p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300">
          {activeSection === 'home' && (
            <img
              src={welcomeImg}
              alt="Client's Dashboard Image"
              className="rounded-lg mb-4 max-w-full shadow-md"
            />
          )}
          {/* {renderSection()} */}
        </div>
      </div>

      {/* Toaster Component */}
      <Toaster position="top-right" />
    </div>
  );
};

export default ClientDashboard;
