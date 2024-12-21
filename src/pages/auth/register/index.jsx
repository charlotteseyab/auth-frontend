import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterImg from '../../../assets/img/register-img.svg';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { apiSignupComplete, apiSignupStart } from '../../../services/auth';
import { useUser } from '../../../hooks/user';



const Register = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [step, setStep] = useState(1);
    const [formError, setFormError] = useState('');
    const navigate = useNavigate();
    const { refresh } = useUser()

    const handleInitialSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const { data } = await apiSignupStart({ email, password, name });
            console.log("API response:", data);
            setMessage("Verification code sent to your email.");
            setStep(2);
        } catch (error) {
            setMessage("Failed to send verification code.");
        } finally {
            setLoading(false)
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            const { data } = await apiSignupComplete({
                email,
                verificationCode: code
            });
            console.log("new user-->", data)
            await Swal.fire({
                title: 'Registration Successful!',
                text: 'Welcome to our platform',
                icon: 'success',
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                willClose: () => {
                    return new Promise(resolve => setTimeout(resolve, 200));
                }
            });
            await refresh()
            navigate('/dashboard/client');

        } catch (error) {
            setFormError(error.response?.data?.error || "Registration failed");
            toast.error(error.response?.data?.error || "Registration failed");
        } finally {
            setLoading(false)
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
                                    disabled={loading}

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
                                    disabled={loading}

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
                                    disabled={loading}

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
                                disabled={loading}

                                type="submit"
                                className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                            >
                                {loading ? "Sending Verification Code..." : " Send Verification Code"}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleRegisterSubmit} className="space-y-4">
                            <div className="form-group">
                                <label className="block text-gray-700 font-medium mb-2">Verification Code:</label>
                                <input
                                    disabled={loading}

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
                                    disabled={loading}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                disabled={loading}

                                type="submit"
                                className="w-full bg-blue-600 text-white p-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                            >
                                Complete Registration
                            </button>
                        </form>
                    )}
                    {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                    {formError && <p className="mt-4 text-center text-red-500">{formError}</p>}
                </div>
            </div>
        </div>
    );
};

export default Register;
