import {useState, useEffect, useContext} from 'react'
import Options from '../Options'
import CorrectAnswer from '../CorrectAnswer'
import WrongAnswer from '../WrongAnswer'
import {GameContext} from '../../Utilities/GameContext'
import './index.css'

const Question = ({
  questionData,
  setIsSubmitted,
  isSubmitted,
  scoreUpdated,
  setScoreUpdated,
}) => {
  // used in Options file for rendering
  const [selectedOption, setSelectedOption] = useState(null)
  const {setScore} = useContext(GameContext)

  const renderOptions = () => (
    <>
      {questionData.options.map(option => (
        <li key={option.id}>
          <Options
            questionData={questionData}
            option={option}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </li>
      ))}
    </>
  )

  const renderCorrectOptions = () => (
    <>
      {questionData.options.map(option => (
        <li key={option.id}>
          {selectedOption.id === option.id ? (
            <CorrectAnswer questionData={questionData} option={option} />
          ) : (
            <Options
              questionData={questionData}
              option={option}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
        </li>
      ))}
    </>
  )

  const renderWrongOptions = () => (
    <>
      {questionData.options.map(option => {
        if (selectedOption.id === option.id) {
          return (
            <li key={option.id}>
              <WrongAnswer questionData={questionData} option={option} />
            </li>
          )
        }

        if (option.is_correct === 'true') {
          return (
            <li key={option.id}>
              <CorrectAnswer questionData={questionData} option={option} />
            </li>
          )
        }

        return (
          <li key={option.id}>
            <Options
              questionData={questionData}
              option={option}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </li>
        )
      })}
    </>
  )

  const optionsLogic = () => {
    console.log(selectedOption)
    if (!selectedOption) return renderOptions()

    if (selectedOption.is_correct === 'true') return renderCorrectOptions()
    if (selectedOption.is_correct === 'false') return renderWrongOptions()

    return ''
  }

  useEffect(() => {
    if (selectedOption && !isSubmitted) {
      setIsSubmitted(true)

      // Update score if correct and score hasn't been updated
      if (selectedOption.is_correct && !scoreUpdated) {
        setScore(prevScore => prevScore + 1)
        setIsSubmitted(false)
        setScoreUpdated(true)
      }
    }
    // eslint: disable-next-line
  }, [
    selectedOption,
    isSubmitted,
    setIsSubmitted,
    scoreUpdated,
    setScoreUpdated,
    setScore,
  ])

  // Reset selected option when a new question is loaded
  useEffect(() => {
    setSelectedOption(null)
    setIsSubmitted(false)
    setScoreUpdated(false)
  }, [questionData, setIsSubmitted, setScoreUpdated])

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
          {optionsLogic()}
        </ul>
      </li>
    </ul>
  )
}

export default Question
