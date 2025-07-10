import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTaskById, postTask, deleteTask, putTask } from "../controllers/task-controllers.js";

const router = Router()

app.get('/tasks', authRequired, (req,res) => getTasks)
app.get('/task:id', authRequired, (req,res) => getTaskById)
app.post('/addTask', authRequired, (req,res) => postTask)
app.delete('/deleteTask:id', authRequired, (req,res) => deleteTask)
app.get('/editTask:id', authRequired, (req,res) => putTask)

export default router

