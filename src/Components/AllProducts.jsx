import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  console.log(products);

  return (
    <>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <h1>All Products</h1>

        {/* Products Card Show */}
        {products.map((product) => (
          <div >
          <img
            src={product.image}
            alt="Product"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
            <h4>{product.category}</h4>
            <p className="text-sm text-gray-600 mt-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              <span>Rating: {product.rating.rate} ({product.rating.count})</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to={`/products/${product.id}`}>Product Details</Link>
            </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
