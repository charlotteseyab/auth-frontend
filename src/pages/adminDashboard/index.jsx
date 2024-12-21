import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import AdminHome from './adminHome'; // Make sure the path is correct for your project setup
import AdminAccountSettings from './adminAccountSettings';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleLogout = () => {
        // Perform logout actions (e.g., clear session, token, etc.)
        navigate('/'); // Redirect to login page
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Home':
                return <AdminHome />; // Render AdminHome component here
            case 'AccountSettings':
                return <AdminAccountSettings />;
            case 'Logout':
                return <div className="p-8">You are now logged out.</div>;
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen">

<div className="sm:w-4/5 p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300">
         <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        </div>
      </div>
        </div>
    );
};

export default AdminDashboard;
