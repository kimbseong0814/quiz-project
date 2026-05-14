import { Router } from 'express'
import quizzesRouter from '../modules/quizzes/quizzes.route.js'
import resultsRouter from '../modules/results/results.route.js'

const router = Router()

router.use('/quizzes', quizzesRouter)
router.use('/results', resultsRouter)

export default router