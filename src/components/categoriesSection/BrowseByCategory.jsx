import React from 'react';
import CategoryItem from './CategoryItem';
import TitleHighlight from '../TitleHighlight';
import { fetchCategories } from '@/lib/utils';


const BrowseByCategory = async () => {
  const categories = await fetchCategories()
  return (
    <div className="mx-40">
      <TitleHighlight text="Categories" />
      <h2 className="text-4xl font-bold mb-8">Browse By Category</h2>
       <div className="flex space-x-4 overflow-x-auto py-4 hide-scrollbar">
        {categories.map((category) => (
          <CategoryItem key={category.id} name={category.name} image={category.image} />
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
