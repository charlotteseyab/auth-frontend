import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterImg from '../../assets/img/register-img.svg';

const sendVerificationCode = async ({ email }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Verification code sent to ${email}`);
            resolve({ data: "Verification code sent" });
        }, 1000);
    });
};

const completeRegistration = async (formData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User registered with data:", formData);
            resolve({ data: "Registration successful" });
        }, 1000);
    });
};

const Register = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleInitialSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await sendVerificationCode({ email });
            setMessage("Verification code sent to your email.");
            setStep(2);
        } catch (error) {
            setMessage("Failed to send verification code.");
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const formData = { email, code, name, password };
        try {
            const { data } = await completeRegistration(formData);
            setMessage("Registration successful! Redirecting to your dashboard...");
            navigate('/clientDashboard');  // Redirects to the client dashboard
        } catch (error) {
            setMessage("Registration failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex overflow-hidden">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={RegisterImg} 
                        alt="Registration"
                        className="w-full h-full object-fit max-h-full"
                    />
                </div>
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register</h2>
                    {step === 1 ? (
                        <form onSubmit={handleInitialSubmit} className="space-y-4">
                            <div className="form-group">
                                <label className="block text-gray-700 font-medium mb-2">Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700 font-medium mb-2">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="test@example.com"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700 font-medium mb-2">Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="******"
                                    minLength="6"
                                    maxLength="64"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                            >
                                Send Verification Code
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleRegisterSubmit} className="space-y-4">
                            <div className="form-group">
                                <label className="block text-gray-700 font-medium mb-2">Verification Code:</label>
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="123456"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700 font-medium mb-2">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                            >
                                Complete Registration
                            </button>
                        </form>
                    )}
                    {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Register;
