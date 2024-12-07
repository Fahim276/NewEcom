import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const SingleProduct = () => {

    const [singleProduct, setSingleProduct] = useState([]);
    const {id} = useParams();

    // Single Product Show
    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setSingleProduct(res.data));
    }, []);

    console.log(singleProduct);

  return (
    <>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative">
          <img
            src={singleProduct.image}
            alt="Product"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
            Sale
          </span>
        </div>

        {/* Product Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {singleProduct.title}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {singleProduct.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>✔ Feature 1: High-quality material</li>
              <li>✔ Feature 2: Durable and long-lasting</li>
              <li>✔ Feature 3: Lightweight design</li>
            </ul>
          </div>
          <div className="mt-6">
            <span className="text-xl font-bold text-gray-900">${singleProduct.price}</span>
            <div className="mt-4">
              <button className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleProduct