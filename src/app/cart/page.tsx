
import React from "react";

import ProductsBanner from "@/components/productsPage/ProductsBanner";
import FooterBanner from "@/components/footer/FooterBanner";
import { Cart } from "@/components/cart/Cart";

export default function CartPage() {
  return (
    <div>
      <ProductsBanner />
      <Cart />
      <FooterBanner />
    </div>
  );
}
