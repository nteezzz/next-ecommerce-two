"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { products } from "@/data/products";

export const Cart = () => {
  // Dummy cart items with initial quantities
  const [cartItems, setCartItems] = useState(
    products.map((product) => ({
      ...product,
      quantity: 1,
    }))
  );

  const handleQuantityChange = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + amount > 0 ? item.quantity + amount : 1,
            }
          : item
      )
    );
  };

  // Convert price to number and calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );
  const tax = "TBD";
  const shipping = "TBD";

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          <Table>
            <TableCaption>Your selected items.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 bg-[#F9F1E7] text-black"
                      >
                        -
                      </Button>
                      <span className="px-4">{item.quantity}</span>
                      <Button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 bg-[#F9F1E7] text-black"
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="font-semibold">
                  Total
                </TableCell>
                <TableCell className="text-right font-semibold">
                  ${subtotal.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        {/* Cart Total Section */}
        <div className="col-span-1 h-[375px] bg-[#F9F1E7] p-6 rounded-lg">
          <h2 className="text-xl text-center font-semibold mb-4">Cart Total</h2>
          <div className="mb-4">
            <span className="font-medium">Subtotal:</span>{" "}
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="mb-4">
            <span className="font-medium">Tax:</span> <span>{tax}</span>
          </div>
          <div className="mb-4">
            <span className="font-medium">Shipping:</span>{" "}
            <span>{shipping}</span>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-lg">Total:</span>{" "}
            <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <Button className="w-full bg-[#B88E2F] py-3 hover:bg-[#a87b1b]">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
