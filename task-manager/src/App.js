import React, { useState, useMemo } from 'react';
import { TaskProvider } from './contexts/TaskContext';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import { CategoryFilter } from './components/CategoryFilter/CategoryFilter';
import { Stats } from './components/Stats/Stats';
import { TaskSearch } from './components/TaskSearch/TaskSearch';
import { TaskSort } from './components/TaskSort/TaskSort';
import { useTasks } from './hooks/useTasks';
import { sortTasks } from './utils/helpers';
import './App.css';

//компонент для основной логики приложения
function TaskManager() {
  const { tasks } = useTasks();
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  //фильтрация и поиск задач
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks;

    //фильтрация по категории
    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(task => task.category === selectedCategory);
    }

    //поиск по тексту
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    //сортировка
    return sortTasks(filtered, sortBy);
  }, [tasks, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="app">
      <header className="header">
        <h1>✅ Менеджер задач</h1>
        <p>Организуйте свои задачи по категориям</p>
      </header>
      
      <Stats />
      
      <div className="controls">
        <TaskSearch 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <TaskSort 
          sortBy={sortBy} 
          onSortChange={setSortBy} 
        />
      </div>

      <TaskForm />
      
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <TaskList tasks={filteredAndSortedTasks} />
    </div>
  );
}

//главный компонент
function App() {
  return (
    <TaskProvider>
      <TaskManager />
    </TaskProvider>
  );
}

export default App;