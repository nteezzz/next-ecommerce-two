import React from 'react';
import { ProductGridFilters } from '@/components/productsPage/ProductGridFilters';
import ProductsBanner from '@/components/productsPage/ProductsBanner';

export default function ProductListingPage() {
  return (
    <div>
     
      {/* Product Grid Section */}
      <ProductsBanner/>
      <ProductGridFilters />
    </div>
  );
}