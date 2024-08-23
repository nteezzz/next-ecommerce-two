"use client";
import React from 'react';

export const OrderSummary = () => {
  const subtotal = 100; // Replace with dynamic data
  const shipping = 10; // Replace with dynamic data
  const tax = 5; // Replace with dynamic data
  const total = subtotal + shipping + tax;

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
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="mb-6 flex justify-between">
        <span className="font-semibold text-lg">Total:</span>{" "}
        <span className="text-lg font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
