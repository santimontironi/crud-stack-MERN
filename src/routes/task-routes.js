import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTaskById, postTask, deleteTask, putTask } from "../controllers/task-controllers.js";
import { validateSchema } from "../middlewares/validator.js";
import { taskSchema } from "../schemas/task-schema.js";

const router = Router()

router.get('/tasks', authRequired, validateSchema(task), getTasks)
router.get('/task/:id', authRequired, validateSchema(task), getTaskById)
router.post('/addTask', authRequired, validateSchema(task), postTask)
router.delete('/deleteTask:id', authRequired, validateSchema(task), deleteTask)
router.get('/editTask:id', authRequired, validateSchema(task), putTask)

export default router

