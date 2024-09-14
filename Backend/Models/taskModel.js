import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: String,
  schedule: String,  // Cron schedule string, e.g., '* * * * *'
  email: String,
  message: String,
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

const logSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  executedAt: Date,
  status: String,
});

export const Task = mongoose.model('Task', taskSchema);
export const TaskLog = mongoose.model('TaskLog', logSchema);
