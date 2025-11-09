import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import { TaskItem } from '../TaskItem/TaskItem';
import './TaskList.css';

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">Список задач пуст. Добавьте первую задачу!</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};