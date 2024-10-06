import './index.css'

const CorrectAnswer = ({questionData, option}) => {
  const getPrefix = index => {
    const prefixes = ['A', 'B', 'C', 'D']
    return index >= prefixes.length
      ? String.fromCharCode(65 + (index % prefixes.length))
      : prefixes[index]
  }

  switch (questionData.options_type) {
    case 'SINGLE_SELECT':
      return (
        <div className="option-radio">
          <input
            type="radio"
            name="option"
            id={option.id}
            data-testid="option"
          />
          <label htmlFor={option.id}>{option.text}</label>
          <img
            className="answer-status-image"
            src="/img/correctAnswer.png"
            alt="Correct"
            height="40px"
            width="40px"
          />
        </div>
      )
    case 'IMAGE':
      return (
        <>
          <img
            data-testid="option"
            src={option.image_url}
            alt={option.text}
            className="option-image"
          />
          <img
            src="/img/correctAnswer.png"
            alt="Correct"
            height="40px"
            width="40px"
          />
        </>
      )
    default:
      return (
        <>
          <button
            className="option-button correct-answer"
            data-testid="option"
            type="button"
          >
            {getPrefix(questionData.options.indexOf(option))}
            {/* prefix for options */}. {option.text}
          </button>
          <img
            className="answer-status-image"
            src="/img/correctAnswer.png"
            alt="Correct"
            height="40px"
            width="40px"
          />
        </>
      )
  }
}

export default CorrectAnswer
