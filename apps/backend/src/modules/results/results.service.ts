import { formatDate } from '../../common/utils/formatDate.js'
import type { CreateResultBodyDto, QuizResultDto } from './results.dto.js'

const results: QuizResultDto[] = []

export function getResults() {
  return results
}

export function createResult(body: CreateResultBodyDto) {
  const result: QuizResultDto = {
    id: results.length + 1,
    score: body.score,
    total: body.total,
    createdAt: formatDate(new Date()),
  }

  results.push(result)

  return result
}