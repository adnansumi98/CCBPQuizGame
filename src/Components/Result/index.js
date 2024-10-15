import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import {GameContext} from '../../Utilities/GameContext'
import './index.css'

const Result = () => {
  const {score, totalQuestions, gameStatus} = useContext(GameContext)
  // casting vatiables and altering
  const success = score >= 6
  const correct = score

  const renderResult = () => (
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
      {success && <p className="result-success">Quiz completed sucessfully.</p>}
      <p className="result-correct">
        You Attempted {correct} out {totalQuestions} questions as correct
      </p>
      <Link to="/game-report">
        <button type="button">Game Report</button>
      </Link>
    </div>
  )

  const renderQuizNotCompleted = () => (
    <div className="form-container form-col">
      <h1 className="error-heading"> Quiz not Completed</h1>
      <br />
      <p className="error-details">You havenot completed the Quiz yet</p>
      <br />
      <p className="error-notes">
        Go back to home page and Restart the Quiz <br />
        Do not refresh or navigate to any other pages
      </p>
      <br />
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </div>
  )

  const renderQuizNotStarted = () => (
    <div className="form-container form-col">
      <h1 className="error-heading warning-color"> Quiz not Attempted</h1>
      <br />
      <p className="error-notes">Go back to Home page and Start the Quiz</p>
      <br />
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </div>
  )

  const renderResultPage = () => {
    switch (gameStatus) {
      case 'STARTED':
        return renderQuizNotCompleted()
      case 'FINISHED':
        return renderResult()
      default:
        return renderQuizNotStarted()
    }
  }

  return (
    <div className="background-container">
      <Header />
      {renderResultPage()}
    </div>
  )
}

export default Result
