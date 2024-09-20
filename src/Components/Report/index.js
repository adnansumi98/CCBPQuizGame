import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Options from '../Options'
import './index.css'

const Report = ({
  correctAnswers,
  incorrectAnswers,
  unattempted,
  TotalQuestions,
  questionsIncorrectlyAnswered,
}) => {
  const [showReport, setShowReport] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (TotalQuestions) {
      setShowReport(true)
    }
    // eslint-disable-next-line
  }, [])

  if (!showReport) {
    history.push('/error-view')
  }

  const handleReportButton = () => {
    history.push('/game-result')
  }

  return (
    <div className="report-container">
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
      <button
        onClick={handleReportButton}
        type="button"
        className="report-button"
      >
        Result
      </button>
    </div>
  )
}

export default Report
