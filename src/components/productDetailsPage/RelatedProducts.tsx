"use client";
import React from "react";
import { ProductCard } from "../productcard/ProductCard";
import Link from "next/link";
import { Button } from "../ui/button";

export const RelatedProducts: React.FC<{ products: any[] }> = ({
  products,
}) => (
  <div className="mt-12">
    <h2 className="text-xl font-bold">Related Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 text-left">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
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
