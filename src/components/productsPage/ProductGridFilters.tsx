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
import { PiFadersHorizontalLight } from "react-icons/pi"; // Importing the Pi icon

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
        <div className="flex items-center">
          <PiFadersHorizontalLight size={24} className="mr-2 text-lg" />
          <label htmlFor="typeFilter" className="mr-2 text-lg">
            Filter by Type:
          </label>
          <select
            id="typeFilter"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border border-gray-300 p-2"
          >
            <option value="All">All</option>
            <option value="Chair">Chair</option>
            <option value="Sofa">Sofa</option>
            <option value="Table">Table</option>
            <option value="Lamp">Lamp</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortBy" className="mr-2 text-lg">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 p-2"
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div className="py-12 px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              name={product.name}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              message={product.message}
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
