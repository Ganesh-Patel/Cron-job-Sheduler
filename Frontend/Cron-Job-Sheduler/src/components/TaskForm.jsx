// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../utils/api';
import styles from '../styles/TaskForm.module.css';

const TaskForm = ({ task, onSave, onCancel }) => {

  const [name, setName] = useState(task ? task.name : '');
  const [minute, setMinute] = useState(task ? task.schedule.minute : '*');
  const [hour, setHour] = useState(task ? task.schedule.hour : '*');
  const [dayOfMonth, setDayOfMonth] = useState(task ? task.schedule.dayOfMonth : '*');
  const [month, setMonth] = useState(task ? task.schedule.month : '*');
  const [dayOfWeek, setDayOfWeek] = useState(task ? task.schedule.dayOfWeek : '*');
  const [email, setEmail] = useState(task ? task.email : '');
  const [message, setMessage] = useState(task ? task.message : '');
  const [expiration, setExpiration] = useState(task ? new Date(task.expiration).toISOString().slice(0, 16) : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const schedule = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
    const taskData = { name, schedule, email, message, expiration };
    
      await createTask(taskData);
    
    onSave();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Task Name"
        />
      </label>
      
      <label>
        Schedule:
        <div className={styles.scheduleContainer}>
          <select value={minute} onChange={(e) => setMinute(e.target.value)} required>
            <option value="*">Every Minute</option>
            {[...Array(60).keys()].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <select value={hour} onChange={(e) => setHour(e.target.value)} required>
            <option value="*">Every Hour</option>
            {[...Array(24).keys()].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <select value={dayOfMonth} onChange={(e) => setDayOfMonth(e.target.value)} required>
            <option value="*">Every Day</option>
            {[...Array(32).keys()].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <select value={month} onChange={(e) => setMonth(e.target.value)} required>
            <option value="*">Every Month</option>
            {[...Array(13).keys()].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <select value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)} required>
            <option value="*">Every Day of Week</option>
            {['0 (Sunday)', '1 (Monday)', '2 (Tuesday)', '3 (Wednesday)', '4 (Thursday)', '5 (Friday)', '6 (Saturday)'].map((day, index) => (
              <option key={index} value={index}>{day}</option>
            ))}
          </select>
        </div>
      </label>
      
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address"
        />
      </label>
      
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Task Message"
        />
      </label>
      
      <label>
        Expiration:
        <input
          type="datetime-local"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="Expiration Date"
        />
      </label>
      
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitButton}>
          {task ? 'Update Task' : 'Create Task'}
        </button>
        <button type="button" className={styles.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
