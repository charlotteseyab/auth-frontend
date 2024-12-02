import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Register from './pages/register/register'
// import Login from './pages/login'

import AdminDashboard from './pages/adminDashboard'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import AccountSettings from './pages/client-dashboard/AccountSettings';
import AdminHome from './pages/adminDashboard/adminHome';
import RootLayout from './layouts/RootLayout'
import Home from './pages/home'
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import ForgotPasswordPage from './pages/forgot-password';
import ClientDashboard from './pages/client-dashboard';

import ClientRoute from './routes/ClientRoute';
import AdminRoute from './routes/AdminRoute';


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
        {
          path: "/dashboard/client",
          element: (
            <ClientRoute >
              <ClientDashboard />
            </ClientRoute>
          ),
          children: [
            { path: "settings", element: <AccountSettings /> }
          ]
        },

        // Protected admin routes
        {
          path: "/dashboard/admin",
          element: (
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>

          ),
          children: [
            { index: true, element: <AdminHome /> }
          ]
        },

       
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


