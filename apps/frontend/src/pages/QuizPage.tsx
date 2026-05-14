import { useEffect, useState } from 'react'
import { createResult, getQuizzes } from '../api/client'
import type { Quiz } from '../types/quiz'

function QuizPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    getQuizzes()
      .then((data) => {
        setQuizzes(data)
      })
      .catch(() => {
        setErrorMessage('퀴즈를 불러오지 못했습니다.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const currentQuiz = quizzes[currentIndex]

  const handleSelect = (choice: string) => {
    setSelected(choice)
  }

  const handleNext = async () => {
    if (!currentQuiz) return

    if (!selected) {
      alert('답을 선택해주세요.')
      return
    }

    const nextScore = selected === currentQuiz.answer ? score + 1 : score

    if (selected === currentQuiz.answer) {
      setScore((prev) => prev + 1)
    }

    if (currentIndex === quizzes.length - 1) {
      try {
        setIsSaving(true)
        await createResult(nextScore, quizzes.length)
      } catch {
        alert('결과 저장에 실패했습니다.')
      } finally {
        setIsSaving(false)
        setIsFinished(true)
      }

      return
    }

    setCurrentIndex((prev) => prev + 1)
    setSelected('')
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelected('')
    setScore(0)
    setIsFinished(false)
  }

  if (isLoading) {
    return (
      <main className="quiz-page">
        <section className="quiz-card">
          <p>퀴즈를 불러오는 중...</p>
        </section>
      </main>
    )
  }

  if (errorMessage) {
    return (
      <main className="quiz-page">
        <section className="quiz-card">
          <p>{errorMessage}</p>
        </section>
      </main>
    )
  }

  if (!currentQuiz) {
    return (
      <main className="quiz-page">
        <section className="quiz-card">
          <p>퀴즈가 없습니다.</p>
        </section>
      </main>
    )
  }

  if (isFinished) {
    return (
      <main className="quiz-page">
        <section className="quiz-card">
          <h1>퀴즈 결과</h1>
          <p className="score">
            {quizzes.length}문제 중 {score}문제를 맞혔습니다.
          </p>
          <button className="primary-button" onClick={handleRestart}>
            다시 풀기
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="quiz-page">
      <section className="quiz-card">
        <p className="quiz-count">
          {currentIndex + 1} / {quizzes.length}
        </p>

        <img className="quiz-image" src={currentQuiz.imageUrl} alt="가족 퀴즈 사진" />

        <h1>{currentQuiz.question}</h1>

        <div className="choice-list">
          {currentQuiz.choices.map((choice) => (
            <button
              key={choice}
              className={selected === choice ? 'choice selected' : 'choice'}
              onClick={() => handleSelect(choice)}
            >
              {choice}
            </button>
          ))}
        </div>

        <button className="primary-button" onClick={handleNext} disabled={isSaving}>
          {isSaving
            ? '결과 저장 중...'
            : currentIndex === quizzes.length - 1
              ? '결과 보기'
              : '다음 문제'}
        </button>
      </section>
    </main>
  )
}

export default QuizPage