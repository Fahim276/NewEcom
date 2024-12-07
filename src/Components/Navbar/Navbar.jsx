import React, { useState } from "react";

const Navbar = () => {
  // State for cart item count
  const [cartCount, setCartCount] = useState(0);

  // Simulate adding to cart
  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">ShopMate</div>

          {/* Links */}
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <a href="#" className="hover:text-gray-900">
              Products
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <button
              onClick={addToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
            <div className="relative">
              <button className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600 hover:text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.857 8.571a2 2 0 001.986 1.829h9.314a2 2 0 001.986-1.829L19 3M7 13a3 3 0 106 0M13 16h1m-4 0h1m1 0v3m0-3h1m-2 0H7"
                  />
                </svg>
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
