"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductsBanner from "@/components/productsPage/ProductsBanner";
import FooterBanner from "@/components/footer/FooterBanner";

const AboutPage: React.FC = () => {
  return (
    <>
      <ProductsBanner />
      <div className="container py-16 px-32">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to Funiro, where we blend style, comfort, and functionality to create beautiful living spaces.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Founded in [Year], [Your Furniture Store] started with a passion for creating high-quality, stylish furniture that enhances your home. Our journey began with a small workshop, and over the years, we’ve grown into a trusted name in the furniture industry. Our commitment to craftsmanship and design excellence has allowed us to serve countless satisfied customers.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At [Your Furniture Store], our mission is to provide exceptional furniture that combines aesthetic appeal with practical functionality. We strive to offer a diverse range of products that cater to various tastes and preferences, ensuring that every piece we offer contributes to creating the perfect home environment for our customers.
          </p>
        </div>

        {/* Our Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg text-gray-700 mb-4">
            Meet the talented team behind [Your Furniture Store]. Our team is composed of skilled craftsmen, designers, and customer service professionals who are dedicated to delivering top-notch furniture and an outstanding shopping experience.
          </p>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Image
                src="/team-member1.jpg"
                alt="Team Member 1"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center font-semibold mt-2">Jane Doe</p>
              <p className="text-center text-gray-600">Designer</p>
            </div>
            <div className="flex-1">
              <Image
                src="/team-member2.jpg"
                alt="Team Member 2"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center font-semibold mt-2">John Smith</p>
              <p className="text-center text-gray-600">Craftsman</p>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions or would like to learn more about our products, please don’t hesitate to reach out to us.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> +1 (234) 567-8900
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> contact@yourfurniturestore.com
          </p>
          <Button className="bg-[#B88E2F] text-white px-8 mt-4">Get in Touch</Button>
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export default AboutPage;
