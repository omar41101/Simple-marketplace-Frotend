import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        try {
            const response = await axios.post('http://localhost:3001/signup', {
                email,
                password,
                confirmPassword,
            });
            // Handle the response from the server
            console.log(response.data);

            if (response.data.user) {
                // Display a success toast notification
                toast.success('Sign Up successful', {
                    position: 'top-left',
                    autoClose: 2000,
                    hideProgressBar: false,
                    newestOnTop: false,
                    closeOnClick: true,
                    rtl: false,
                    pauseOnFocusLoss: true,
                    draggable: true,
                    pauseOnHover: true,
                    theme: 'dark',
                });

                // You can also redirect or set authentication state in your app here
                console.log('Sign Up successful');
            }
        } catch (error) {
            if (error.response) {
                // Server responded with an error status (4xx or 5xx)
                const { data } = error.response;

                if (data.errors) {
                    setEmailError(data.errors.email || '');
                    setPasswordError(data.errors.password || '');
                    setConfirmPasswordError(data.errors.confirmPassword || '');
                }
            } else {
                // An error occurred in making the request (e.g., network error)
                console.error('Network error:', error.message);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md border-gray-300"
                    />
                    <div className="text-red-600 text-sm">{emailError}</div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md border-gray-300"
                    />
                    <div className="text-red-600 text-sm">{passwordError}</div>
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md border-gray-300"
                    />
                    <div className="text-red-600 text-sm">{confirmPasswordError}</div>
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
                    >
                        Sign Up
                    </button>
                    <Link to="/login">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md">
                        Log In
                    </button>
                    </Link>
                </div>
            </form>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Signup;
