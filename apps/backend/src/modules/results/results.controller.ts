import type { Request, Response, NextFunction } from 'express'
import { createResult, getResults } from './results.service.js'
import type { CreateResultBodyDto } from './results.dto.js'

export function getResultsController(_req: Request, res: Response, next: NextFunction) {
  try {
    const results = getResults()

    res.json({
      data: results,
    })
  } catch (error) {
    next(error)
  }
}

export function createResultController(req: Request, res: Response, next: NextFunction) {
  try {
    const body = req.body as CreateResultBodyDto
    const result = createResult(body)

    res.status(201).json({
      data: result,
    })
  } catch (error) {
    next(error)
  }
}