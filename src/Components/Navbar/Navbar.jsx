import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate is from React Router v6
import { useCart } from "../../Context/CartContext";
import HomePage from "../../Pages/Homepage";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Used to redirect after logout

  // Calculate the total number of items in the cart
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Function to handle logout
  const handleLogout = () => {
    // Remove user data from localStorage (or wherever you're storing it)
    localStorage.removeItem("user"); // Or use your own storage method
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-teal-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Redirect to Homepage when clicked */}
          <div
            onClick={HomePage}
            className="text-4xl text-gray-100 font-medium hover:text-blue-800 transition duration-300 no-underline"
          >
            ShopMate
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex justify-center items-center space-x-10">
            <Link
              to="/"
              className="text-xl text-gray-100 font-medium hover:text-blue-800 transition duration-300 no-underline"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-xl text-gray-100 font-medium hover:text-blue-800 transition duration-300 no-underline"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-xl text-gray-100 font-medium hover:text-blue-800 transition duration-300 no-underline"
            >
              About Us
            </Link>
            <Link
              to="/contactUs"
              className="text-xl text-gray-100 font-medium hover:text-blue-800 transition duration-300 no-underline"
            >
              Contact
            </Link>

            {/* Cart Link with Item Count */}
            <Link
              to="/cart"
              className="relative text-xl text-gray-100 font-medium hover:text-blue-800 transition duration-300 no-underline"
            >
              <span className="mr-2">Cart</span>
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount > 0 ? cartItemCount : null}
              </span>
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="text-xl text-gray-100 font-medium hover:text-blue-800 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Menu (Responsive) */}
        <div
          className={`md:hidden fixed top-0 right-0 w-30 h-90 bg-gray-400 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 px-6">
            <Link
              to="/"
              className="text-lg font-medium text-white px-6 py-3 no-underline"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-lg font-medium text-white px-6 py-3 no-underline"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-white px-6 py-3 no-underline"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
            >
              About Us
            </Link>
            <Link
              to="/contactUs"
              className="text-lg font-medium text-white px-6 py-3 no-underline"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
            >
              Contact
            </Link>

            {/* Cart Link with Item Count */}
            <Link
              to="/cart"
              className="relative text-lg font-medium text-white px-6 py-3 no-underline"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
            >
              <span className="mr-2">Cart</span>
              <span className="absolute top-0 right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount > 0 ? cartItemCount : null}
              </span>
            </Link>

            {/* Mobile Logout Button */}
            <button
              onClick={handleLogout}
              className="text-lg font-medium text-white px-6 py-3 no-underline"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
