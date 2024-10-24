import Loader from 'react-loader-spinner'
import {useEffect, useState, useContext} from 'react'
import {GameContext} from '../../Utilities/GameContext'
import Header from '../Header'
import QuizItem from '../QuizItem'
import ErrorView from '../ErrorView'
import {
  apiStatusConstants,
  gameStatusConstants,
} from '../../Utilities/Constants'
import './index.css'

const QuizGame = () => {
  const [quizData, setQuizData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const {setTotalQuestions, setScore, setGameStatus} = useContext(GameContext)

  const fetchData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const response = await fetch('https://apis.ccbp.in/assess/questions')
      if (response.ok) {
        const data = await response.json()
        setQuizData(data)
        setTotalQuestions(data.total)
        setApiStatus(apiStatusConstants.success)
        setGameStatus(gameStatusConstants.started)
        setScore(0)
      } else {
        setApiStatus(apiStatusConstants.failure)
      }
    } catch (error) {
      console.log(error)
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="TailSpin"
        color="#0EA5E9"
        height={80}
        width={80}
        radius={1}
        ariaLabel="tail-spin-loading"
      />
    </div>
  )

  const renderFailureView = () => (
    <ErrorView onRetry={fetchData} /> // Pass fetchData as onRetry prop
  )

  const renderSuccessView = () => <QuizItem quizData={quizData} />

  const renderQuizGameContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <div className="background-container">
      <Header />
      <div className="form-container">
        <div className="quiz-game-content">{renderQuizGameContent()}</div>
      </div>
    </div>
  )
}

export default QuizGame
