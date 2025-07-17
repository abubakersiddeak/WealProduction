import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import Product from "@/app/component/Product";
import React from "react";

async function getProduct(productId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${productId}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

async function getRelatedProducts(category) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/relatedProduct?category=${category}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function ProductPage({ params }) {
  const { productId } = params;
  const product = await getProduct(productId);
  let relatedProducts = [];

  if (product && product.category && product.category.scollection) {
    relatedProducts = await getRelatedProducts(product.category.scollection);
  }

  return (
    <>
      <Navbar />
      <Product product={product} relatedProducts={relatedProducts} />
      <Footer />
    </>
  );
}
