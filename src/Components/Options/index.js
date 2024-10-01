import './index.css'

const Options = ({
  questionData,
  option,
  selectedOption,
  isSubmitted,
  setSelectedOption,
}) => {
  const getPrefix = index => {
    const prefixes = ['A', 'B', 'C', 'D']
    return index >= prefixes.length
      ? String.fromCharCode(65 + (index % prefixes.length))
      : prefixes[index]
  }

  const handleOptionClick = opt => {
    setSelectedOption(opt)
  }

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
          <input
            type="radio"
            name="option"
            htmlFor={option.id}
            checked={selectedOption === option}
          />
          <label htmlFor={option.id}>{option.text}</label>
        </button>
      )
    case 'IMAGE':
      return (
        <img
          onClick={() => handleOptionClick(option)}
          data-testid="option"
          src={option.image_url}
          alt={option.text}
          className={`option-image ${
            selectedOption === option ? 'selected' : ''
          }`}
        />
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
          {getPrefix(questionData.options.indexOf(option))}
          {/* prefix for options */}. {option.text}
        </button>
      )
  }
}

export default Options
