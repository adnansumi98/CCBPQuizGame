import Header from '../Header'
import './index.css'

const ErrorView = ({onRetry}) => (
  <div className="form-container">
    <img src="img/Error.png" alt="Error" className="" />
    <h1>Something went Wrong</h1>
    <p>Our servers are busy. Please try again</p>
    <button type="button" onClick={onRetry}>
      Retry
    </button>
  </div>
)

export default ErrorView
