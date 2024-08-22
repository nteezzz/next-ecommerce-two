"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MainBanner() {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src="/assets/mainbanner.png"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 w-1/3  right-0 transform -translate-y-1/2 -translate-x-1/4  bg-[#FFF3E3] p-10  shadow-md">
        <h1 className="text-[#B88E2F] text-left text-4xl font-bold  mb-2">
          Discover Our New Collection
        </h1>
        <p className="text-[#B88E2F] text-sm md:text-base">
          Discover the latest trends and shop your favorites now.
        </p>

          <Button className="mt-4 px-8 py-2 bg-[#B88E2F] text-white text-sm md:text-base hover:bg-[#a87b1b]">
            Shop Now
          </Button>

      </div>
    </div>
  );
}
