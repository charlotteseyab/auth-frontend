import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminDashboard from './pages/adminDashboard'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import AccountSettings from './pages/client-dashboard/AccountSettings';
import AdminHome from './pages/adminDashboard/adminHome';
import RootLayout from './layouts/RootLayout'
import Home from './pages/home'
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import ForgotPassword from './pages/auth/forgot-password';
import ClientDashboard from './pages/client-dashboard';

import AdminRoute from './routes/AdminRoute';
import ClientDashboardLayout from './layouts/ClientDashboardLayout';
import ClientRoute from './routes/ClientRoute';
import AdminAccountSettings from './pages/adminDashboard/adminAccountSettings';
import AdminDashboardLayout from './layouts/AdminDashboardLayout';


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
        { path: "forgot-password", element: <ForgotPassword /> },
      ]
    },
    {
      path: "/dashboard/client",

      element: <ClientRoute><ClientDashboardLayout /></ClientRoute>,
      children: [
        { index: true, element: <ClientDashboard /> },
        { path: "settings", element: <AccountSettings /> }
      ]
    }, {
      path: "/dashboard/admin",
      element: (
        <AdminRoute>
          <AdminDashboardLayout />
        </AdminRoute>

      ),
      children: [
        { index: true, element: <AdminDashboard /> },
        {path: "settings", element: <AdminAccountSettings /> }
      ]
    },
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


