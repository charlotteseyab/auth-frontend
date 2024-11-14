import React from 'react';
import welcomeImg from '../../assets/img/welcome-img.svg';

const AdminHome = () => {
    return (
        <div className="p-10 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Admin Dashboard</h1>
            <p className="text-md text-gray-600 mb-8">
                Here, you can manage system settings, view user data, and oversee platform performance.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Main Content */}
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admin Overview</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Use the tools provided to navigate through administrative functionalities. Ensure to review user 
                        activities, analyze metrics, and update any necessary settings.
                    </p>
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">
                        Get Started
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <img 
                        src={welcomeImg} 
                        alt="Admin Dashboard Overview" 
                        className="w-full max-w-sm h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
