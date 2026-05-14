import { Router } from 'express'
import quizzesRouter from '../modules/quizzes/quizzes.route.js'

const router = Router()

router.use('/quizzes', quizzesRouter)

export default router