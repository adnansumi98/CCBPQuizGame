import Header from '../Header'
import './index.css'

const Result = ({success, score, correct, total}) => (
  <div className="background-container">
    <Header />
    <div className="form-container">
      <img
        src={success ? '/img/Success.png' : '/img/Failure.png'}
        alt={success ? 'success' : 'failure'}
        className="result-image"
      />
      <p className="result">{success ? 'Congrats' : 'You Lose'}!</p>
      <p className="result-percentage">
        <span>{score}%</span> Correctly Answered
      </p>
      {success && <p className="result-success">Quiz completed sucessfully.</p>}
      <p className="result-correct">
        You Attempted {correct} out {total} questions as correct
      </p>
    </div>
  </div>
)

export default Result
