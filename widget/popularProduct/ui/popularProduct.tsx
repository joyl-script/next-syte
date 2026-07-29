'use client'

import { productApi } from "@/entities/products/api/productsApi"
import { ProductCard } from "@/entities/products/ui/productCard"
import { useQuery } from "@tanstack/react-query"

interface PopularProductProps {
  category: string;
  searchQuery: string;
}

export const PopularProduct = ({ category, searchQuery }: PopularProductProps) => {
  const isSearching = searchQuery.trim().length > 0;

  const { data: products, isLoading, error } = useQuery({
    queryKey: isSearching ? ['products', 'search', searchQuery] : ['products', category],
    queryFn: () =>
      isSearching ? productApi.searchProducts(searchQuery) : productApi.getByCategory(category),
  })

  if (isLoading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка загрузки товаров</p>

  return (
    <div className="container">
      <h1 className="mt-15 font-bold text-3xl">
        {isSearching ? `Результаты по запросу "${searchQuery}"` : 'Popular Products'}
      </h1>
      <div className="flex flex-wrap mt-8">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}