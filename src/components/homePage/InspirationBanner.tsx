"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

export default function InspirationBanner() {
  const carouselImages = [
    "/assets/Rectangle 24.png",
    "/assets/Rectangle 25.png",
    "/assets/image 100.png",
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 sm:p-6 md:p-8 lg:p-12 bg-[#FCF8F3]">
      <div className="md:w-2/5 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
          50+ Beautiful Room Inspirations
        </h2>
        <p className="text-sm sm:text-md md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <Button className="bg-[#B88E2F] px-8 sm:px-12 md:px-16 hover:bg-[#a87b1b] text-white py-2 sm:py-3 md:py-4 font-semibold transition-colors duration-300">
          Explore More
        </Button>
      </div>
      <div className="md:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10">
        <Carousel className="relative overflow-hidden">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem className="basis-1/2" key={index}>
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={404}
                  height={582}
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2"></CarouselPrevious>
          <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2"></CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
