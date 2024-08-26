"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MainBanner() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <img
        src="/assets/mainbanner.png"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#FFF3E3] p-6 md:p-8 lg:p-10 shadow-md w-[80%] md:w-1/2 lg:w-1/3 
        right-0 md:right-0 lg:right-0 md:-translate-x-1/4 lg:-translate-x-1/4 
        left-1/2 -translate-x-1/2 md:left-auto lg:left-auto">
        <h1 className="text-[#B88E2F] text-left text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Discover Our New Collection
        </h1>
        <p className="text-[#B88E2F] text-xs md:text-sm lg:text-base hidden md:block">
          Discover the latest trends and shop your favorites now.
        </p>
        <Link href="/shop">
          <Button className="mt-4 px-6 md:px-8 py-2 bg-[#B88E2F] text-white text-xs md:text-sm lg:text-base hover:bg-[#a87b1b]">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
