import React from 'react';
import './TaskSort.css';

export const TaskSort = ({ sortBy, onSortChange }) => {
  return (
    <div className="task-sort">
      <label>Сортировка: </label>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="sort-select"
      >
        <option value="newest">Сначала новые</option>
        <option value="oldest">Сначала старые</option>
        <option value="completed">Сначала выполненные</option>
        <option value="active">Сначала активные</option>
      </select>
    </div>
  );
};