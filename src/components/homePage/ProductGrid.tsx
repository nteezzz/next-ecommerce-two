"use client";

import React from "react";
import { ProductCard } from "../productcard/ProductCard";
import { Button } from "../ui/button";

import { products } from "@/data/products";
import Link from "next/link";

export const ProductGrid: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
        Our Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
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
      <div className="text-center mt-6 sm:mt-8">
        <Link href={'/shop'}>
          <Button
            className="px-8 sm:px-12 md:px-16 text-[#B88E2F] border-[#B88E2F]"
            variant={"outline"}
          >
            Show More
          </Button>
        </Link>
      </div>
    </div>
  );
};
