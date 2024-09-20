import {createContext, useEffect, useState} from 'react'

export const GameContext = createContext()

export const GameProvider = ({children}) => {
  const [score, setScore] = useState(0)
  const [reviewquestions, setReviewQuestions] = useState([])

  useEffect(() => {
    console.log('score updated:', score)
  }, [score])
  // identify the context providers and consumers
  return (
    <GameContext.Provider
      value={{score, setScore, reviewquestions, setReviewQuestions}}
    >
      {children}
    </GameContext.Provider>
  )
}