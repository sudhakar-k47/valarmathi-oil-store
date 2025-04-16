
import React from 'react';
import { categories } from '../../data/products';

type CategoryFilterProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-olive-300 scrollbar-track-transparent">
      <div className="flex gap-2 pb-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-olive-600 text-white'
                : 'bg-secondary text-foreground hover:bg-olive-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
