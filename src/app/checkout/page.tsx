"use client";
import React from 'react';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { OrderSummary } from '@/components/checkout/OrderSummary';
import { ShippingOptions } from '@/components/checkout/ShippingOptions';
import { PaymentOptions } from '@/components/checkout/PaymentOptions';
import { Button } from "@/components/ui/button";
import ProductsBanner from '@/components/productsPage/ProductsBanner';

 const CheckoutPage = () => {
  return (
    <>
    <ProductsBanner/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-16 py-8">
      <div className="space-y-8">
        <CheckoutForm />
      </div>
      <div className="space-y-8">
        <OrderSummary />
        <ShippingOptions />
        <PaymentOptions />
        <Button variant={'outline'} className="w-full text-md mt-4 border-2 border-black">Place Order</Button>
      </div>
    </div>
    
    </>
    
  );
};

export default CheckoutPage;
