import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            Your cart is empty.
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead className="bg-teal-500 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left hidden sm:table-cell">
                      Image
                    </th>
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Total</th>
                    <th className="px-4 py-2 text-left hidden sm:table-cell">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-teal-50 transition duration-300"
                    >
                      <td className="px-4 py-2 hidden sm:table-cell">
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </td>
                      <td className="px-4 py-2">{item.title}</td>
                      <td className="px-4 py-2">${item.price}</td>
                      <td className="px-4 py-2">{item.quantity}</td>
                      <td className="px-4 py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-4 py-2 hidden sm:table-cell">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 transition duration-300"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* For small screens: Display cart items as cards */}
            <div className="sm:hidden space-y-4 mt-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-md p-4 shadow-sm bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-red-600 hover:text-red-800 transition duration-300 block text-right"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-xl font-semibold text-gray-900">
                  Total: ${totalPrice}
                </h2>
              </div>
              <div>
                <Link to="/checkout">
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
