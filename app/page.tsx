'use client';

import { useState } from 'react';
import { PopularProduct } from "@/widget/popularProduct/ui/popularProduct";
import { PopularCategories } from "@/widget/populatCategories/ui/popularCategories";
import { Header } from "@/widget/header/ui/header";
import { Section } from "@/widget/sections/ui/section";
import { Footer } from '@/widget/footer/ui/footer';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('groceries');
  const [searchValue, setChangeValue] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  return (
    <div>
      <Header
        searchValue={searchValue}
        onSearchChange={setChangeValue}
        onSearchSubmit={() => setActiveSearch(searchValue)}
      />
      <Section />
      <PopularCategories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <PopularProduct category={selectedCategory} searchQuery={activeSearch} />
      <Footer />
    </div>
  );
}