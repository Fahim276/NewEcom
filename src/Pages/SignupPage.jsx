// SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Components/Modal';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setModalMessage('Passwords do not match!');
      setShowModal(true);
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { username, email, password };

    // Save new user to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setModalMessage('Signup Successful!');
    setShowModal(true);

    // Redirect to login page after success
    setTimeout(() => {
      setShowModal(false);
      navigate('/login');
    }, 2000);
  };

  return (
    <div>
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-teal-50">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-teal-600">ShopMate</h1>
            <p className="text-lg text-gray-600">Create your account to start shopping with us.</p>
          </div>

          <form onSubmit={handleSignup}>
            <div className="mb-6">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Choose a username"
              />
            </div>

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
                placeholder="Create a password"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <a href="/login" className="text-teal-600 hover:text-teal-700 font-medium transition duration-300">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
