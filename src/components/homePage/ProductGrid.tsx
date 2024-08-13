"use client";

import React from "react";
import { ProductCard } from "../productcard/ProductCard";
import { Button } from "../ui/button";

const products = [
  {
    imageSrc: "/assets/image 1.png",
    name: "Slytherin",
    description: "Stylish Cafe Chair",
    price: "$40",
    originalPrice: "$50",
    message: "20%",
  },
  {
    imageSrc: "/assets/image 2.png",
    name: "Leviosa",
    description: "Stylish Cafe Chair",
    price: "$80",
    originalPrice: "$100",
    message: "20%",
  },
  {
    imageSrc: "/assets/image 3.png",
    name: "Gryffindor",
    description: "Elegant Dining Chair",
    price: "$120",
    originalPrice: "$150",
    message: "20%",
  },
  {
    imageSrc: "/assets/image 4.png",
    name: "Hufflepuff",
    description: "Comfortable Lounge Chair",
    price: "$70",
    originalPrice: "$90",
    message: "22%",
  },
  {
    imageSrc: "/assets/image 5.png",
    name: "Ravenclaw",
    description: "Modern Office Chair",
    price: "$110",
    originalPrice: "$140",
    message: "21%",
  },
  {
    imageSrc: "/assets/image 6.png",
    name: "Weasley",
    description: "Vintage Armchair",
    price: "$200",
    originalPrice: "$250",
    message: "20%",
  },
  {
    imageSrc: "/assets/image 7.png",
    name: "Dumbledore",
    description: "Luxury Recliner",
    price: "$500",
    originalPrice: "$600",
    message: "17%",
  },
  {
    imageSrc: "/assets/image 8.png",
    name: "Potter",
    description: "Classic Rocking Chair",
    price: "$150",
    originalPrice: "$180",
    message: "16%",
  },
];


export const ProductGrid: React.FC = () => {
  return (
    <div className="py-12 px-6">
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
        <Button className="bg-[#B88E2F] px-16">See More</Button>
      </div>
    </div>
  );
};
