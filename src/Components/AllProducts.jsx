import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch all products and categories on component mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);

        // Extract unique categories from the product data
        const uniqueCategories = [
          ...new Set(res.data.products.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  // Handle category selection change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "") {
      setFilteredProducts(products); // Show all products if no category is selected
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered); // Filter products by selected category
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
            All Products
          </h1>
          {/* Dropdown for category selection */}
          <select
  onChange={handleCategoryChange}
  value={selectedCategory}
  className="bg-white border border-gray-300 rounded-md p-2 text-gray-700 shadow-sm w-full sm:w-auto text-sm sm:text-base"
>
  <option value="">Filter by Category</option>
  {categories.map((category, index) => (
    <option key={index} value={category} className="text-sm sm:text-base">
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </option>
  ))}
</select>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-green-100 border border-gray-300 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              {/* Fixed image container with consistent sizing */}
              <div className="h-45 w-full bg-gray-200 overflow-hidden rounded-t-lg">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2 space-y-2  ">
                <h3 className="text-2xl font-semibold text-center text-gray-800 hover:text-blue-500 transition duration-200 h-16 flex items-start justify-center">
                  <span className="line-clamp-2 break-words">
                    {product.title}
                  </span>
                </h3>

                <p className="text-m text-gray-600 flex justify-center">
                  Category:{" "}
                  <span className="capitalize text-blue-600 no-underline">
                    {product.category}
                  </span>
                </p>
                 <p className="text-m-bold text-black flex justify-center">
                  <span>SKU : - </span>
                  {product.sku}
                </p> 
                <div className="flex justify-between items-left">
                  <span className="text-3xl font-bold text-gray-900 hover:text-red-600">
                    ${product.price}
                  </span>
                  <div>
                    <p className="text-xl font-bold text-black-500 flex items-right">
                      <span>⭐</span> {product.rating} / 5
                    </p>
                  </div>
                </div>
                {/* Centered button */}
                <div className="flex justify-center">
                  <button className="bg-blue-500 text-white font-bold px-6 py-2 mt-4 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                    <Link
                      to={`/products/${product.id}`}
                      className="no-underline  text-white font-bold"
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
