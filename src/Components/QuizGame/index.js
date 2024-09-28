import Loader from 'react-loader-spinner'
import {useEffect, useState} from 'react'
import Header from '../Header'
import QuizItem from '../QuizItem'
import ErrorView from '../ErrorView'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const QuizGame = () => {
  const [quizData, setQuizData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const fetchData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const response = await fetch('https://apis.ccbp.in/assess/questions')
      if (response.ok) {
        const data = await response.json()
        setQuizData(data)
        setApiStatus(apiStatusConstants.success)
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
  }, [])

  useEffect(() => {
    if (apiStatus === apiStatusConstants.success) {
      const timer = setTimeout(() => {
        setApiStatus(apiStatusConstants.success)
      }, 1000) // Add a 1 second delay
      return () => clearTimeout(timer)
    }
    return () => {} // Always return an empty object
  }, [apiStatus])

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
