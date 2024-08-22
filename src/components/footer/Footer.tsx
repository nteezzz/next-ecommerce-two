"use client";
import React from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 p-5 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Funiro</h3>
          <address className="not-italic mb-3">
            123 Fashion Street,
            <br />
            New York, NY 10001
            <br />
            USA
          </address>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/ourStory">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Help</h3>
          <ul>
            <li>
              <Link href="/help/payment-options">Payment Options</Link>
            </li>
            <li>
              <Link href="/help/returns">Returns</Link>
            </li>
            <li>
              <Link href="/help/privacy">Privacy Policies</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Newsletter</h3>
          <p className="mb-3">
            Sign up for our newsletter to get the latest updates.
          </p>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>© {new Date().getFullYear()} NteezCart. All rights reserved.</p>
      </div>
    </footer>
  );
}
