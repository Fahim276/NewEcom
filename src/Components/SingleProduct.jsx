import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // Import useCart hook

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Access addToCart function from CartContext
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setSuccessMessage("Product Added Successfully"); // Show success message

    // Automatically hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain hover:scale-105 transition duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-lg text-gray-700">{product.description}</p>

              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  <strong className="font-semibold">Category:</strong> {product.category}
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="font-semibold">Brand:</strong> {product.brand}
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="font-semibold">SKU:</strong> {product.sku}
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="font-semibold">Weight:</strong> {product.weight}g
                </p>
                {product.dimensions && (
                  <p className="text-sm text-gray-600">
                    <strong className="font-semibold">Dimensions:</strong> {product.dimensions.width} x{" "}
                    {product.dimensions.height} x {product.dimensions.depth} mm
                  </p>
                )}
                <p className="text-sm text-gray-600">
                  <strong className="font-semibold">Warranty:</strong> {product.warrantyInformation}
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="font-semibold">Shipping:</strong> {product.shippingInformation}
                </p>
              </div>

              {/* Pricing and Rating */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <div className="flex items-center text-yellow-500">
                  <span className="text-lg font-semibold">⭐ {product.rating} / 5</span>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-4">
                <span
                  className={`text-sm font-semibold ${
                    product.stock < 10 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  Availability: {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-6">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
                  onClick={handleAddToCart} // Call the function on click
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="p-6 mt-8 bg-gray-50 border-t border-gray-200 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900">Tags</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-white bg-gray-600 py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="p-6 mt-8 bg-gray-50 border-t border-gray-200 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900">Customer Reviews</h2>
            <div className="mt-4 space-y-4">
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-800">{review.reviewerName}</span>
                    <span className="ml-2 text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">
                      {"⭐".repeat(review.rating)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Success Message */}
      {successMessage && (
  <div
    className="fixed top-20 md:top-24 right-5 md:right-10 bg-green-100 text-green-700 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md text-sm md:text-base font-medium z-50"
  >
    {successMessage}
  </div>
)}

    </div>
  );
};

export default SingleProduct;
