import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { Button } from '../common/Button/Button';
import { Modal } from '../common/Modal/Modal';
import { Input } from '../common/Input/Input';
import './TaskItem.css';

export const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editCategory, setEditCategory] = useState(task.category);

  const handleSave = () => {
    if (editText.trim()) {
      editTask(task.id, {
        text: editText,
        category: editCategory
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    setEditCategory(task.category);
    setIsEditing(false);
  };

  return (
    <>
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          label={
            <div className="task-content">
              <span className="task-text">{task.text}</span>
              <div className="task-meta">
                <span className="task-category">{task.category}</span>
              </div>
            </div>
          }
        />
        <div className="task-actions">
          <Button
            variant="primary"
            onClick={() => setIsEditing(true)}
          >
            Редактировать
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteTask(task.id)}
          >
            Удалить
          </Button>
        </div>
      </div>

      <Modal isOpen={isEditing} onClose={handleCancel}>
        <h3>Редактирование задачи</h3>
        <div className="edit-form">
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Текст задачи"
          />
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="category-select"
          >
            <option value="Работа">Работа</option>
            <option value="Дом">Дом</option>
            <option value="Учеба">Учеба</option>
            <option value="Личное">Личное</option>
          </select>
          <div className="edit-actions">
            <Button onClick={handleSave}>Сохранить</Button>
            <Button variant="danger" onClick={handleCancel}>
              Отмена
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};