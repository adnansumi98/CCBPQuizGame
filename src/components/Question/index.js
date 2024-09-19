import {useState, useEffect} from 'react'
import './index.css'

const Question = ({questionData, setScore, isSubmitted}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = option => {
    setSelectedOption(option)
  }

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption.is_correct) {
        setScore(prevScore => prevScore + 1)
      }
    }
  }, [selectedOption])

  const renderOptions = option => {
    switch (questionData.options_type) {
      case 'SINGLE_SELECT':
        return (
          <button
            className={`option-button ${
              selectedOption === option ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick(option)}
            data-testid="option"
            type="button"
          >
            <input type="radio" name="option" value={option.text} />
            {option.text}
          </button>
        )
      case 'IMAGE':
        return (
          <button
            className={`option-button ${
              selectedOption === option ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick(option)}
            data-testid="option"
            type="button"
          >
            <img
              src={option.image_url}
              alt={option.text}
              height={100}
              width={100}
            />
          </button>
        )
      default:
        return (
          <button
            className={`option-button ${
              selectedOption === option ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick(option)}
            data-testid="option"
            type="button"
          >
            {option.text}
          </button>
        )
    }
  }

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])

  if (!questionData || !questionData.options) {
    return <div>Loading question...</div>
  }

  return (
    <ul className="question-container">
      <li key={questionData.id}>
        <p>{questionData.question_text}</p>
        <ul>
          {questionData.options.map(option => (
            <li key={option.id}>{renderOptions(option)}</li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Question
