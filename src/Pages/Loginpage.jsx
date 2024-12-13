// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setModalMessage('Login Successful!');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/'); // Redirect to homepage after 2 seconds
      }, 2000);
    } else {
      setModalMessage('Invalid email or password!');
      setShowModal(true);
    }
  };

  return (
    <div>
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-teal-50">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-teal-600">ShopMate</h1>
            <p className="text-lg text-gray-600">Welcome back! Please login to continue.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="/signup" className="text-teal-600 hover:text-teal-700 font-medium transition duration-300">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
