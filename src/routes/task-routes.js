import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTaskById, postTask, deleteTask, putTask } from "../controllers/task-controllers.js";
import { validateSchema } from "../middlewares/validator.js";
import { taskSchema } from "../schemas/task-schema.js";

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/task/:id', authRequired, getTaskById)
router.post('/addTask', authRequired, validateSchema(taskSchema), postTask)
router.delete('/deleteTask:id', authRequired, deleteTask)
router.get('/editTask:id', authRequired, putTask)

export default router

