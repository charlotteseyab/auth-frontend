import React, { useState } from 'react';

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
                    <a href="/">MyApp</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-white hover:text-blue-200">Home</a>
                    <a href="/about" className="text-white hover:text-blue-200">About</a>
                    <a href="/services" className="text-white hover:text-blue-200">Services</a>
                    <a href="/contact" className="text-white hover:text-blue-200">Contact</a>
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
                    <a href="/" className="block px-4 py-2 hover:bg-blue-800">Home</a>
                    <a href="/about" className="block px-4 py-2 hover:bg-blue-800">About</a>
                    <a href="/services" className="block px-4 py-2 hover:bg-blue-800">Services</a>
                    <a href="/contact" className="block px-4 py-2 hover:bg-blue-800">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
