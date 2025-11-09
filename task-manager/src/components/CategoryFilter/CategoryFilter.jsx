import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import './CategoryFilter.css';

export const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const { tasks } = useTasks();

  const categories = ['Все', ...new Set(tasks.map(task => task.category))];

  return (
    <div className="category-filter">
      <h3>Фильтр по категориям:</h3>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};