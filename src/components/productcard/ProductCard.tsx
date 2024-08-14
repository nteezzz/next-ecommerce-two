"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PiHeartLight, PiShareLight, PiShoppingCartLight, PiArrowsHorizontalLight } from "react-icons/pi";
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

export const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, description, price, originalPrice, message }) => {
  return (
    <Card className="relative group hover:shadow-lg transition-shadow duration-300">
      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 z-10">
        {message} OFF
      </div>
      <CardHeader className="relative">
        <Image src={imageSrc} alt={name} width={285} height={301} className="z-0" />
        <div className="absolute m-0 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <div className="flex space-x-2">
            <Button className="p-2 bg-white hover:bg-gray-100 text-black">
              <PiHeartLight />
            </Button>
            <Button className="p-2 bg-white hover:bg-gray-100 text-black">
              <PiArrowsHorizontalLight />
            </Button>
            <Button className="p-2 bg-white hover:bg-gray-100 text-black">
              <PiShareLight />
            </Button>
            <Button className="p-2 bg-white hover:bg-gray-100 text-black">
              <PiShoppingCartLight />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="bg-[#F4F5F7]">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">{price}</span>
          <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
        </div>
      </CardContent>
    </Card>
  );
};
