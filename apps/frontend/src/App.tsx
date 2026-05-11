import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('로딩 중...')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/`)
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage('연결 실패'))
  }, [])

  return (
    <div>
      <h1>가족 퀴즈 프로젝트</h1>
      <p>{message}</p>
    </div>
  )
}

export default App