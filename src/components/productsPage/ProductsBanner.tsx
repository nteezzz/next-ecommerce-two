"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ProductsBanner() {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter(Boolean);

  const currentPage = pathArray[pathArray.length - 1] || 'Shop';

  return (
    <div className="relative w-full h-[275px]">
      <img
        src="/assets/productsbanner.png" 
        alt="Products banner"
        className="absolute inset-0 w-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md text-center">
        <h1 className="text-4xl">
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </h1>
        <p className="text-sm md:text-base">
          <Link href="/" className="text-[#B88E2F] hover:underline">Home</Link> &gt; 
          {' '}
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </p>
      </div>
    </div>
  );
}
