import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeroSection from "../pages/home/HeroSection";
// import About from "../pages/home/about";
import Footer from "../pages/home/footer";
import Navbar from "../components/NavBar";


const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;