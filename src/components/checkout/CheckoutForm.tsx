"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Country = "India" | "US";

export const CheckoutForm = ({
  setFormCompleted,
  setOrderData,
}: {
  setFormCompleted: (completed: boolean) => void;
  setOrderData: (data: any) => void;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    streetAddress: "",
    city: "",
    zipcode: "",
    mobileNumber: "",
    email: "",
    companyName: "",
    landmark: "",
    deliveryInstructions: "",
  });

  const [country, setCountry] = useState<Country | "">("");
  const [states, setStates] = useState<string[]>([]);

  const countryStateMapping: Record<Country, string[]> = {
    India: [
      "Andhra Pradesh",
      "Maharashtra",
      "Karnataka",
      "Tamil Nadu",
      "Kerala",
      "Gujarat",
      "Rajasthan",
      "Uttar Pradesh",
      "West Bengal",
      "Bihar",
    ],
    US: [
      "California",
      "Texas",
      "Florida",
      "New York",
      "Illinois",
      "Pennsylvania",
      "Ohio",
      "Georgia",
      "North Carolina",
      "Michigan",
    ],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCountryChange = (value: Country) => {
    setCountry(value);
    setStates(countryStateMapping[value]);
    setFormData((prev) => ({ ...prev, country: value, state: "" }));
  };

  const handleStateChange = (value: string) => {
    setFormData((prev) => ({ ...prev, state: value }));
  };
  const requiredFields = [
    "firstName",
    "lastName",
    "country",
    "state",
    "streetAddress",
    "city",
    "zipcode",
    "mobileNumber",
    "email",
  ];

  useEffect(() => {
    const isCompleted = requiredFields.every(
      (key) => formData[key as keyof typeof formData] !== ""
    );
    setFormCompleted(isCompleted);
    setOrderData(formData);
  }, [formData, setFormCompleted, setOrderData]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" type="text" required onChange={handleInputChange} />
        </div>
        <div className="flex-1">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" required onChange={handleInputChange} />
        </div>
      </div>
      <div>
        <Label htmlFor="companyName">Company Name (Optional)</Label>
        <Input id="companyName" type="text" onChange={handleInputChange} />
      </div>

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
          <Select disabled={!country} onValueChange={handleStateChange}>
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
      <div>
        <Label htmlFor="streetAddress">Street Address</Label>
        <Input id="streetAddress" type="text" required onChange={handleInputChange} />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="city">Town/City</Label>
          <Input id="city" type="text" required onChange={handleInputChange} />
        </div>
        <div className="flex-1">
          <Label htmlFor="zipcode">Zipcode</Label>
          <Input id="zipcode" type="text" required onChange={handleInputChange} />
        </div>
      </div>
      <div>
        <Label htmlFor="landmark">Landmark (Optional)</Label>
        <Input id="landmark" type="text" onChange={handleInputChange} />
      </div>
      <div>
        <Label htmlFor="mobileNumber">Mobile Number</Label>
        <Input id="mobileNumber" type="tel" required onChange={handleInputChange} />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" required onChange={handleInputChange} />
      </div>
      <div>
        <Label htmlFor="deliveryInstructions">Delivery Instructions (Optional)</Label>
        <Input id="deliveryInstructions" type="text" onChange={handleInputChange} />
      </div>
    </div>
  );
};
