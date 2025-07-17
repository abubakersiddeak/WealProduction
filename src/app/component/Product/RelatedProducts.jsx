"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/cartContext';

export default function RelatedProducts({ relatedProducts }) {
  const { addToCart } = useCart();

  return (
    <div className="w-full max-w-[90vw] mx-auto p-4 mt-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        You Might Also Like:
      </h3>
      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-6
        max-h-[600px]
        overflow-y-auto
        pr-2
      "
      >
        {relatedProducts.map((relProduct) => (
          <div
            key={relProduct._id?.$oid || relProduct._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <Link
              href={`/dynamic/${relProduct._id?.$oid || relProduct._id}`}
              className="block"
            >
              <Image
                src={relProduct.images[0] || "/placeholder-product.jpg"}
                alt={relProduct.name}
                width={500}
                height={500}
                unoptimized
                className="w-full h-48 object-cover object-center transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="font-semibold text-lg text-gray-900 mb-2 leading-tight">
                <Link
                  href={`/dynamic/${relProduct._id?.$oid || relProduct._id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {relProduct.name}
                </Link>
              </h4>
              <p className="text-md font-bold text-gray-800 mb-4">
                TK. {relProduct.salePrice}
              </p>
              {relProduct.inStock ? (
                <button
                  onClick={() => {
                    addToCart(
                      relProduct,
                      1,
                      relProduct.sizes && relProduct.sizes.length > 0
                        ? relProduct.sizes.find((s) => s.quantity > 0) ||
                            relProduct.sizes[0]
                        : { size: "Regular Size", quantity: 0 }
                    );
                  }}
                  className="mt-auto bg-black cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                >
                  Add to Cart
                </button>
              ) : (
                <button className="mt-auto bg-gray-600 cursor-not-allowed text-white px-4 py-2 rounded-md">
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
