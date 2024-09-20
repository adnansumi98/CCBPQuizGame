import {useState, useEffect} from 'react'
import Options from '../Options'
import './index.css'

const Question = ({questionData, setScore, setIsSubmitted, isSubmitted}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    if (selectedOption) {
      setIsSubmitted(true)
      if (selectedOption.is_correct) {
        setScore(prevScore => prevScore + 1)
      }
    }
    // eslint-disable-next-line
  }, [selectedOption])

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
