"use client";
import React from 'react';
import { ProductGridFilters } from '@/components/productsPage/ProductGridFilters';
import ProductsBanner from '@/components/productsPage/ProductsBanner';
import FooterBanner from '@/components/footer/FooterBanner';

export default function ProductListingPage() {
  return (
    <div>
      <ProductsBanner/>
      <ProductGridFilters />
      <FooterBanner/>
    </div>
  );
}