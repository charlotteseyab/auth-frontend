import React from 'react';
import { Link } from 'react-router-dom'; 
import heroImg from '../../assets/img/hero-img.png';

const HeroSection = () => {
    return (
        <section
            className="bg-fit bg-black bg-center bg-no-repeat bg-fixed text-white h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImg})` }} 
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to MyApp
                </h1>
                <p className="text-lg mb-8">
                    Your journey starts here! Choose an option below to get started.
                </p>

                <div className="space-x-4">
                    <Link
                        to="/register"
                        className="inline-block bg-blue-800 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-900 transition-colors"
                    >
                        Register
                    </Link>
                    <Link
                        to="/login"
                        className="inline-block bg-transparent border-2 border-white text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
