"use client"; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: "Dining",
    image: "/assets/image 106.png", 
    description: "Explore our elegant dining furniture and accessories.",
  },
  {
    title: "Living",
    image: "/assets/image 99.png", 
    description: "Discover stylish living room furniture and decor.",
  },
  {
    title: "Bedroom",
    image: "/assets/image 80.png", 
    description: "Find the perfect pieces for your bedroom retreat.",
  },
];

export default function BrowseByRange() {
  return (
    <div className="p-6 px-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Browse by Range
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link href={'/shop'} key={category.title}>
            <div 
              className="relative group overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={480} 
                height={381} 
                className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <h3 className="text-center text-xl font-semibold my-2 transform transition-transform duration-500 ease-in-out group-hover:translate-y-2">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
