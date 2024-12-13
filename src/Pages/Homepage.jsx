import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 9.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      category: "beauty",
      rating: 4.94,
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      category: "beauty",
      rating: 3.28,
    },
    {
      id: 3,
      title: "Powder Canister",
      price: 14.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      category: "beauty",
      rating: 3.82,
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      price: 79.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
      category: "fragrances",
      rating: 2.69,
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      price: 1899.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
      category: "furniture",
      rating: 4.14,
    },
    {
      id: 16,
      title: "Apple",
      price: 1.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
      category: "groceries",
      rating: 2.96,
    },
  ];

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // State for storing the logged-in username
  const [username, setUsername] = useState("");

  // Access addToCart function from CartContext
  const { addToCart } = useCart();

  // Handle Add to Cart button click
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setSuccessMessage("Product Added Successfully");

    // Automatically hide the message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000); // Message will disappear after 5 seconds
  };

  // Fetch the logged-in user from localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUsername(loggedInUser.username); // Assuming "username" is stored in loggedInUser
    }
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero and Login/Signup Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-32 px-4">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto max-w-screen-lg relative z-10 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Hero Section */}
          <div className="flex flex-col items-center justify-center lg:items-center text-center mb-12 lg:mb-0">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-shadow-md">
  Welcome <span className="text-red-700">{username ? username : "Guest"}</span> to ShopMate!
</h1>
            <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto">
              Discover amazing products curated just for you. Enjoy exclusive
              deals and an exceptional shopping experience.
            </p>
            <div className="flex justify-center items-center">
              <Link
                to="/products"
                className="bg-white text-center text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg transform hover:scale-105 no-underline"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Right Side: Sticky Login/Signup Section */}
          <div className="lg:w-1/3 bg-white bg-opacity-80 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center sticky top-32 md:top-1/3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              To unlock exclusive deals and more, please log in or sign up to
              begin your journey with ShopMate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center w-full">
              {/* Login Button */}
              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Login
              </Link>

              {/* Sign Up Button */}
              <Link
                to="/signup"
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        id="products"
        className="relative py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100"
      >
        {/* Success Message positioned at top-right under navbar */}
        {successMessage && (
          <div className="fixed top-20 right-4 bg-green-100 text-green-700 px-6 py-3 rounded-md shadow-xl text-sm font-medium z-50 transform scale-105 transition-all duration-300">
            {successMessage}
          </div>
        )}

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Check out some of our handpicked top-rated products, just for you!
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative group">
                  {/* Product Image with Hover Zoom */}
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-58 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Category: {product.category}
                  </p>
                  <p className="text-gray-500 mt-2">
                    Rating: {product.rating} ⭐
                  </p>
                  <p className="font-bold text-blue-600 mt-4">
                    ${product.price}
                  </p>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => handleAddToCart(product)} // Trigger Add to Cart
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
