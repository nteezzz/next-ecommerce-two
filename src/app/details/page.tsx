import React from "react";
import { ProductBreadcrumbs } from "@/components/productDetailsPage/ProductBreadcrumbs";
import { ProductDetails } from "@/components/productDetailsPage/ProductDetails";
import { VariantSelector } from "@/components/productDetailsPage/VariantSelector";
import { ColorSwatcher } from "@/components/productDetailsPage/ColorSwatcher";
import { ActionButtons } from "@/components/productDetailsPage/ActionButtons";
import { AdditionalDetails } from "@/components/productDetailsPage/AdditionalDetails";
import { RelatedProducts } from "@/components/productDetailsPage/RelatedProducts";
import { ImageGallery } from "@/components/productDetailsPage/ImageGallery";
import StarRating from "@/components/productDetailsPage/StarRating";
import { ProductManufacture } from "@/components/productDetailsPage/ProductManufacture";

const ProductDetailsPage: React.FC = () => {
  const product = {
    name: "Stylish Chair",
    price: "$40",
    ratings: 4.5,
    shortDescription: "A stylish and comfortable chair.",
    variants: ["Standard", "Premium"],
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    images: [
      "/assets/image 1.png",
      "/assets/image 2.png",
      "/assets/image 3.png",
      "/assets/image 4.png",
      "/assets/image 5.png",
    ],
    longDescription: `
      This stylish chair is designed to offer both comfort and elegance. Made with high-quality materials, 
      it’s perfect for any modern living room, office, or cafe. The ergonomic design provides excellent 
      support for prolonged sitting, making it ideal for working or relaxing. The sleek, contemporary look 
      complements any decor, while the durable construction ensures that it will last for years. Whether 
      you're reading a book, enjoying a cup of coffee, or having a conversation with friends, this chair 
      will provide the perfect seating experience.
    `,
    additionalInfo: [
      { key: "Dimensions", value: "40x40x90 cm" },
      { key: "Weight", value: "5 kg" },
      { key: "Material", value: "Wood" },
      { key: "Color", value: "Black" },
      { key: "Assembly Required", value: "Yes" },
      { key: "Warranty", value: "1 Year" },
      { key: "Country of Manufacture", value: "Germany" },
      { key: "Max Weight Capacity", value: "150 kg" },
      { key: "Finish Type", value: "Glossy" },
      { key: "Care Instructions", value: "Wipe clean with a dry cloth" },
      { key: "Seating Capacity", value: "1 Person" },
      { key: "Package Includes", value: "1 Chair, Assembly Tools, Manual" },
    ],
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        review:
          "Great chair, very comfortable! It’s perfect for my home office and the assembly was easy.",
      },
      {
        user: "Jane Smith",
        rating: 4,
        review:
          "I love the design of this chair. It fits well in my living room, and the quality is excellent.",
      },
      {
        user: "Sam Wilson",
        rating: 4,
        review:
          "The chair is stylish and comfortable, but it took a bit longer to assemble than expected.",
      },
    ],
    relatedProducts: [
      {
        id: 1001,
        imageSrc: "/assets/image 1.png",
        name: "Slytherin",
        description: "Stylish Cafe Table",
        price: "$40",
        originalPrice: "$50",
        message: "20%",
        type: "Table",
        promotion: "Sale",
      },
      {
        id: 1002,
        imageSrc: "/assets/image 2.png",
        name: "Leviosa",
        description: "Stylish Cafe Chair",
        price: "$80",
        originalPrice: "$100",
        message: "20%",
        type: "Chair",
        promotion: "Sale",
      },
      {
        id: 1003,
        imageSrc: "/assets/image 3.png",
        name: "Gryffindor",
        description: "Elegant Dining Sofa",
        price: "$120",
        originalPrice: "$150",
        message: "20%",
        type: "Sofa",
        promotion: "New",
      },
      {
        id: 1004,
        imageSrc: "/assets/image 4.png",
        name: "Hufflepuff",
        description: "Comfortable Lounge Sofa",
        price: "$70",
        originalPrice: "$90",
        message: "22%",
        type: "Sofa",
        promotion: "Popular",
      },
    ],
    sku: "CH123456",
    countryOfManufacture: "USA",
    dimensions: "40x40x90 cm",
  };

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
