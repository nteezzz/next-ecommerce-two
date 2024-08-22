"use client";
import React, { useState } from 'react';
import { FC, ChangeEvent } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export const CompareTable: FC<CompareTableProps> = ({ selectedProduct, products }) => {
  const [selectedProduct1, setSelectedProduct1] = useState<Product | null>(null);
  const [selectedProduct2, setSelectedProduct2] = useState<Product | null>(null);

  const handleSelectProduct1 = (value: string) => {
    const productId = parseInt(value, 10);
    const product = products.find(p => p.id === productId) || null;
    setSelectedProduct1(product);
  };

  const handleSelectProduct2 = (value: string) => {
    const productId = parseInt(value, 10);
    const product = products.find(p => p.id === productId) || null;
    setSelectedProduct2(product);
  };

  return (
    <Table>
      <TableCaption>Compare selected products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Attribute</TableHead>
          <TableHead>
            {selectedProduct ? 'Current Product' : 'Current Product Not Selected'}
          </TableHead>
          <TableHead>
            <Select onValueChange={handleSelectProduct1}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Product 1" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Product 1</SelectLabel>
                  {products.map(product => (
                    <SelectItem key={product.id} value={product.id.toString()}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </TableHead>
          <TableHead>
            <Select onValueChange={handleSelectProduct2}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Product 2" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Product 2</SelectLabel>
                  {products.map(product => (
                    <SelectItem key={product.id} value={product.id.toString()}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Product Image</TableCell>
          <TableCell>
            <img src={selectedProduct.imageSrc} alt="Product Image" width={100} />
          </TableCell>
          <TableCell>
            {selectedProduct1?.imageSrc ? (
              <img src={selectedProduct1.imageSrc} alt="Product Image" width={100} />
            ) : 'N/A'}
          </TableCell>
          <TableCell>
            {selectedProduct2?.imageSrc ? (
              <img src={selectedProduct2.imageSrc} alt="Product Image" width={100} />
            ) : 'N/A'}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product Name</TableCell>
          <TableCell>{selectedProduct.name}</TableCell>
          <TableCell>{selectedProduct1?.name || ''}</TableCell>
          <TableCell>{selectedProduct2?.name || ''}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Rating</TableCell>
          <TableCell>{selectedProduct.rating || 'N/A'}</TableCell>
          <TableCell>{selectedProduct1?.rating || 'N/A'}</TableCell>
          <TableCell>{selectedProduct2?.rating || 'N/A'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Price</TableCell>
          <TableCell>{selectedProduct.price}</TableCell>
          <TableCell>{selectedProduct1?.price || ''}</TableCell>
          <TableCell>{selectedProduct2?.price || ''}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell>{selectedProduct.description}</TableCell>
          <TableCell>{selectedProduct1?.description || ''}</TableCell>
          <TableCell>{selectedProduct2?.description || ''}</TableCell>
        </TableRow>
        {/* Add more rows for other attributes as needed */}
      </TableBody>
    </Table>
  );
};
