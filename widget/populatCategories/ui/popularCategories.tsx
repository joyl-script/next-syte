'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { categoryApi } from '@/entities/category/api/categoryApi';

interface PopularCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const PopularCategories = ({ selectedCategory, onSelectCategory }: PopularCategoriesProps) => {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryApi.getCategories,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки категорий</p>;

  return (
    <div className="flex flex-wrap gap-4 mt-15">
      <div className='container'>
        <h1 className='font-bold text-3xl'>Popular Categories</h1>
        {categories?.map((category) => (
          <button
            key={category.slug}
            onClick={() => onSelectCategory(category.slug)}
            className={`mt-8 cursor-pointer border-2 rounded-md p-4 transition-colors ${selectedCategory === category.slug ? 'border-[#2C742F]' : 'border-[#E5E5E5]'
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};