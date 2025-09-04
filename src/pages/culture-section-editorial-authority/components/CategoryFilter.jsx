import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category?.id
              ? 'bg-accent text-accent-foreground shadow-sm'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
          }`}
        >
          <Icon name={category?.icon} size={16} />
          {category?.name}
          <span className="bg-background/20 text-xs px-2 py-0.5 rounded-full">
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;