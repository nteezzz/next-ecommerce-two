"use client";

import React from "react";
import { ProductCard } from "../productcard/ProductCard";
import Link from "next/link";
import { Button } from "../ui/button";
import { getProductDetails } from "@/utils/getProductDetails";// Adjust import based on your utils
import { Product } from "@/types/product"; // Adjust import based on your types

interface RelatedProductsProps {
  products: number[]; // Assuming you have an array of product IDs
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 text-left">
        {products.map((productId) => {
          const product = getProductDetails(productId);
          return product ? (
            <ProductCard 
            key={product.id} 
            id={product.id}
            imageSrc={product.images[0]}
            name={product.name}
            description={product.shortDescription}
            price={product.price}
            originalPrice={product.originalPrice}
            message={product.promotion} />
          ) : null;
        })}
        <Link href="/shop">
          <Button
            className="px-16 text-[#B88E2F] border-[#B88E2F]"
            variant={"outline"}
          >
            Show More
          </Button>
        </Link>
      </div>
    </div>
  );
};
