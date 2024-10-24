import {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Question from '../Question'
import {GameContext} from '../../Utilities/GameContext'
import {gameStatusConstants} from '../../Utilities/Constants'
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
  const {gameStatus, setGameStatus} = useContext(GameContext)

  // for timer and question no update when time is up
  useEffect(() => {
    let interval
    if (timer > 0 && isSubmitted === false) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
    }
    // TODO: Donot increment question number here
    // else if (timer === 0 && questionNo + 1 === total) {
    //   setIsSubmitted(true)
    //   setGameStatus(gameStatusConstants.finished)
    // }
    // else {
    //   setQuestionNo(prev => (prev - 1 < total ? prev + 1 : prev))
    //   setTimer(15)
    //   setIsSubmitted(false)
    // }
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
      // the result pages wil be redirected after the status changed
      setGameStatus(gameStatusConstants.finished)
    }
    // eslint-disable-next-line
  }, [questionNo, total, timer, history])

  // game result redirect
  useEffect(() => {
    if (gameStatus === gameStatusConstants.finished) {
      history.push('/game-result')
    }
    // eslint-disable-next-line
  }, [gameStatus])

  // Next Button OnClick
  const handleNextQuestion = () => {
    if (questionNo + 1 < total) {
      setQuestionNo(prevQuestionNo => prevQuestionNo + 1)
      setTimer(15)
      setIsSubmitted(false)
    } else if (questionNo === total - 1 && isSubmitted === true) {
      setGameStatus(gameStatusConstants.finished)
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
      <button
        data-testid="next-button"
        type="button"
        className={`next-button ${isSubmitted ? 'nxtbtn-active' : ''}`}
        onClick={handleNextQuestion}
        // TODO: Uncomment for dynamic next button
        // disabled={!isSubmitted}
        hidden={questionNo === 9}
      >
        Next Question
      </button>
    </div>
  )
}

export default QuizItem
