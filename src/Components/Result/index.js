import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import {GameContext} from '../../Utilities/GameContext'
import './index.css'

const Result = () => {
  const {score, totalQuestions} = useContext(GameContext)
  // casting vatiables and altering
  const success = score >= 6
  const correct = score

  return (
    <div className="background-container">
      <Header />
      <div className="form-container form-col">
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
}

export default Result
