import express from "express";
import { CreateTask, editTask, deleteTask, getAllTask, getTaskById, stopTask } from "../Controllers/TaskController.js";

const router =express.Router();

router.post("/createTask", CreateTask);
router.post("/editTask", editTask);
router.post("/deleteTask", deleteTask);
router.get("/getAllTasks", getAllTask);
router.get("/getTaskById", getTaskById);
router.post("/stopTask", stopTask);

CreateTask();
export default router;