"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  PiHeartLight,
  PiShareLight,
  PiShoppingCartLight,
  PiArrowsHorizontalLight,
} from "react-icons/pi";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  message: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  description,
  price,
  originalPrice,
  message,
}) => {
  const handleCardClick = () => {
    window.location.href = "/details";
  };

  const handleCompareClick = () => {
    window.location.href = "/compare";
  };

  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  return (
    <Card
      className="relative group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <Image
          src={imageSrc}
          alt={name}
          width={285}
          height={301}
          className="w-full h-auto sm:w-[285px] sm:h-[301px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <Button className="p-2 bg-white hover:bg-gray-100 text-black">
              <PiHeartLight />
            </Button>
            <Button
              className="p-2 bg-white hover:bg-gray-100 text-black"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card click
                handleCompareClick();
              }}
            >
              <PiArrowsHorizontalLight />
            </Button>
            <Button className="p-2 bg-white hover:bg-gray-100 text-black">
              <PiShareLight />
            </Button>
            <Button
              className="p-2 bg-white hover:bg-gray-100 text-black"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card click
                handleCartClick();
              }}
            >
              <PiShoppingCartLight />
            </Button>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 z-10">
          {message} OFF
        </div>
      </div>
      <CardContent className="bg-[#F4F5F7] p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">{name}</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          {description}
        </CardDescription>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-semibold sm:text-xl">{price}</span>
          <span className="text-sm text-gray-500 line-through">
            {originalPrice}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
