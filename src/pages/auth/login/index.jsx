import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast'; // Import toast from react-hot-toast
import loginImg from '../../../assets/img/login-img.svg';
import { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';  // Add this import
import { apiLogin, } from '../../../services/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../../hooks/user';

// Mock function to simulate login API call


const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate
    const { user, refresh, userLoading } = useUser()

    const rolebasedRedirect = () => {

        if (user && user.roles.includes('admin')) {
            navigate('/dashboard/admin')
        } else if (user && user.roles.includes('client')) {
            navigate('/dashboard/client')
        }
    }

    useEffect(() => {
        rolebasedRedirect()

    }, [user])


    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const { data } = await apiLogin({ email, password });
            console.log("logged in user-->", data)


            // Show success alert
            await Swal.fire({
                title: 'Welcome Back!',
                text: 'Login successful',
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
                }
            });
            refresh()
            // Navigate based on role
            if (data.roles.includes('admin')) {
                navigate('/dashboard/admin');
            } else {
                navigate('/dashboard/client');
            }

        } catch (error) {
            setMessage(error.response?.data?.error || "Login failed");
            toast.error(error.response?.data?.error || "Login failed");
            console.log(error)
        } finally {
            setLoading(false)
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* {userLoading ? <p>Loading...</p> : */}
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
                                disabled={loading}
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
                                disabled={loading}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            />
                        </div>
                        <div className='flex flex-col gap-4 text-center'>  <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>
                            <button
                                disabled={loading}
                                onClick={() => window.location.href = 'https://auth-api-lovat.vercel.app/api/v1/auth/google'}
                                className="w-full bg-red-600 text-white p-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                            >Continue with Google</button>
                        </div>
                        <p className="text-sm text-center mt-4">
                            <Link to="/forgot-password" className="text-blue-500 hover:underline">
                                Forgot your password?
                            </Link>
                        </p>
                    </form>

                    {message && <p className="mt-4 text-center text-green-500">{message}</p>}

                </div>
            </div>
            <Toaster position="top-right" />
        </div>
    );
};

export default LoginPage;
