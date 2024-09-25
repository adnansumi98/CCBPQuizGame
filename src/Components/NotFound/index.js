import {useHistory} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const history = useHistory()
  return (
    <div className="form-container">
      <img
        src="/img/not-found.png"
        className="not-found-image"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found
      </p>
      <p className="not-found-description">Please go back to the homepage</p>
      <button type="button" onClick={() => history.push('/')}>
        Home Page
      </button>
    </div>
  )
}

export default NotFound
