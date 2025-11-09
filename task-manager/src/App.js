import React from 'react';
import { TaskProvider } from './contexts/TaskContext';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import { CategoryFilter } from './components/CategoryFilter/CategoryFilter';
import { Stats } from './components/Stats/Stats';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <header className="header">
          <h1>✅ Менеджер задач</h1>
          <p>Организуйте свои задачи по категориям</p>
        </header>
        
        <Stats />
        <TaskForm />
        <CategoryFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;