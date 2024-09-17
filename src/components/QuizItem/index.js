import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Question from '../Question'
import './index.css'

const QuizItem = props => {
  const {quizData} = props
  const {total, questions} = quizData
  const [questionNo, setQuestionNo] = useState(0)
  const [questiondata, setQuestionData] = useState([])
  const [timer, setTimer] = useState(15)

  const history = useHistory()

  // for timer and question no update when time is up
  useEffect(() => {
    let interval
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
    } else {
      setQuestionNo(prevQuestionNo => prevQuestionNo + 1)
      setTimer(15)
    }
    return () => clearInterval(interval)
  }, [timer])

  // set question data for current question
  useEffect(() => {
    if (questionNo + 1 <= total) {
      setQuestionData(questions[questionNo])
    }
  }, [questionNo, total, questions])

  // for last question
  useEffect(() => {
    if (questionNo + 1 === total && timer === 0) {
      history.push('/game-result')
    }
  }, [questionNo, total, timer, history])

  const handleNextQuestion = () => {
    if (questionNo + 1 < total) {
      setQuestionNo(prevQuestionNo => prevQuestionNo + 1)
      setTimer(15)
    } else {
      history.push('/game-result')
    }
  }

  const activeQuestion = questionNo + 1
  const totalQuestions = total
  return (
    <div className="quiz-item-container">
      <div className="stats-container">
        <div className="question-no-container">
          <p>
            Question <br />
            <span>
              {activeQuestion}/{totalQuestions}
            </span>
          </p>
        </div>
        <div className="timer-container">
          <p>{timer}</p>
        </div>
      </div>
      <Question questionData={questiondata} />
      <div className="next-button-container">
        <button
          type="button"
          className="next-button"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  )
}

export default QuizItem
