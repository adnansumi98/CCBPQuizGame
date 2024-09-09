import {useHistory} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const history = useHistory()
  const handleStartQuiz = () => {
    history.push('/quiz-game')
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
        </form>
      </div>
    </div>
  )
}
export default Home
