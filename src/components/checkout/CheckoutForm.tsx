"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type Country = 'India' | 'US';

export const CheckoutForm = () => {
  const [country, setCountry] = useState<Country | "">("");
  const [states, setStates] = useState<string[]>([]);

  const countryStateMapping: Record<Country, string[]> = {
    India: ["Andhra Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu", "Kerala", "Gujarat", "Rajasthan", "Uttar Pradesh", "West Bengal", "Bihar"],
    US: ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan"],
  };

  const handleCountryChange = (value: Country) => {
    setCountry(value);
    setStates(countryStateMapping[value]);
  };

  return (
    <div className="space-y-4">
      {/* First Name and Last Name */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" type="text" required />
        </div>
        <div className="flex-1">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" required />
        </div>
      </div>
      <div>
        <Label htmlFor="companyName">Company Name (Optional)</Label>
        <Input id="companyName" type="text" />
      </div>
      
      {/* Country and State */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="country">Country</Label>
          <Select onValueChange={handleCountryChange}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Country</SelectLabel>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="US">United States</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="state">State/Province</Label>
          <Select disabled={!country}>
            <SelectTrigger id="state">
              <SelectValue placeholder="Select State/Province" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select State/Province</SelectLabel>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Street Address, City, Zipcode */}
      <div>
        <Label htmlFor="streetAddress">Street Address</Label>
        <Input id="streetAddress" type="text" required />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="city">Town/City</Label>
          <Input id="city" type="text" required />
        </div>
        <div className="flex-1">
          <Label htmlFor="zipcode">Zipcode</Label>
          <Input id="zipcode" type="text" required />
        </div>
      </div>
      <div>
        <Label htmlFor="landmark">Landmark (Optional)</Label>
        <Input id="landmark" type="text" />
      </div>

      {/* Mobile Number, Email */}
      <div>
        <Label htmlFor="mobileNumber">Mobile Number</Label>
        <Input id="mobileNumber" type="tel" required />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" required />
      </div>   
      
      <div>
        <Label htmlFor="deliveryInstructions">Delivery Instructions (Optional)</Label>
        <Input id="deliveryInstructions" type="text" />
      </div>
    </div>
  );
};
