import React from "react";

export const ProductManufacture: React.FC<{
  sku: string;
  countryOfManufacture: string;
  dimensions: string;
}> = ({ sku, countryOfManufacture, dimensions }) => {
  return (
    <div className="mt-8">
      <p>SKU: {sku}</p>
      <p>Country of Manufacture: {countryOfManufacture}</p>
      <p>Dimensions: {dimensions}</p>
    </div>
  );
};
