import React from 'react';
import { TaskItem } from '../TaskItem/TaskItem';
import './TaskList.css';

export const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">Задачи не найдены. Попробуйте изменить фильтры или добавьте новую задачу!</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};