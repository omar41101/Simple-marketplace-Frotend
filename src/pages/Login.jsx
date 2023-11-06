import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setEmailError('');
        setPasswordError('');
        setLoginError('');

        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            });
            // Handle the response from the server
            console.log(response.data);

            if (response.data.user) {
                // Redirect or set authentication state in your app
                console.log('Login successful');
            }
        } catch (error) {
            if (error.response) {
                // Server responded with an error status (4xx or 5xx)
                const { data } = error.response;

                if (data.errors) {
                    setEmailError(data.errors.email || '');
                    setPasswordError(data.errors.password || '');
                } else if (data.error) {
                    setLoginError(data.error);
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
                <h2 className="text-2xl font-bold mb-4">Login</h2>
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
                <div className="text-red-600 text-sm mb-4">{loginError}</div>
                <Link to="/">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
                >
                    Login
                </button>
                </Link>
                <div className="flex align-super mt-5 text-gray-600 text-sm mb-2">
                    Don't have an account?
                </div>
                <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
            </form>
        </div>
    );
};

export default Login;
