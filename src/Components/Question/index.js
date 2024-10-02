import {useState, useEffect, useContext} from 'react'
import Options from '../Options'
import {GameContext} from '../../Utilities/GameContext'
import './index.css'

const Question = ({
  questionData,
  setIsSubmitted,
  isSubmitted,
  scoreUpdated,
  setScoreUpdated,
}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const {setScore} = useContext(GameContext)

  useEffect(() => {
    setIsSubmitted(true)
    // console.log(selectedOption)
    setSelectedOption(selectedOption)
    if (selectedOption) {
      if (selectedOption.is_correct === 'true' && scoreUpdated === false) {
        setScore(prevScore => prevScore + 1)
        setScoreUpdated(true)
      }
    }
    // eslint-disable-next-line
  }, [selectedOption])

  if (!questionData || !questionData.options) {
    return <div>Loading question...</div>
  }

  return (
    <ul className="question-container">
      <li key={questionData.id}>
        <p>{questionData.question_text}</p>
        <ul
          className={`options-container ${
            questionData.options_type === 'SINGLE_SELECT' ? 'flex-unwrap' : ''
          }`}
        >
          {questionData.options.map(option => (
            <li key={option.id}>
              <Options
                questionData={questionData}
                option={option}
                selectedOption={selectedOption}
                isSubmitted={isSubmitted}
                setSelectedOption={setSelectedOption}
              />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Question
