import './index.css'

const Options = ({questionData, option, selectedOption, setSelectedOption}) => {
  const getPrefix = index => {
    const prefixes = ['A', 'B', 'C', 'D']
    return index >= prefixes.length
      ? String.fromCharCode(65 + (index % prefixes.length))
      : prefixes[index]
  }

  const handleOptionClick = opt => {
    if (selectedOption === null) {
      setSelectedOption(opt)
    }
  }

  const isSelected = selectedOption && selectedOption.id === option.id

  switch (questionData.options_type) {
    case 'SINGLE_SELECT':
      return (
        <div className="option-radio">
          <input
            type="radio"
            name="option"
            id={option.id}
            checked={isSelected}
            onChange={() => handleOptionClick(option)}
            data-testid="option"
          />
          <label htmlFor={option.id}>{option.text}</label>
        </div>
      )
    case 'IMAGE':
      return (
        <img
          onClick={() => handleOptionClick(option)}
          data-testid="option"
          src={option.image_url}
          alt={option.text}
          className={`option-image ${isSelected ? 'selected' : ''}`}
        />
      )
    default:
      return (
        <button
          className={`option-button ${isSelected ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
          data-testid="option"
          type="button"
        >
          {getPrefix(questionData.options.indexOf(option))}. {option.text}
        </button>
      )
  }
}

export default Options
