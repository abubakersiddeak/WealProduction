"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/dynamic/${product._id}`} key={product._id}>
      <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full">
        <div className="relative w-full" style={{ paddingBottom: "100%" }}>
          <Image
            src={product.images[0] || "/placeholder-product.jpg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-md  text-gray-500 mt-auto">
            TK {product.salePrice?.toLocaleString() || "0.00"}
          </p>
        </div>
      </div>
    </Link>
  );
}
