import type { RequestHandler } from 'express'
import type { ZodSchema } from 'zod'

export function validateBody(schema: ZodSchema): RequestHandler {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      res.status(400).json({
        message: '요청 형식이 올바르지 않습니다.',
        errors: result.error.flatten(),
      })
      return
    }

    req.body = result.data
    next()
  }
}