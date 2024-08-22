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
    <div className="relative w-full h-[275px]">
      <img
        src="/assets/productsbanner.png"
        alt="Products banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl mb-4">
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </h1>
        <Breadcrumb className="text-sm md:text-base">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={'/'}>Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>{">"}</BreadcrumbSeparator>
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
