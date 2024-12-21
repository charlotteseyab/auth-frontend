import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/home/footer";
import Navbar from "../components/navbars/NavBar";


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