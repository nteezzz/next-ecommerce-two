"use client";
import React, { useState } from "react";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { ShippingOptions } from "@/components/checkout/ShippingOptions";
import { PaymentOptions } from "@/components/checkout/PaymentOptions";
import { Button } from "@/components/ui/button";
import ProductsBanner from "@/components/productsPage/ProductsBanner";

const CheckoutPage = () => {
  const [formCompleted, setFormCompleted] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [orderData, setOrderData] = useState<any>({});

  const calculateShipping = () => {
    switch (shippingMethod) {
      case "free":
        return 0;
      case "standard":
        return 10;
      case "express":
        return 20;
      default:
        return 0;
    }
  };

  const handlePlaceOrder = () => {
    if (!formCompleted) {
      alert("Please complete all mandatory fields.");
      return;
    }
    console.log("Order Data:", orderData);
    alert("Order placed successfully!");
  };

  return (
    <>
      <ProductsBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-16 py-8">
        <div className="space-y-8">
          <CheckoutForm
            setFormCompleted={setFormCompleted}
            setOrderData={setOrderData}
          />
        </div>
        <div className="space-y-8">
          <OrderSummary shippingCost={calculateShipping()} />
          <ShippingOptions setShippingMethod={setShippingMethod} />
          <PaymentOptions />
          <Button
            variant={"outline"}
            className="w-full text-md mt-4 border-2 border-black"
            onClick={handlePlaceOrder}
            disabled={!formCompleted}
          >
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
