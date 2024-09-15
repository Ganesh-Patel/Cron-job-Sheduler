// src/pages/Dashboard.js
import React from 'react';
import TaskList from '../components/TaskList';
import styles from '../styles/TaskForm.module.css'; // Using TaskForm.module.css for consistency

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Task Sheduler</h1>
      <TaskList />
    </div>
  );
};

export default Dashboard;
