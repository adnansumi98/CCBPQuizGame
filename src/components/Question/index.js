import {useState, useEffect} from 'react'
import './index.css'

const Question = ({questionData}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleOptionChange = event => {
    setSelectedOption(event.target.value)
    setIsSubmitted(true)
  }

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])

  const handleOptionType = () => {
    switch (questionData.type) {
      case 'SINGLE_SELECT':
        return 'radio'
      case 'IMAGE':
        return 'image'
      default:
        return 'text'
    }
  }

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])

  if (!questionData || !questionData.options) {
    return <div>Loading question...</div>
  }

  if (isSubmitted) {
    setIsCorrect(selectedOption === questionData.correct_option_id)
  }

  return (
    <ul className="question-container">
      <li key={questionData.id}>
        <p>{questionData.question_text}</p>
        <ul>
          {questionData.options.map(option => (
            <li key={option.id}>
              <input
                type={handleOptionType()}
                value={option.text}
                onChange={handleOptionChange}
              />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Question
