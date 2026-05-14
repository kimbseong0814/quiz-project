import { Router } from 'express'
import { validateBody } from '../../common/middleware/validator.js'
import { createResultController, getResultsController } from './results.controller.js'
import { CreateResultBodySchema } from './results.dto.js'

const resultsRouter = Router()

resultsRouter.get('/', getResultsController)
resultsRouter.post('/', validateBody(CreateResultBodySchema), createResultController)

export default resultsRouter