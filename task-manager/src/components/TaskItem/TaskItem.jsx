import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { Button } from '../common/Button/Button';
import './TaskItem.css';

export const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        label={
          <div className="task-content">
            <span className="task-text">{task.text}</span>
            <span className="task-category">{task.category}</span>
          </div>
        }
      />
      <Button
        variant="danger"
        onClick={() => deleteTask(task.id)}
      >
        Удалить
      </Button>
    </div>
  );
};