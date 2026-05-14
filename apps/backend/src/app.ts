import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/index.js'
import { errorHandler } from './common/errors/errorHandler.js'
import { openApiDocument, swaggerUiServe, swaggerUiSetup } from './docs/swagger.js'

dotenv.config()

const app: Express = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
)

app.use(express.json())

app.use('/api-docs', swaggerUiServe, swaggerUiSetup)

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

app.use(errorHandler)

export default app