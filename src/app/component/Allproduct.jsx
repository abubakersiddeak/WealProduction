"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

export default function Allproduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/Product?page=${page}&limit=8&sort=random`
        );
        if (!res.ok) {
          throw new Error("Product fetching failed from API in GET method");
        }
        const data = await res.json();
        setProducts(data.products || []);
        setTotalPages(Math.ceil(data.total / 8));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="relative p-4 mt-5">
      <h2 className="text-left text-4xl md:text-6xl lg:text-7xl font-serif mb-8">
        All Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg cursor-pointer bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ⬅ Prev
        </button>

        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold shadow">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 cursor-pointer rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
