import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import './Stats.css';

export const Stats = () => {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="stats">
      <h3>📊 Статистика</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">{totalTasks}</span>
          <span className="stat-label">Всего задач</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{completedTasks}</span>
          <span className="stat-label">Выполнено</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{completionPercentage}%</span>
          <span className="stat-label">Прогресс</span>
        </div>
      </div>
    </div>
  );
};