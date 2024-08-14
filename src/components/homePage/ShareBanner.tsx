"use client";

import React from 'react';
import Image from 'next/image';

export default function ShareBanner() {
  const images = [
    { src: "/assets/Rectangle 36.png", width: 381, height: 323, colSpan: 3, rowSpan: 2 }, // Large image, spans across multiple columns and rows
    { src: "/assets/Rectangle 37.png", width: 274, height: 382, colSpan: 2, rowSpan: 2 }, // Tall image, spans 2 columns and rows
    { src: "/assets/Rectangle 38.png", width: 451, height: 312, colSpan: 3, rowSpan: 1 }, // Wide image, spans across columns
    { src: "/assets/Rectangle 39.png", width: 344, height: 242, colSpan: 2, rowSpan: 1 }, // Smaller image, centered
    { src: "/assets/Rectangle 40.png", width: 295, height: 392, colSpan: 1, rowSpan: 2 }, // Tall, narrow image
    { src: "/assets/Rectangle 41.png", width: 178, height: 242, colSpan: 1, rowSpan: 1 }, // Small image
    { src: "/assets/Rectangle 43.png", width: 290, height: 348, colSpan: 2, rowSpan: 2 }, // Medium image
    { src: "/assets/Rectangle 44.png", width: 258, height: 198, colSpan: 1, rowSpan: 1 }, // Small image, balanced with others
    { src: "/assets/Rectangle 45.png", width: 425, height: 433, colSpan: 3, rowSpan: 2 }, // Large image, spans across multiple columns and rows
  ];

  return (
    <div className="p-6 px-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Our Collection
      </h2>
      <div className="grid grid-cols-6 gap-4 auto-rows-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg col-span-${image.colSpan} row-span-${image.rowSpan}`}
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={image.width}
              height={image.height}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
