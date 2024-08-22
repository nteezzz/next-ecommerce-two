"use client"; // Make sure this is at the top

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";

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

type CompareSectionProps = {
  selectedProduct: Product;
  productOptions: Product[];
};

const CompareSection: React.FC<CompareSectionProps> = ({ selectedProduct, productOptions }) => {
  const [product1, setProduct1] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);

  const NONE_VALUE = "none"; // Special value for "None"

  // Define the attributes to compare
  const attributes = [
    { label: "Product Image", key: "imageSrc", isImage: true },
    { label: "Product Name", key: "name" },
    { label: "Description", key: "description" },
    { label: "Price", key: "price" },
    { label: "Original Price", key: "originalPrice" },
    { label: "Promotion", key: "promotion" },
    { label: "Rating", key: "rating" },
    { label: "Dimensions", key: "dimensions" },
    { label: "Weight", key: "weight" },
    { label: "Color", key: "color" },
    { label: "Material", key: "material" },
    { label: "Brand", key: "brand" },
  ];

  // Render the table rows dynamically based on the attributes
  const renderRows = () => {
    return attributes.map((attr) => (
      <TableRow key={attr.key}>
        <TableCell>{attr.label}</TableCell>
        <TableCell>
          {attr.isImage ? (
            <img src={selectedProduct[attr.key as keyof Product] as string} alt={selectedProduct.name} className="w-20 h-20 object-cover" />
          ) : (
            selectedProduct[attr.key as keyof Product] || "N/A"
          )}
        </TableCell>
        <TableCell>
          {product1 && (attr.isImage ? (
            <img src={product1[attr.key as keyof Product] as string} alt={product1.name} className="w-20 h-20 object-cover" />
          ) : (
            product1[attr.key as keyof Product] || "N/A"
          ))}
        </TableCell>
        <TableCell>
          {product2 && (attr.isImage ? (
            <img src={product2[attr.key as keyof Product] as string} alt={product2.name} className="w-20 h-20 object-cover" />
          ) : (
            product2[attr.key as keyof Product] || "N/A"
          ))}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="compare-page p-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>{selectedProduct.name}</TableCell>
            <TableCell>
              <Select
                onValueChange={(value) => {
                  setProduct1(value === NONE_VALUE ? null : productOptions.find(p => p.id === Number(value)) || null);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={NONE_VALUE}>None</SelectItem> {/* None option */}
                  {productOptions.map((product) => (
                    <SelectItem key={product.id} value={String(product.id)}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <Select
                onValueChange={(value) => {
                  setProduct2(value === NONE_VALUE ? null : productOptions.find(p => p.id === Number(value)) || null);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={NONE_VALUE}>None</SelectItem> {/* None option */}
                  {productOptions.map((product) => (
                    <SelectItem key={product.id} value={String(product.id)}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {renderRows()}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompareSection;
