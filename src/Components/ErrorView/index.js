import {useHistory} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const ErrorView = () => {
  const history = useHistory()

  const handleRetry = () => {
    history.goBack()
  }

  return (
    <div className="background-container">
      <Header />
      <div className="form-container">
        <img src="img/Error.png" alt="Error" />
        <h1>Something went Wrong</h1>
        <p>Our servers are busy. Please try again</p>
        <button type="button" onClick={handleRetry}>
          Retry
        </button>
      </div>
    </div>
  )
}

export default ErrorView
