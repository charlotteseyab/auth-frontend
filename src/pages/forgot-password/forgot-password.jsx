import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    // Dummy sendResetCode function to simulate API response
    const sendResetCode = async (email) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "test@example.com") {
                    resolve();
                } else {
                    reject(new Error("Error sending reset code."));
                }
            }, 1000); // Simulate delay
        });
    };

    // Dummy resetPassword function to simulate API response
    const resetPassword = async ({ email, code, newPassword }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "test@example.com" && code === "123456" && newPassword) {
                    resolve();
                } else {
                    reject(new Error("Password reset failed"));
                }
            }, 1000); // Simulate delay
        });
    };

    const handleSendCode = async (e) => {
        e.preventDefault();
        try {
            await sendResetCode(email);
            setMessage('Reset code sent to your email.');
            setTimeout(() => {
                setMessage('');
                setStep(2);
            }, 2000);
        } catch (error) {
            setMessage('Error sending reset code.');
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await resetPassword({ email, code, newPassword });
            
            // Show success SweetAlert with confirmation button
            const result = await Swal.fire({
                title: 'Password Reset Successful!',
                text: 'Your password has been changed successfully',
                icon: 'success',
                confirmButtonText: 'Continue to Login',
                confirmButtonColor: '#3B82F6', // Tailwind blue-600
                allowOutsideClick: false,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });

            // Only navigate if the confirm button was clicked
            if (result.isConfirmed) {
                navigate('/login');
            }
            
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    {step === 1 ? 'Forgot Password' : 'Reset Password'}
                </h2>
                {step === 1 ? (
                    <form onSubmit={handleSendCode} className="space-y-4">
                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-2">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Send Reset Code
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-2">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-2">Reset Code:</label>
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Enter the code sent to your email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="form-group">
                            <label className="block text-gray-700 font-medium mb-2">New Password:</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter your new password"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Reset Password
                        </button>
                    </form>
                )}
                {message && <p className="mt-4 text-center text-green-500">{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;
