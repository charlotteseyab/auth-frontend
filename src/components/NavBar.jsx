import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo / Branding */}
                <div className="text-white text-lg font-bold">
                    <Link to="/">MyApp</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {/* <a href="/" className="text-white hover:text-blue-200">Home</a> */}
                    <Link to="/about" className="text-white hover:text-blue-200">About</Link>
                    <Link to="/services" className="text-white hover:text-blue-200">Services</Link>
                    <Link to="/contact" className="text-white hover:text-blue-200">Contact</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMobileMenu}
                    className="text-white md:hidden focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-700 text-white py-4">
                    <Link to="/" className="block px-4 py-2 hover:bg-blue-800">Home</Link>
                    <Link to="/about" className="block px-4 py-2 hover:bg-blue-800">About</Link>
                    <Link to="/services" className="block px-4 py-2 hover:bg-blue-800">Services</Link>
                    <Link to="/contact" className="block px-4 py-2 hover:bg-blue-800">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
