"use client";
import React from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'; 

interface BreadcrumbsProps {
  productName: string;
}

export const ProductBreadcrumbs: React.FC<BreadcrumbsProps> = ({ productName }) => {
  return (
    <div className="py-8 px-6 bg-[#F9F1E7]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
             Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>{'>'}</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">
              Shop
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>{'>'} |</BreadcrumbSeparator>
          <BreadcrumbItem>
            <span className="font-large">{productName}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
