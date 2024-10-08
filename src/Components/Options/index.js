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
          <input
            type="radio"
            name="option"
            id={option.id}
            onChange={() => handleOptionClick(option)}
            data-testid="option"
          />
          <label htmlFor={option.id}>{option.text}</label>
        </div>
      )
    case 'IMAGE':
      return (
        <div className="option-image-container">
          <img
            onClick={() => handleOptionClick(option)}
            data-testid="option"
            src={option.image_url}
            alt={option.text}
            className="option-image"
          />
        </div>
      )
    default:
      return (
        <div className="option-button-container">
          {`${getPrefix(questionData.options.indexOf(option))} .`}
          <button
            className="option-button"
            onClick={() => handleOptionClick(option)}
            data-testid="option"
            type="button"
          >
            {option.text}
          </button>
        </div>
      )
  }
}

export default Options
