"use client";
import React from "react";
import ProductsBanner from "@/components/productsPage/ProductsBanner";
import FooterBanner from "@/components/footer/FooterBanner";
import CompareSection from "@/components/compare/CompareSection";
import { CompareTable } from "@/components/compare/CompareTable";
import { products } from "@/data/products";
import { getProductDetails } from "@/utils/getProductDetails";
import { useParams } from "next/navigation";

export default function ComparePage() {
  const { id } = useParams();  
  const productId = id ? parseInt(id as string, 10) : 0;
  const selectedProduct = getProductDetails(productId);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }


  return (
    <div>
      <ProductsBanner />
      <CompareTable selectedProduct={selectedProduct} products={products} />
      <FooterBanner />
    </div>
  );
}
