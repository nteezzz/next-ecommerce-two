"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ProductsBanner() {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);

  const currentPage = pathArray[pathArray.length - 1] || "Shop";

  return (
    <div className="relative w-full h-[150px] sm:h-[250px] lg:h-[300px]">
      <img
        src="/assets/productsbanner.png"
        alt="Products banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </h1>
        <Breadcrumb className="text-xs sm:text-sm md:text-base lg:text-lg">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={'/'}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden sm:inline">{">"}</BreadcrumbSeparator>
            <BreadcrumbItem>
              <span className="font-medium">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
