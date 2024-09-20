import {useState, useEffect} from 'react'
import './index.css'

const Question = ({questionData, setScore, setIsSubmitted}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = option => {
    setSelectedOption(option)
  }

  useEffect(() => {
    if (selectedOption) {
      setIsSubmitted(true)
      if (selectedOption.is_correct) {
        setScore(prevScore => prevScore + 1)
      }
    }
    // eslint-disable-next-line
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
            <input type="radio" name="option" htmlFor={option.id} />
            <label htmlFor={option.id}>{option.text}</label>
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
              height={40}
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
