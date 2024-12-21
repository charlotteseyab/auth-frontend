// ClientDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImg from '../../assets/img/welcome-img.svg';
// import Home from './home.jsx';
import { Toaster } from 'react-hot-toast';
import { useUser } from '../../hooks/user.js';


const ClientDashboard = () => {
  

  const { user, logout } = useUser()
 

  console.log("user in state-->", user)



  return (
      <div className="sm:w-4/5 p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300">
          
            <img
              src={welcomeImg}
              alt="Client's Dashboard Image"
              className="rounded-lg mb-4 max-w-full shadow-md"
            />
         
         
        </div>
      </div>

   
  );
};

export default ClientDashboard;
