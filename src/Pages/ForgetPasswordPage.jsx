import React, { useState } from "react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset requested for", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-teal-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-600">ShopMate</h1>
          <p className="text-lg text-gray-600">Reset Your Password</p>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Enter your email address below and we will send you instructions to reset your password.
        </p>

        <form onSubmit={handlePasswordReset}>
          <div className="mb-4">
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

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Remember your password?{" "}
            <a href="/login" className="text-teal-600 hover:text-teal-700 font-medium transition duration-300">
              Login here
            </a>
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            By requesting a password reset, you agree to our{" "}
            <a href="/terms" className="text-teal-600 hover:text-teal-700 font-medium transition duration-300">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="/privacypolicy" className="text-teal-600 hover:text-teal-700 font-medium transition duration-300">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
