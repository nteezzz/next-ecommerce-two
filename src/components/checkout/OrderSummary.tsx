"use client";
import React from "react";

export const OrderSummary = ({ shippingCost }: { shippingCost: number }) => {
  const subtotal = 100; // Replace with dynamic data
  const tax = 5; // Replace with dynamic data
  const total = subtotal + shippingCost + tax;

  return (
    <div className="space-y-2">
      <h2 className="font-bold">Order Summary</h2>
      <div className="mb-4 flex justify-between">
        <span className="font-medium">Subtotal:</span>{" "}
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <span className="font-medium">Tax:</span>{" "}
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <span className="font-medium">Shipping:</span>{" "}
        <span>${shippingCost.toFixed(2)}</span>
      </div>
      <div className="mb-6 flex justify-between">
        <span className="font-semibold text-lg">Total:</span>{" "}
        <span className="text-lg font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
