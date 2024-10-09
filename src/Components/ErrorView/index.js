import './index.css'

const ErrorView = ({onRetry}) => (
  <div className="form-container form-col">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-assess-failure-img.png"
      alt="failure view"
      className=""
    />
    <h1>Something went Wrong</h1>
    <p>Our servers are busy please try again</p>
    <button type="button" onClick={onRetry}>
      Retry
    </button>
  </div>
)

export default ErrorView
