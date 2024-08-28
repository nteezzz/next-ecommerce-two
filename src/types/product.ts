export type Product = {
    id: number;
    type: string;
    name: string;
    price: string;
    originalPrice: string;
    promotion: string;
    ratings: number;
    shortDescription: string;
    variants: string[];
    colors: string[];
    images: string[];
    longDescription: string;
    additionalInfo: { key: string; value: string }[];
    reviews: { user: string; rating: number; review: string }[];
    relatedProducts: number[];
    sku: string;
    countryOfManufacture: string;
    dimensions: string;
  };

  export type CartProduct={
    id: number;
    type: string;
    name: string;
    price: string;
    originalPrice: string;
    promotion: string;
    images: string;
    sku: string;
    selectedVariant: string;
    selectedColor: string;
    selectedQuantity:string;
  };
  export type WishlistProduct={
    id: number;
    
    name: string;
    price: string;
    originalPrice: string;
    promotion: string;
    images: string;
    sku: string;
    // selectedVariant: string;
    // selectedColor: string;
    // selectedQuantity:string;
  };