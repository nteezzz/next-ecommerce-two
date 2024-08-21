import React from "react";

import ProductsBanner from "@/components/productsPage/ProductsBanner";
import PromisesBanner from "@/components/productsPage/PromisesBanner";
import FooterBanner from "@/components/footer/FooterBanner";
import { Cart } from "@/components/cart/Cart";

export default function ProductListingPage() {
  return (
    <div>
      <ProductsBanner />
      <Cart />
      <FooterBanner />
    </div>
  );
}
