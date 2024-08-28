import { products } from "@/data/products";
import { Product } from "@/types/product";

export function getProductDetails(id: number): Product | undefined {
  return products.find(product => product.id === id);
}