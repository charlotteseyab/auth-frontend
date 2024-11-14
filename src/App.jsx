import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/register'
import HeroSection from './pages/home/HeroSection'
import LoginPage from './pages/login'
import Home from './pages/home'
import ForgotPassword from './pages/forgot-password/forgot-password'
import ClientDashboardPage from './pages/clientDashboard'
import AdminDashboardPage from './pages/adminDashboard'
import { Toaster } from 'react-hot-toast'

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <RootLayout />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <Home />,
    //     },
    //     {
    //       path: "/login",
    //       element: <Login />,
    //     },
    //     {
    //       path: "/register",
    //       element: <RegisterPage />,
    //     },
    //     {
    //       path: "/profile",
    //       element: <Profile />,
    //     },
    //   ],
    // },

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/register",
      element: <RegisterPage/>
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword/>
    },
    {
      path: "/clientDashboard",
      element: <ClientDashboardPage/>
    },
    {
      path: "/adminDashboard",
      element: <AdminDashboardPage/>
    },

  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App