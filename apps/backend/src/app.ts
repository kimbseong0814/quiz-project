import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import router from './routes/index.js'
import openApiDocument from './docs/swagger.js'

dotenv.config()

const app: Express = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
)

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument))

app.get('/openapi.json', (_req, res) => {
  res.json(openApiDocument)
})

app.get('/', (_req, res) => {
  res.send('backend ok')
})

app.get('/health', (_req, res) => {
  res.status(200).send('ok')
})

app.use('/api', router)

export default app