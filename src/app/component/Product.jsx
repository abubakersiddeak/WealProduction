"use client";
import React, { useState } from "react";
import CartDrawer from "./CartDrawer";
import ImageGallery from "./Product/ImageGallery";
import ProductInfo from "./Product/ProductInfo";
import RelatedProducts from "./Product/RelatedProducts";

export default function Product({ product, relatedProducts }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddToCartSuccess = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div className="relative w-full max-w-[90vw] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <ImageGallery images={product.images || []} />
        <ProductInfo product={product} onAddToCartSuccess={handleAddToCartSuccess} />
      </div>

      {relatedProducts && relatedProducts.length > 0 && (
        <RelatedProducts relatedProducts={relatedProducts} />
      )}

      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}