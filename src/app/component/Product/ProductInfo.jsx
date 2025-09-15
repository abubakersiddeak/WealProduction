"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/cartContext";

export default function ProductInfo({ product, onAddToCartSuccess }) {
  const { addToCart } = useCart();
  const [buttonText, setButtonText] = useState("ADD TO CART");
  const [instock, setInstock] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const {
    name,
    description,
    category,
    salePrice,
    brand,
    sizes = [],
    colors = [],
  } = product;

  const [selectedSize, setSelectedSize] = useState(
    sizes.length > 0 ? sizes[0] : null
  );

  useEffect(() => {
    const totalQuantity = sizes.reduce((sum, s) => sum + s.quantity, 0);
    setInstock(totalQuantity > 0);

    if (sizes.length > 0 && !selectedSize) {
      setSelectedSize(sizes.find((s) => s.quantity > 0) || sizes[0]);
    }
  }, [sizes, selectedSize]);

  const handleAddToCart = async () => {
    try {
      if (!selectedSize) {
        console.error("Please select a size before adding to cart.");
        return;
      }

      addToCart(product, quantity, selectedSize);
      setButtonText("SUCCESS");
      if (onAddToCartSuccess) {
        onAddToCartSuccess();
      }

      setTimeout(() => {
        setButtonText("ADD TO CART");
      }, 1000);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="mt-4 md:mt-4 space-y-4">
      <h1 className="text-2xl sm:text-2xl font-extrabold text-gray-900 mb-2">
        {name}
      </h1>
      <p className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
        TK. {salePrice?.toLocaleString() || "0.00"}
      </p>

      {description && (
        <div className="space-y-1 text-sm text-gray-700">
          <p className="font-semibold">DESCRIPTION</p>
          <p>{description}</p>
        </div>
      )}

      {brand && <p className="text-sm text-gray-600">Brand: {brand}</p>}
      {category && (
        <p className="text-sm text-gray-600">
          Category: {category.gender} {category.type}
        </p>
      )}
      {colors.length > 0 && (
        <p className="text-sm text-gray-600">
          Colour:{" "}
          {colors.map((c, index) => (
            <span key={index} className="text-sm text-gray-600">
              {`${c}${index < colors.length - 1 ? ", " : ""}`}
            </span>
          ))}
        </p>
      )}

      <p
        className={`font-semibold ${
          instock ? "text-green-600" : "text-red-600"
        }`}
      >
        Availability: {instock ? "In Stock " : "Out of Stock "}
      </p>

      <div className="mt-6 space-y-4">
        {sizes.length > 0 && (
          <div>
            <label htmlFor="size" className="block text-sm font-medium mb-1">
              SIZE
            </label>
            <select
              id="size"
              value={selectedSize ? selectedSize.size : ""}
              onChange={(e) => {
                const foundSize = sizes.find((s) => s.size === e.target.value);
                setSelectedSize(foundSize);
              }}
              className="cursor-pointer block w-full max-w-xs p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
            >
              {sizes.map((size, i) => (
                <option
                  key={size.size}
                  value={size.size}
                  disabled={size.quantity === 0}
                >
                  {size.size} {size.quantity === 0 ? "(Out of Stock)" : ""}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-32">
          <button
            onClick={decreaseQuantity}
            className="cursor-pointer px-3 py-2 text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="cursor-pointer w-full text-center border-x border-gray-300 py-2 outline-none"
          />
          <button
            onClick={increaseQuantity}
            className="cursor-pointer px-3 py-2 text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            +
          </button>
        </div>

        {instock ? (
          <button
            onClick={handleAddToCart}
            className={`cursor-pointer w-full px-6 py-3 rounded-md text-lg font-semibold transition-all duration-300 ${
              buttonText === "SUCCESS"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-black hover:bg-gray-800"
            } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
          >
            {buttonText}
          </button>
        ) : (
          <button className="bg-gray-500 cursor-not-allowed text-white px-6 py-2 rounded mt-4">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
}
