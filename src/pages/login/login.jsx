import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast from react-hot-toast
import loginImg from '../../assets/img/login-img.svg';

// Mock function to simulate login API call
const loginUser = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === "aaa") {
                resolve({ data: "Login successful" });
            } else {
                reject({ response: { data: { message: "Invalid email or password" } } });
            }
        }, 1000);
    });
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser({ email, password });
            setMessage("Login successful!");
            toast.success('Login successful!'); // Show success toast

            setTimeout(() => {
                navigate('/clientdashboard'); // Redirect to ClientDashboard on success
            }, 1000); // Optional delay to show success message
        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed");
            toast.error(error.response?.data?.message || "Login failed"); // Show error toast
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Side - Image */}
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${loginImg})` }}>
                    <div className="h-full flex items-center justify-center bg-black bg-opacity-30">
                        <h2 className="text-white text-4xl font-semibold">Welcome Back</h2>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Login</h2>
                    <form onSubmit={handleLoginSubmit} className="space-y-6">
                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-2">Verified Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your verified email"
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            />
                        </div>
                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-2">Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Login
                        </button>
                        <p className="text-sm text-center mt-4">
                            <Link to="/forgotPassword" className="text-blue-500 hover:underline">
                                Forgot your password?
                            </Link>
                        </p>
                    </form>
                    {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
