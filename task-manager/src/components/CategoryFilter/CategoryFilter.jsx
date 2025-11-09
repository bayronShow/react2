import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import './CategoryFilter.css';

export const CategoryFilter = () => {
  const { tasks } = useTasks();
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', ...new Set(tasks.map(task => task.category))];

  const filteredTasks = selectedCategory === 'Все' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="category-filter">
      <h3>Фильтр по категориям:</h3>
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="task-count">
        Показано задач: {filteredTasks.length} из {tasks.length}
      </div>
    </div>
  );
};