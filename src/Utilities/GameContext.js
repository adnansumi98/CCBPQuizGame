import {createContext, useEffect, useState} from 'react'
import {gameStatusConstants} from './Constants'

export const GameContext = createContext()

export const GameProvider = ({children}) => {
  const [gameStatus, setGameStatus] = useState(gameStatusConstants.initial)
  const [score, setScore] = useState(0)
  const [reviewQuestions, setReviewQuestions] = useState([])
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [
    questionsIncorrectlyAnswered,
    setQuestionsIncorrectlyAnswered,
  ] = useState([])

  useEffect(() => {
    console.log('score updated:', score)
  }, [score])
  // identify the context providers and consumers
  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        reviewQuestions,
        setReviewQuestions,
        totalQuestions,
        setTotalQuestions,
        gameStatus,
        setGameStatus,
        questionsIncorrectlyAnswered,
        setQuestionsIncorrectlyAnswered,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
