"use client"; // Add this at the top of your file

import React from 'react';

export default function ProductsBanner() {
  return (
    <div className="relative w-full h-[275px]">

      <img
        src="/assets/productsbanner.png" 
        alt="Products banner"
        className="absolute inset-0 w-full  object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md text-center">
        <h1 className=" text-4xl ">
          Shop
        </h1>
        <p className=" text-sm md:text-base">
          Home &gt; Shop
        </p>
      </div>
   </div>
  );
}
