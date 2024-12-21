import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useUser } from '../../hooks/user';

const links = [
    {
        name: 'Home',
        path: '/dashboard/client',
    },
    {
        name: 'Settings',
        path: '/dashboard/client/settings',
    }
]
const ClientSidebar = () => {
    const { user, logout } = useUser();
    const { pathname } = useLocation();
    const [logoutLoading, setLogoutLoading] = useState(false);
    const navigate = useNavigate();
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
        <div className="sm:w-1/5 bg-gradient-to-b from-blue-600 to-blue-800 bg-opacity-90 backdrop-blur-lg text-white flex flex-col p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome {user ? user.name : "User"}</h2>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        to={link.path}
                        className={`py-2 px-4 text-left mb-3 hover:bg-blue-700 rounded-lg transition duration-300 transform hover:scale-105 ${pathname === link.path ? 'bg-blue-500' : ''
                            }`}
                    >
                        {link.name}
                    </Link>
                )
            })}
            <button
                onClick={handleLogout}
                className="py-2 px-4 text-left mt-auto bg-red-600 hover:bg-red-700 rounded-lg transition duration-300 transform hover:scale-105"
            >
                {logoutLoading ? "Logging out..." : "Logout"}
            </button>
        </div>
    )
}

export default ClientSidebar