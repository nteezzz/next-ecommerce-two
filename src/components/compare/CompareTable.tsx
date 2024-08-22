"use client";
import React, { useState } from "react";
import { FC } from "react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  message: string;
  type: string;
  promotion: string;
  rating?: number;
  dimensions?: string;
  weight?: string;
  color?: string;
  material?: string;
  brand?: string;
};

interface CompareTableProps {
  selectedProduct: Product;
  products: Product[];
}

export const CompareTable: FC<CompareTableProps> = ({
  selectedProduct,
  products,
}) => {
  const [selectedProduct1, setSelectedProduct1] = useState<Product | null>(
    null
  );
  const [selectedProduct2, setSelectedProduct2] = useState<Product | null>(
    null
  );

  const handleSelectProduct1 = (value: string) => {
    const productId = parseInt(value, 10);
    const product = products.find((p) => p.id === productId) || null;
    setSelectedProduct1(product);
  };

  const handleSelectProduct2 = (value: string) => {
    const productId = parseInt(value, 10);
    const product = products.find((p) => p.id === productId) || null;
    setSelectedProduct2(product);
  };

  const handleRemoveProduct1 = () => {
    setSelectedProduct1(null);
  };

  const handleRemoveProduct2 = () => {
    setSelectedProduct2(null);
  };

  // Define a mapping of attribute keys to their labels
  const attributeMapping: { key: keyof Product; label: string }[] = [
    { key: "name", label: "Product Name" },
    { key: "rating", label: "Rating" },
    { key: "price", label: "Price" },
    { key: "description", label: "Description" },
    { key: "dimensions", label: "Dimensions" },
    { key: "weight", label: "Weight" },
    { key: "color", label: "Color" },
    { key: "material", label: "Material" },
    { key: "brand", label: "Brand" },
  ];

  return (
    <div className="px-16 text-left">
      <Table>
        <TableBody>
          <TableRow>
            {/* <TableCell>Product Image</TableCell> */}
            <TableCell colSpan={1} className="text-3xl w-1/4 font-semibold">
                Go to products page for more products
              {" "}
              <br />
              <a href="/shop" className="text-gray-500 text-lg underline">
                View More
              </a>
            </TableCell>
            <TableCell>
              <Image
                src={selectedProduct.imageSrc}
                alt="Product Image"
                width={200}
                height={200}
              />
            </TableCell>
            <TableCell>
              {selectedProduct1 ? (
                <div className="relative">
                  <Image
                    src={selectedProduct1.imageSrc}
                    alt="Product 1 Image"
                    width={200}
                    height={200}
                  />
                  <Button
                    variant={"ghost"}
                    className="absolute top-0 right-0 text-[#B88E2F]"
                    onClick={handleRemoveProduct1}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : (
                <Select onValueChange={handleSelectProduct1}>
                  <SelectTrigger className="w-[180px] bg-[#B88E2F] text-white">
                    <SelectValue placeholder="Choose a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Choose a Product</SelectLabel>
                      {products.map((product) => (
                        <SelectItem
                          key={product.id}
                          value={product.id.toString()}
                        >
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            </TableCell>
            <TableCell>
              {selectedProduct2 ? (
                <div className="relative">
                  <Image
                    src={selectedProduct2.imageSrc}
                    alt="Product 2 Image"
                    width={200}
                    height={200}
                  />
                  <Button
                    variant={"ghost"}
                    className="absolute top-0 right-0 text-[#B88E2F]"
                    onClick={handleRemoveProduct2}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : (
                <Select onValueChange={handleSelectProduct2}>
                  <SelectTrigger className="w-[180px] bg-[#B88E2F] text-white">
                    <SelectValue placeholder="Choose a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Choose a product</SelectLabel>
                      {products.map((product) => (
                        <SelectItem
                          key={product.id}
                          value={product.id.toString()}
                        >
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            </TableCell>
          </TableRow>
          {attributeMapping.map(({ key, label }) => (
            <TableRow key={key}>
              <TableCell>{label}</TableCell>
              <TableCell>{selectedProduct[key] || "-"}</TableCell>
              <TableCell>{selectedProduct1?.[key] || "-"}</TableCell>
              <TableCell>{selectedProduct2?.[key] || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
