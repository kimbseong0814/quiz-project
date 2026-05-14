import { Router } from 'express'
import { quizzes } from './quizzes.data.js'

const quizzesRouter = Router()

quizzesRouter.get('/', (_req, res) => {
  res.json({
    data: quizzes,
  })
})

quizzesRouter.get('/:id', (req, res) => {
  const quizId = Number(req.params.id)
  const quiz = quizzes.find((item) => item.id === quizId)

  if (!quiz) {
    res.status(404).json({
      message: '퀴즈를 찾을 수 없습니다.',
    })
    return
  }

  res.json({
    data: quiz,
  })
})

export default quizzesRouter