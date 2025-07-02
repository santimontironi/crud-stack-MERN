import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth-routes.js'

const app = express()

app.use(morgan('dev'))

app.use(express.json()) // para parsear JSON en el body de las peticiones

app.use(authRoutes)

export default app