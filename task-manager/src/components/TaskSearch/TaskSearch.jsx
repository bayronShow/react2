import React from 'react';
import { Input } from '../common/Input/Input';
import './TaskSearch.css';

export const TaskSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="task-search">
      <Input
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Поиск задач..."
        className="search-input"
      />
    </div>
  );
};