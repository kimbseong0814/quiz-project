import type { ErrorRequestHandler } from 'express'
import { AppError } from './AppError.js'

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
    })
    return
  }

  res.status(500).json({
    message: '서버 오류가 발생했습니다.',
  })
}