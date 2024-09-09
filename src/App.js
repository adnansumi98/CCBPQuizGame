import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import QuizGame from './components/QuizGame'
import Result from './components/Result'
import Report from './components/Report'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/quiz-game" component={QuizGame} />
    <ProtectedRoute exact path="/game-report" component={Report} />
    <ProtectedRoute exact path="/game-result" component={Result} />
    <Route exact path="/not-found" component={NotFound} />
  </Switch>
)

export default App
