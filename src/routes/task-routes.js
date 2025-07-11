import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTaskById, postTask, deleteTask, putTask } from "../controllers/task-controllers.js";
import { validateSchema } from "../middlewares/validator.js";
import { taskSchema } from "../schemas/task-schema.js";

const router = Router()

router.get('/tasks', validateSchema(taskSchema), authRequired, getTasks)
router.get('/task/:id', validateSchema(taskSchema), authRequired, getTaskById)
router.post('/addTask', validateSchema(taskSchema), authRequired, postTask)
router.delete('/deleteTask:id', validateSchema(taskSchema), authRequired, deleteTask)
router.get('/editTask:id', validateSchema(taskSchema), authRequired, putTask)

export default router

