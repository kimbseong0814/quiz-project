import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
)

app.use(express.json())

app.get('/', (_req, res) => {
  res.send('backend ok')
})

app.get('/health', (_req, res) => {
  res.status(200).send('ok')
})

export default app