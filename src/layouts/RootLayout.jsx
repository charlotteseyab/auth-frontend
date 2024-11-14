import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeroSection from "../pages/home/HeroSection";
// import About from "../pages/home/about";
import Footer from "../pages/home/footer";


const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <HeroSection />
            {/* <About /> */}
            <Footer />
        </div>
    );
};

export default RootLayout;