import {useEffect} from 'react'
import './index.css'

const Options = ({questionData, option, setSelectedOption}) => {
  const getPrefix = index => {
    const prefixes = ['A', 'B', 'C', 'D']
    return index >= prefixes.length
      ? String.fromCharCode(65 + (index % prefixes.length))
      : prefixes[index]
  }

  const handleOptionClick = opt => {
    setSelectedOption(opt)
  }

  useEffect(() => {
    setSelectedOption(null)
    // eslint-disable-next-line
  }, [])

  switch (questionData.options_type) {
    case 'SINGLE_SELECT':
      return (
        <div className="option-radio">
          <button
            type="button"
            className="button-image-wrap"
            onClick={() => handleOptionClick(option)}
          >
            <input
              id={option.id}
              type="radio"
              name="option"
              data-testid="option"
            />
            <label htmlFor={option.id}>{option.text}</label>
          </button>
        </div>
      )
    case 'IMAGE':
      return (
        <div className="option-image-container">
          <button
            type="button"
            className="button-image-wrap"
            onClick={() => handleOptionClick(option)}
          >
            <img
              data-testid="option"
              src={option.image_url}
              alt={option.text}
              className="option-image"
            />
          </button>
        </div>
      )
    default:
      return (
        <div className="option-button-container">
          {/* TODO: Remvoe the code after the project is done
           CCBP TEST CASE */}
          {getPrefix(questionData.options.indexOf(option))}.
          <button
            className="option-button"
            onClick={() => handleOptionClick(option)}
            data-testid="option"
            type="button"
          >
            {/*  TODO: uncomment this code after project done
            {getPrefix(questionData.options.indexOf(option))}
            {option.text} */}
            {option.text}
          </button>
        </div>
      )
  }
}

export default Options
