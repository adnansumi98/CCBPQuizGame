import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import Login from './Components/Login'
import Home from './Components/Home'
import QuizGame from './Components/QuizGame'
import Result from './Components/Result'
import Report from './Components/Report'
import NotFound from './Components/NotFound'
import {GameProvider} from './Utilities/GameContext'
import './App.css'

const App = () => (
  <GameProvider>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/quiz-game" component={QuizGame} />
      <ProtectedRoute exact path="/game-result" component={Result} />
      <ProtectedRoute exact path="/game-report" component={Report} />
      <Route path="*" component={NotFound} />
    </Switch>
  </GameProvider>
)

export default App
