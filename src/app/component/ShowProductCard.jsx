"use client";
import React from "react";
import ProductCard from "./ProductCard";

export default function ShowProductCard({ products, id }) {
  const catagory = id;

  return (
    <div className="relative p-2">
      <h2 className="text-2xl xl:p-4 xl:text-6xl font-serif">{catagory}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}