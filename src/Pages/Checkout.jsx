import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; // Assuming you have CartContext for managing cart state
import { Link } from "react-router-dom";
import Modal from "../Components/Modal"; // Import the Modal component

const Checkout = () => {
  const { cartItems, clearCart } = useCart(); // Assuming these values are from your CartContext
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Calculate total price dynamically based on cartItems
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate an API request
    setTimeout(() => {
      setShowModal(true); // Show the modal
      clearCart(); // Clear cart after order
      setIsSubmitting(false);
    }, 2000);
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Checkout</h1>

        {/* Cart Items */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">x{item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="mt-6 flex justify-between items-center">
                <span className="font-semibold text-lg">Total:</span>
                <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
              </div>
            </div>
          )}
        </div>

        {/* Shipping Information Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-semibold" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-600 font-semibold" htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-600 font-semibold" htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Confirm Order"}
              </button>
            </div>
          </form>
        </div>

        {/* Return to Products Button */}
        <div className="text-center">
          <Link to="/products">
            <button className="text-blue-600 hover:text-blue-800 font-semibold">
              &larr; Back to Products
            </button>
          </Link>
        </div>

        {/* Show Modal */}
        {showModal && (
          <Modal message="Order placed successfully!" onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
