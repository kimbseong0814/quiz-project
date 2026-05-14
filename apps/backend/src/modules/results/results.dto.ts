import { z } from '../../common/lib/zod.js'

export const CreateResultBodySchema = z.object({
  score: z.number(),
  total: z.number(),
})

export type CreateResultBodyDto = z.infer<typeof CreateResultBodySchema>

export type QuizResultDto = {
  id: number
  score: number
  total: number
  createdAt: string
}