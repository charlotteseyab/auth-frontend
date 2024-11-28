import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Get user data when component mounts
        try {
            const userData = localStorage.getItem('user');
            if (userData) {
                const parsedUser = JSON.parse(userData);
                setUserRole(parsedUser.role);
            }
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }, []);

    const handleReturn = () => {
        try {
            // Default to client dashboard if role is not found
            if (!userRole) {
                navigate('/clientdashboard');
                return;
            }

            // Navigate based on role
            if (userRole.toLowerCase() === 'admin') {
                navigate('/admindashboard');
            } else {
                navigate('/clientdashboard');
            }
        } catch (error) {
            console.error('Navigation error:', error);
            // Fallback navigation
            navigate('/clientdashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold text-red-600 mb-4">
                    Access Denied
                </h1>
                <p className="text-gray-600 mb-6">
                    You don't have permission to access this page.
                </p>
                <button
                    onClick={handleReturn}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Return to Dashboard
                </button>
            </div>
        </div>
    );
};

export default Unauthorized; 