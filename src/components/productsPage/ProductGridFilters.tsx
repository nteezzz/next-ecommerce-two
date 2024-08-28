"use client";

import React, { useState } from "react";
import { ProductCard } from "../productcard/ProductCard";
import { products } from "@/data/products";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PiFadersHorizontalLight ,PiArrowsDownUpLight } from "react-icons/pi"; 
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProductGridFilters: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const filteredProducts = products
    .filter((product) =>
      selectedType === "All" ? true : product.type === selectedType
    )
    .sort((a, b) => {
      if (sortBy === "priceLowToHigh") {
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      } else if (sortBy === "priceHighToLow") {
        return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="py-8 px-6 flex justify-between bg-[#F9F1E7] items-center">
        <div className="flex  md:items-center">
          <PiFadersHorizontalLight size={24} className="mr-2 text-lg" />
          <Label htmlFor="typeFilter" className="mr-2 text-lg hidden md:block">
            Filter By:
          </Label>
          <Select
            value={selectedType}
            onValueChange={(value) => setSelectedType(value)}
          >
            <SelectTrigger className=" w-[90px] md:w-[180px]" id="typeFilter">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Chair">Chair</SelectItem>
                <SelectItem value="Sofa">Sofa</SelectItem>
                <SelectItem value="Table">Table</SelectItem>
                <SelectItem value="Lamp">Lamp</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex md:items-center">
        <PiArrowsDownUpLight size={24} className="mr-2 text-lg" />
          <Label htmlFor="sortBy" className="mr-2 text-lg hidden md:block">
            Sort by:
          </Label>
          <Select
            value={sortBy}
            onValueChange={(value) => setSortBy(value)}
          >
            <SelectTrigger className="w-[90px] md:w-[180px]" id="sortBy">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="py-10 px-10 md:px-16 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              imageSrc={product.images[0]}
              name={product.name}
              description={product.shortDescription}
              price={product.price}
              originalPrice={product.originalPrice}
              message={product.promotion}
            />
          ))}
        </div>

        {/* Pagination Component */}
        <div className="text-center mt-8">
          <Pagination>
            <PaginationContent className="flex justify-center space-x-2">
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="bg-[#F9F1E7] text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                  />
                </PaginationItem>
              )}
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={i + 1 === currentPage}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded ${
                      i + 1 === currentPage
                        ? "bg-[#B88E2F] text-white"
                        : "bg-[#F9F1E7] text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="bg-[#F9F1E7] text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};
