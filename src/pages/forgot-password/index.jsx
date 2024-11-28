import React from 'react'
import ForgotPassword from './forgot-password';
import Navbar from '../../components/NavBar';
import Footer from '../home/footer';

const ForgotPasswordPage = () => {
  return (
    <div>
      <Navbar />
      <ForgotPassword />
      {/* <Footer /> */}
    </div>
  )
}

export default ForgotPasswordPage;