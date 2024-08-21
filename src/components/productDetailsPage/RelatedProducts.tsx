import React from "react";
import { ProductCard } from "../productcard/ProductCard";

export const RelatedProducts: React.FC<{ products: any[] }> = ({
  products,
}) => (
  <div className="mt-12">
    <h2 className="text-xl font-bold">Related Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);
