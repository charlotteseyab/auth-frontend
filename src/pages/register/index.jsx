import React from 'react'
import Register from './register';
import Navbar from '../../components/NavBar';
import Footer from '../home/footer';

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
        <Register />
        <Footer />
    </div>
  )
}

export default RegisterPage;