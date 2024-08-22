"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; 

export const ActionButtons: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="mt-4 flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
          className="px-4 py-2"
        >
          -
        </Button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-12 text-center border border-gray-300 rounded-md"
        />
        <Button
          variant="outline"
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-2"
        >
          +
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="outline" className="border-2 px-4 py-2">
          Add to Cart
        </Button>
        <Button variant="outline" className="border-2  px-4 py-2">
          Compare
        </Button>
      </div>
    </div>
  );
};
