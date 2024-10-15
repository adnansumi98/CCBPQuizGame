import {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Options from '../Options'
import {gameStatusConstants} from '../../Utilities/Constants'
import {GameContext} from '../../Utilities/GameContext'
import './index.css'

const Report = ({questionsIncorrectlyAnswered}) => {
  const history = useHistory()

  const {score, reviewQuestions, TotalQuestions, gameStatus} = useContext(
    GameContext,
  )
  const correctAnswers = score
  const incorrectAnswers = TotalQuestions - score
  const unattempted = reviewQuestions.length

  useEffect(() => {
    if (gameStatus !== gameStatusConstants.finished) {
      history.push('/error-view')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="background-container">
      <div className="form-container form-col">
        <div className="correct-total-questions">
          <p>{correctAnswers / TotalQuestions}</p>
        </div>
        <div>
          {correctAnswers > 0 && <p>{correctAnswers} Correct Answers</p>}
          {incorrectAnswers > 0 && <p>{incorrectAnswers} Incorrect Answers</p>}
          {unattempted > 0 && <p>{unattempted} Unattempted Answers</p>}
        </div>
        {unattempted === 0 && <h2>Attempted all the questions</h2>}
        {incorrectAnswers > 0 && (
          <ul className="questions-container">
            {questionsIncorrectlyAnswered.map(question => (
              <li key={question.id}>
                <h1 className="report-questions">{question.question_text}</h1>
                <ul>
                  {question.options.map(option => (
                    <li key={option.id}>
                      <Options option={option} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Report
