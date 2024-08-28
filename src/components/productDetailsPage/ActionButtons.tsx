"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { useParams } from "next/navigation";
import { getProductDetails } from "@/utils/getProductDetails";

export const ActionButtons: React.FC = () => {
  const { id } = useParams();  
  const productId = id ? parseInt(id as string, 10) : 0;
  const product = getProductDetails(productId);
  const [quantity, setQuantity] = useState<number>(1);


  const handleCompareClick = () => {
    window.location.href = `/compare/${id}`;
  };

  return (
    <div className="mt-4 flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
          className="px-2 md:px-4 py-2"
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
          className="px-2 md:px-4 py-2"
        >
          +
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="outline" className="border-2 px-4 py-2">
          Add to Cart
        </Button>
        <Button variant="outline" className="border-2  px-4 py-2"
        onClick={(e)=>{ e.stopPropagation();
          handleCompareClick();}}>
          Compare
        </Button>
      </div>
    </div>
  );
};
