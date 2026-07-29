import { apiClient } from "@/shared/api/baseClient";
import type { Product } from '../model/types';

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productApi = {
  getProducts: async () => {
    const { data } = await apiClient.get<ProductsResponse>('/products/category/groceries');
    return data.products;
  },
  getByCategory: async (category: string) => {
    const { data } = await apiClient.get<ProductsResponse>(`/products/category/${category}`);
    return data.products;
  },
  searchProducts: async (query: string) => {
    const { data } = await apiClient.get<ProductsResponse>('/products/search', {
      params: { q: query },
    });
    return data.products;
  },
};