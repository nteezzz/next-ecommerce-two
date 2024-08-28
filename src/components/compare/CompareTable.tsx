"use client";
import React, { useState } from "react";
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
import { Product } from "@/types/product";

interface CompareTableProps {
  selectedProduct: Product;
  products: Product[];
}

export const CompareTable: React.FC<CompareTableProps> = ({
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

  const renderProductAttribute = (
    attribute: keyof Product,
    product: Product | null
  ) => {
    if (!product) return "-";
  
    const value = product[attribute];
  
    if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        return value.join(", ");
      }
    } else if (typeof value === "string" || typeof value === "number") {
      return value;
    } 
  
    return "-";
  };
  return (
    <div className="px-6 md:px-16 text-left">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={1}
              className="text-lg md:text-3xl w-1/4 font-semibold"
            >
              Go to products page for more products
              <br />
              <a
                href="/shop"
                className="text-gray-500 text-sm md:text-lg underline"
              >
                View More
              </a>
            </TableCell>
            <TableCell>
              <Image
                src={selectedProduct.images[0]}
                alt="Product Image"
                width={200}
                height={200}
              />
            </TableCell>
            <TableCell>
              {selectedProduct1 ? (
                <div className="relative">
                  <Image
                    src={selectedProduct1.images[0]}
                    alt="Product 1 Image"
                    width={200}
                    height={200}
                  />
                  <Button
                    variant={"ghost"}
                    className="absolute top-0 right-0 text-[#B88E2F]"
                    onClick={handleRemoveProduct1}
                    aria-label="Remove selected product 1"
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
            <TableCell className="hidden md:table-cell">
              {selectedProduct2 ? (
                <div className="relative">
                  <Image
                    src={selectedProduct2.images[0]}
                    alt="Product 2 Image"
                    width={200}
                    height={200}
                  />
                  <Button
                    variant={"ghost"}
                    className="absolute top-0 right-0 text-[#B88E2F]"
                    onClick={handleRemoveProduct2}
                    aria-label="Remove selected product 2"
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

          {/* Map basic product attributes */}
          {["name", "price", "variants", "colors", "countryOfManufacture"].map(
            (attribute) => (
              <TableRow key={attribute}>
                <TableCell className=" capitalize">
                  {attribute.replace(/([A-Z])/g, " $1")}
                </TableCell>
                <TableCell>
                  {renderProductAttribute(attribute as keyof Product, selectedProduct)}
                </TableCell>
                <TableCell>
                  {renderProductAttribute(attribute as keyof Product, selectedProduct1)}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {renderProductAttribute(attribute as keyof Product, selectedProduct2)}
                </TableCell>
              </TableRow>
            )
          )}

          {/* Map additional info */}
          {selectedProduct.additionalInfo.map(({ key, value }) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value}</TableCell>
              <TableCell>
                {selectedProduct1?.additionalInfo.find(
                  (info) => info.key === key
                )?.value || "-"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {selectedProduct2?.additionalInfo.find(
                  (info) => info.key === key
                )?.value || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
