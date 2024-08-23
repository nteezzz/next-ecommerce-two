"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ProductsBanner from "@/components/productsPage/ProductsBanner";
import FooterBanner from "@/components/footer/FooterBanner";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Data:", formData);
  };

  return (
    <>
      <ProductsBanner />
      <div className="container py-12 px-32">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">Get in Touch with Us</h1>
          <p className="text-md text-gray-700 px-16">
            For More Information About Our Products & Services. Please Feel Free To Drop Us An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1: Address, Contact Number & Working Hours */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold ">Address</h2>
              <p>123 Main Street, City, Country</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Contact Number</h2>
              <p>+1 (234) 567-8900</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Working Hours</h2>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p>Sat: 10:00 AM - 3:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          {/* Column 2: Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                  required
                />
              </div>
              <Button type="submit" className="bg-[#B88E2F] text-white px-16">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export default ContactPage;
