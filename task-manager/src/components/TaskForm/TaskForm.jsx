import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { Input } from '../common/Input/Input';
import { Button } from '../common/Button/Button';
import './TaskForm.css';

export const TaskForm = () => {
  const { addTask } = useTasks();
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('Работа');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    addTask({
      text: taskText,
      category: category,
    });

    setTaskText('');
    setCategory('Работа');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <Input
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Введите новую задачу..."
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        <option value="Работа">Работа</option>
        <option value="Дом">Дом</option>
        <option value="Учеба">Учеба</option>
        <option value="Личное">Личное</option>
      </select>
      <Button type="submit">Добавить</Button>
    </form>
  );
};