import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth-routes.js'
import taskRouter from './routes/task-routes.js'
import cookieParser from 'cookie-parser'
import cors from "cors";

const app = express()

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use(morgan('dev'))

app.use(express.json()) // para parsear JSON en el body de las peticiones

app.use(cookieParser())

app.use(authRoutes)
app.use(taskRouter)

export default app