"use client";
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const PaymentOptions = () => {
  const [payment, setPayment] = useState('cod'); // Default to "Cash on Delivery"

  return (
    <div className="space-y-2">
      <Label className="font-bold">Payment Options</Label>
      <RadioGroup value={payment} onValueChange={setPayment}>
        <div>
          <RadioGroupItem value="bank" id="bank" disabled />
          <Label htmlFor="bank" className="text-gray-400">
            Bank Transfer
          </Label>
          <div className="text-red-500 mt-2">
             Payment servers are down. Bank Transfer is currently unavailable.
          </div>
        </div>
        
        <div>
          <RadioGroupItem value="cod" id="cod" />
          <Label htmlFor="cod">Cash on Delivery</Label>
        </div>
      </RadioGroup>
      
    </div>
  );
};
