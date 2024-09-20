import Loader from 'react-loader-spinner'
import {useEffect, useState} from 'react'
import Header from '../Header'
import QuizItem from '../QuizItem'
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

  useEffect(() => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      fetch('https://apis.ccbp.in/assess/questions')
        .then(response => response.json())
        .then(data => {
          setQuizData(data)
          setApiStatus(apiStatusConstants.success)
        })
    } catch (error) {
      console.log(error)
      setApiStatus(apiStatusConstants.failure)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="background-container">
        <div className="quiz-game-content" data-testid="loader">
          {apiStatus === apiStatusConstants.inProgress ? (
            <Loader
              type="TailSpin"
              color="#0EA5E9"
              height={80}
              width={80}
              radius={1}
              ariaLabel="tail-spin-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <div>
              <QuizItem quizData={quizData} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default QuizGame
