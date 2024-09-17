import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
      })
      if (response.ok) {
        const data = await response.json()
        const token = data.jwt_token
        Cookies.set('jwt_token', token)
        setUsername('')
        setPassword('')
        setError('')
        history.push('/')
      } else if (username === '' || password === '') {
        setError('Please provide username and password')
      } else {
        setError('Invalid username or password')
      }
    } catch (e) {
      setError(`${e.message}`)
    }
  }

  return (
    <div className="background-container">
      <div className="login-form-container">
        <img src="img/Logo.png" alt="logo" className="logo-login" />
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-container">
            <label htmlFor="username" className="form-label">
              USERNAME
            </label>
            <input
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
