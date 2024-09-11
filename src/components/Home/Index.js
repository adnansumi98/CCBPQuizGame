import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const history = useHistory()

  useEffect(() => {
    let timer
    if (isGameStarted) {
      setTimeout(() => {
        history.push('/quiz-game')
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [isGameStarted, history])

  const handleStartQuiz = e => {
    e.preventDefault()
    setIsGameStarted(true)
  }

  return (
    <div className="home-container">
      <Header />
      <div className="start-quiz-container">
        <form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png"
            alt="start quiz game"
            className="home-image"
          />
          <h1 className="home-title">
            How Many Of These Questions Do You Actually Know?
          </h1>
          <p className="home-description">
            Test your knowledge and see how many of these questions you actually
            know.
          </p>
          <button
            type="submit"
            className="home-button"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
          {isGameStarted && (
            <div className="warning-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-error-img.png"
                alt="warning icon"
                className="warning-icon"
              />
              <p className="warning-text">
                All the progress will be lost, if you reload during the quiz
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
export default Home