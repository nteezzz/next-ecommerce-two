"use client";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const ShippingOptions = ({
  setShippingMethod,
}: {
  setShippingMethod: (method: string) => void;
}) => {
  return (
    <RadioGroup
      onValueChange={setShippingMethod}
      className="space-y-2"
      defaultValue="standard"
    >
      <Label className="font-bold">Shipping Options</Label>
      <div>
        <RadioGroupItem value="free" id="free" />
        <Label htmlFor="free">Free Shipping (7-8 days)</Label>
      </div>
      <div>
        <RadioGroupItem value="standard" id="standard" />
        <Label htmlFor="standard">Standard Delivery (3 days - $10)</Label>
      </div>
      <div>
        <RadioGroupItem value="express" id="express" />
        <Label htmlFor="express">Express Delivery (1 day - $20)</Label>
      </div>
    </RadioGroup>
  );
};
