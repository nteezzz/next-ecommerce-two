"use client";
import React from "react";
import StarRating from "./StarRating";

export const ProductDetails: React.FC<{
  name: string;
  price: string;
  ratings: number;
  description: string;
}> = ({ name, price, ratings, description }) => (
  <div>
    <h1 className="text-2xl font-bold">{name}</h1>
    <div className="text-xl text-gray-800">{price}</div>
    <StarRating rating={ratings} />
    <p className="mt-4 text-gray-700">{description}</p>
  </div>
);
