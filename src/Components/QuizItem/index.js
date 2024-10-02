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
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scoreUpdated, setScoreUpdated] = useState(false)
  const history = useHistory()

  // for timer and question no update when time is up
  useEffect(() => {
    let interval
    if (timer > 0 && isSubmitted === false) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [timer])

  // useEffect(() => {
  //   console.log(isSubmitted)
  // }, [isSubmitted])

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
      setIsSubmitted(false)
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
          <p>Question</p>
          <p data-testid="question-number">
            {activeQuestion}/{totalQuestions}
          </p>
        </div>
        <div className="timer-container">
          <p data-testid="timer">{timer}</p>
        </div>
      </div>
      <Question
        questionData={questiondata}
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        scoreUpdated={scoreUpdated}
        setScoreUpdated={setScoreUpdated}
      />
      <div className="next-button-container">
        <button
          data-testid="next-button"
          type="button"
          className={`next-button ${isSubmitted ? 'nxtbtn-active' : ''}`}
          onClick={handleNextQuestion}
          disabled={!isSubmitted}
        >
          Next Question
        </button>
      </div>
    </div>
  )
}

export default QuizItem
