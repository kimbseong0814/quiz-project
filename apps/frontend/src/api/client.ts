import type { Quiz } from '../types/quiz'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getQuizzes() {
  const response = await fetch(`${API_BASE_URL}/api/quizzes`)

  if (!response.ok) {
    throw new Error('퀴즈 목록을 불러오지 못했습니다.')
  }

  const result: { data: Quiz[] } = await response.json()

  return result.data
}