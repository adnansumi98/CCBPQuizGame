import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="background-container">
    <Header />
    <div className="form-container">
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
          Test yourself with these easy quiz questions and answers
        </p>
        <Link to="/quiz-game">
          <button type="button" className="home-button">
            Start Quiz
          </button>
        </Link>
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
      </form>
    </div>
  </div>
)

export default Home
