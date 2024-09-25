import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import './index.css'

const Header = () => {
  const history = useHistory()
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  return (
    <div className="header-container">
      <img src="/img/Logo.png" alt="website logo" className="header-logo" />
      <div className="logout-container">
        <img
          src="/img/log-out.png"
          alt="logout"
          className="logout-icon"
          onClick={handleLogout}
        />
        <button
          type="button"
          onClick={handleLogout}
          className="logout-button desktop"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
