import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
// import Register from './pages/register/register'
// import Login from './pages/login'
import ForgotPassword from './pages/forgot-password'

import AdminDashboard from './pages/adminDashboard'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Unauthorized from './routes/Unauthorized';
import AccountSettings from './pages/clientDashboard/accountSettings';
import Footer from './pages/home/footer';
import AdminHome from './pages/adminDashboard/adminHome';
import Navbar from './components/NavBar';
import { Children } from 'react';
import RootLayout from './layouts/RootLayout'
import Home from './pages/home'
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import ForgotPasswordPage from './pages/forgot-password';
// import ClientDashboardPage from './pages/clientDashboard/ClientDashboard';
// import ClientDashboard from './pages/clientDashboard/ClientDashboard';
// Import About if you have it
// import About from './pages/home/About';
import { useEffect, useState } from 'react';
import { apiCurrentUser } from './services/auth';


// Custom toast configurations
const authToastConfig = {
  success: {
    style: {
      background: '#4caf50',
      color: 'white',
    },
  },
  error: {
    style: {
      background: '#f44336',
      color: 'white',
    },
  },
};

// Global SweetAlert2 customization
const swalCustom = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success px-4',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false,
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
});

// Replace Swal with your custom version
window.Swal = swalCustom;



function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // check and get the currently logged in user

  const fetchCurrentUser = async ()=>{
    const res = await apiCurrentUser()
    console.log("Current user----->", res.data)
  }
  useEffect(() => {
    fetchCurrentUser()
  }, [])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "forgot-password", element: <ForgotPasswordPage /> },
        
        // Protected client routes
        // {
        //   path: "/dashboard/client",
        //   element: (
        //     // <ProtectedRoute allowedRoles={['client', 'admin']}>
        //   <ClientDashboard />
        //     // </ProtectedRoute>
        //   ),
        //   children: [
        //     { path: "settings", element: <AccountSettings /> }
        //   ]
        // },

        // Protected admin routes
        {
          path: "admindashboard",
          element: (
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <AdminHome /> }
          ]
        },

        // Utility routes
        { path: "unauthorized", element: <Unauthorized /> },
        // { path: "*", element: <Navigate to="/" /> }
      ]
    }
  ]);

  return (
    <>
      <Toaster position="top-right" />
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App


