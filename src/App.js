import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Header} />
  </Switch>
)

export default App
