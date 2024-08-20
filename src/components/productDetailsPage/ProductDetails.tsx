import React from 'react';

export const ProductDetails: React.FC<{ name: string; price: string; ratings: number; description:string }> = ({ name, price, ratings, description }) => (
  <div>
    <h1 className="text-2xl font-bold">{name}</h1>
    <div className="text-xl text-gray-800">{price}</div>
    <div className="text-sm text-yellow-500">Rating: {ratings} / 5</div>
    <p className="mt-4 text-gray-700">{description}</p>
  </div>
);