"use client";

import React from "react";
import { ProductCard } from "../productcard/ProductCard";
import { Button } from "../ui/button";

import { products } from "@/data/products";

export const ProductGridFilters: React.FC = () => {
  return (
    <div className="py-12 px-16"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            name={product.name}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
            message={product.message}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button className="bg-[#B88E2F] px-16 hover:bg-[#a87b1b]">See More</Button>
      </div>
    </div>
  );
};
