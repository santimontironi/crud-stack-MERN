import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTaskById, postTask, deleteTask, putTask } from "../controllers/task-controllers.js";

const router = Router()

app.get('/tasks', authRequired, getTasks)
app.get('/task:id', authRequired, getTaskById)
app.post('/addTask', authRequired, postTask)
app.delete('/deleteTask:id', authRequired, deleteTask)
app.get('/editTask:id', authRequired, putTask)

export default router

