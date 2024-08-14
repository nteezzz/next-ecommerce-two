"use client";

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '../ui/button';

export default function InspirationBanner() {
  const carouselImages = [
    "/assets/Rectangle 24.png",
    "/assets/Rectangle 25.png",
    "/assets/image 100.png"
  ];

  return (
    <div className="flex flex-col md:flex-row p-6 px-16 bg-[#FCF8F3]">
      {/* Banner Content Section */}
      <div className="md:w-2/5 flex flex-col justify-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          50+ Beautiful Room Inspirations
        </h2>
        <p className="text-md text-gray-600 mb-6">
         Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>
        <Button className="bg-[#B88E2F] px-16 hover:bg-[#a87b1b] text-white py-3 font-semibold transition-colors duration-300">
          Explore More
        </Button>
      </div>

      {/* Carousel Section */}
      <div className="md:w-3/5 p-8">
        <Carousel className="relative  overflow-hidden">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem className="basis-1/2"key={index}>
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={404} // Adjust the width according to your needs
                  height={582} // Adjust the height according to your needs
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2">
            {/* Previous Arrow Icon */}
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2 ">
            {/* Next Arrow Icon */}
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
