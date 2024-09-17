import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }, [history])

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
      })
      const data = await response.json()
      if (response.ok) {
        const token = data.jwt_token
        Cookies.set('jwt_token', token, {expires: 30})
        setUsername('')
        setPassword('')
        setError('')
        history.replace('/')
      } else {
        const errorMessage = data.error_msg
        setError(errorMessage)
      }
    } catch (e) {
      setError(`${e.message}`)
    }
  }

  return (
    <div className="background-container">
      <div className="login-form-container">
        <img
          src="img/Logo.png"
          className="logo-login"
          alt="login website logo"
        />
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-container">
            <label htmlFor="username" className="form-label">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              className="form-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="form-label">
              PASSWORD
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              className="form-input"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="show-password"
              onChange={e => setShowPassword(e.target.checked)}
            />
            <label htmlFor="show-password">show password</label>
          </div>
          <div>
            <button type="submit" className="form-button">
              Login
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
