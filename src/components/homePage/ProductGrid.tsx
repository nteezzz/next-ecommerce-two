"use client";

import React from "react";
import { ProductCard } from "../productcard/ProductCard";
import { Button } from "../ui/button";

import { products } from "@/data/products";
import Link from "next/link";

export const ProductGrid: React.FC = () => {
  return (
    <div className="py-12 px-16">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Our Products
      </h2>
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
