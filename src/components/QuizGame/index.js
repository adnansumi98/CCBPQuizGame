import {useEffect, useState} from 'react'
import './index.css'

const QuizGame = () => {
  const [quizData, setQuizData] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    fetch('https://api.example.com/quiz')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div className="quiz-game-container">
      <h1>Quiz Game</h1>
    </div>
  )
}
export default QuizGame
