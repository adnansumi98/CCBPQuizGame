const Options = ({
  questionData,
  option,
  selectedOption,
  isSubmitted,
  setSelectedOption,
}) => {
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

export default Options
