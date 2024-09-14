import cron from 'node-cron';
import { Task, TaskLog } from '../models/taskModel.js';
import { sendEmail } from './SendMail.js';

// Schedule a task
export const scheduleTask = async (task) => {
  const job = cron.schedule(task.schedule, async () => {
    try {
      // Send email
      await sendEmail(task.email, 'Scheduled Task', task.message);

      // Log successful execution
      await TaskLog.create({
        taskId: task._id,
        executedAt: new Date(),
        status: 'success'
      });
      console.log(`Task ${task.name} executed successfully at ${new Date().toLocaleString()}`);
    } catch (error) {
      // Log failed execution
      await TaskLog.create({
        taskId: task._id,
        executedAt: new Date(),
        status: 'failure'
      });
      console.error(`Task ${task.name} failed at ${new Date().toLocaleString()}: ${error.message}`);
    }
  });

  job.start();
};

// Start all active tasks on server startup
export const initializeTasks = async () => {
  const tasks = await Task.find({ status: 'active' });
  tasks.forEach(task => scheduleTask(task));
};
