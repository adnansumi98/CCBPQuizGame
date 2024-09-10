import Loader from 'react-loader-spinner'
import {useEffect, useState} from 'react'
import Header from '../Header'
import QuizItem from '../QuizItem'
import './index.css'

const QuizGame = () => {
  const [quizData, setQuizData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      fetch('https://apis.ccbp.in/assess/questions')
        .then(response => response.json())
        .then(data => setQuizData(data))
        .then(() => setIsLoading(false))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="background-container">
        <div className="quiz-game-content">
          {isLoading ? (
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
