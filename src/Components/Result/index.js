import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import {GameContext} from '../../Utilities/GameContext'
import {gameStatusConstants} from '../../Utilities/Constants'
import './index.css'

const Result = () => {
  const {score, totalQuestions} = useContext(GameContext)
  // casting vatiables and altering
  const success = score >= 6
  const correct = score

  const renderResult = () => (
    <div className="background-container">
      <Header />
      <div
        className="form-container form-col"
        style={{
          backgroundImage: success ? `url('/img/Win.png') ` : null,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
        }}
      >
        <img
          src={success ? '/img/Success.png' : '/img/Failure.png'}
          alt={success ? 'success' : 'failure'}
          className="result-image"
        />
        <p className="result">{success ? 'Congrats' : 'You Lose'}!</p>
        <p className="result-percentage">
          <span>{correct * totalQuestions}%</span> Correctly Answered
        </p>
        {success && (
          <p className="result-success">Quiz completed sucessfully.</p>
        )}
        <p className="result-correct">
          You Attempted {correct} out {totalQuestions} questions as correct
        </p>
        <Link to="/game-report">
          <button type="button">Game Report</button>
        </Link>
      </div>
    </div>
  )

  const renderQuizNotCompleted = () => (
    <div className="background-container">
      <h1 className="error-heading"> Quiz not yet Completed</h1>
      <p className="error-details">You havenot completed the Quiz yet</p>
      <p className="error-notes">
        Go back to home page and Restart the Quiz <br />
        Do not refresh or navigate to any other pages
      </p>
    </div>
  )

  const renderQuizNotStarted = () => (
    <div className="background-container">
      <h1 className="error-heading"> Quiz not yet Attempted</h1>
      <p className="error-details">You havenot completed the Quiz yet</p>
      <p className="error-notes">Go back to Home page and Start the Quiz</p>
      <Link to="/" />
    </div>
  )

  const renderResultPage = () => {
    switch (gameStatusConstants) {
      case 'STARTED':
        return renderQuizNotCompleted()
      case 'FINISHED':
        return renderResult()
      case 'INITIAL':
        return renderQuizNotStarted()

      default:
        return null
    }
  }

  return renderResultPage()
}

export default Result
