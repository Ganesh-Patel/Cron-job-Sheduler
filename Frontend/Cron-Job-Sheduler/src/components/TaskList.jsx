// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import { getTasks } from '../utils/api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import styles from '../styles/TaskList.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const handleStart = async (id) => {
    await updateTask(id, { status: 'active' });
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleStop = async (id) => {
    await updateTask(id, { status: 'stopped' });
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleSave = () => {
    setShowForm(false);
    setEditingTask(null);
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    fetchTasks();
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  return (
    <div className={styles.taskList}>
      <button onClick={() => setShowForm(true)}>Create Task</button>
      {showForm && (
        <TaskForm task={editingTask} onSave={handleSave} onCancel={handleCancel} />
      )}
      <div>
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStart={handleStart}
            onStop={handleStop}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
