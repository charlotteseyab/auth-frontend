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
            {/* Sidebar */}
            <div className="h-screen bg-gray-900 text-white w-60 p-5 flex flex-col">
                <h2 className="text-2xl font-bold text-white-500 mb-8">Admin Dashboard</h2>
                <ul className="space-y-4">
                    <li
                        onClick={() => handleTabClick('Home')}
                        className={`cursor-pointer p-3 rounded-md ${
                            activeTab === 'Home' ? 'bg-yellow-500' : 'bg-gray-800'
                        } hover:bg-yellow-600`}
                    >
                        Home
                    </li>
                    <li
                        onClick={() => handleTabClick('AccountSettings')}
                        className={`cursor-pointer p-3 rounded-md ${
                            activeTab === 'AccountSettings' ? 'bg-yellow-500' : 'bg-gray-800'
                        } hover:bg-yellow-600`}
                    >
                        Account Settings
                    </li>
                    <li
                        onClick={handleLogout} // Call handleLogout function on click
                        className="cursor-pointer p-3 bg-red-600 rounded-md hover:bg-red-700"
                    >
                        Logout
                    </li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-100 p-5">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
