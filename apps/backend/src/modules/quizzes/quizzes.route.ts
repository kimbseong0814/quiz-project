import { Router } from 'express'
import { getQuizByIdController, getQuizzesController } from './quizzes.controller.js'

const quizzesRouter = Router()

quizzesRouter.get('/', getQuizzesController)
quizzesRouter.get('/:id', getQuizByIdController)

export default quizzesRouter