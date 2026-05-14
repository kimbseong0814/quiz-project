import type { Request, Response, NextFunction } from 'express'
import { getQuizById, getQuizzes } from './quizzes.service.js'

export function getQuizzesController(_req: Request, res: Response, next: NextFunction) {
  try {
    const quizzes = getQuizzes()

    res.json({
      data: quizzes,
    })
  } catch (error) {
    next(error)
  }
}

export function getQuizByIdController(req: Request, res: Response, next: NextFunction) {
  try {
    const quizId = Number(req.params.id)
    const quiz = getQuizById(quizId)

    res.json({
      data: quiz,
    })
  } catch (error) {
    next(error)
  }
}