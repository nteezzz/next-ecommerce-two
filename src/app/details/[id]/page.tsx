"use client";
import React from "react";
import { ProductBreadcrumbs } from "@/components/productDetailsPage/ProductBreadcrumbs";
import { ProductDetails } from "@/components/productDetailsPage/ProductDetails";
import { VariantSelector } from "@/components/productDetailsPage/VariantSelector";
import { ColorSwatcher } from "@/components/productDetailsPage/ColorSwatcher";
import { ActionButtons } from "@/components/productDetailsPage/ActionButtons";
import { AdditionalDetails } from "@/components/productDetailsPage/AdditionalDetails";
import { RelatedProducts } from "@/components/productDetailsPage/RelatedProducts";
import { ImageGallery } from "@/components/productDetailsPage/ImageGallery";
import { ProductManufacture } from "@/components/productDetailsPage/ProductManufacture";
import { useParams } from "next/navigation"; 
import { getProductDetails } from "@/utils/getProductDetails";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();  
  const productId = id ? parseInt(id as string, 10) : 0;
  const product = getProductDetails(productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="container p-0">
      <div>
        <ProductBreadcrumbs productName={product.name} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-4 px-6 md:px-16 pb-6 md:pb-16">
          <div className="flex flex-col">
            <ImageGallery images={product.images} />
          </div>
          <div className="flex flex-col text-left items-left">
            <ProductDetails
              name={product.name}
              price={product.price}
              ratings={product.ratings}
              description={product.shortDescription}
            />
            <VariantSelector variants={product.variants} />
            <ColorSwatcher colors={product.colors} />
            <ActionButtons />
            {/* SKU, Country of Manufacture, and Dimensions Section */}
            <ProductManufacture
              sku={product.sku}
              countryOfManufacture={product.countryOfManufacture}
              dimensions={product.dimensions}
            />
          </div>

          {/* Section 2: Additional Details */}
          <div className="col-span-1 lg:col-span-2 text-center">
            <AdditionalDetails
              longDescription={product.longDescription}
              additionalInfo={product.additionalInfo}
              reviews={product.reviews}
            />
          </div>

          {/* Section 3: Related Products */}
          <div className="col-span-1 lg:col-span-2 items-center text-center">
            <RelatedProducts products={product.relatedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
