// src/components/TaskItem.js
import React from 'react';
import styles from '../styles/TaskItem.module.css';

const TaskItem = ({ task, onEdit, onDelete, onStart, onStop }) => {
  return (
    <div className={styles.taskItem}>
      <h3>{task.name}</h3>
      <p>Schedule: {task.schedule}</p>
      <p>Email: {task.email}</p>
      <p>Message: {task.message}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
      {task.status === 'active' ? (
        <button onClick={() => onStop(task._id)}>Stop</button>
      ) : (
        <button onClick={() => onStart(task._id)}>Start</button>
      )}
    </div>
  );
};

export default TaskItem;
