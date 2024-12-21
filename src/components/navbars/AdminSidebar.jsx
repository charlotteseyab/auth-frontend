import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/user'
import { useLocation, useNavigate } from 'react-router-dom'

const links = [
    {
        name :'Home',
        path: '/dashboard/admin'
    },
    {
        name: 'Settings',
        path: '/dashboard/admin/settings'
    }
]



const AdminSidebar = () => {
 const {user, logout} = useUser();
 const {pathname} = useLocation();
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
        setLogoutLoading(false);
    }
 }

  return (
    <div className="h-screen bg-gray-900 text-white w-60 p-5 flex flex-col">
    <h2 className="text-2xl font-bold text-white-500 mb-8">Welcome {user ? user.name : "User"}</h2>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            className={`py-2 px-4 text-left mb-3 hover:bg-blue-700 rounded-lg transition duration-300 transform hover:scale-105 ${
              pathname === link.path ? 'bg-blue-500' : ''
            }`}
          >
            {link.name}
          </Link>
        );
      })}
       
        <button
            onClick={handleLogout} // Call handleLogout function on click
            className="cursor-pointer p-3 bg-red-600 rounded-md hover:bg-red-700"
        >
           {logoutLoading ? 'Logging out...' : 'Logout'}
        </button>
   
</div>

  )
}

export default AdminSidebar

