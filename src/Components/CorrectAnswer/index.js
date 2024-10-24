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
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
            alt="correct checked circle"
            height="40px"
            width="40px"
          />
        </div>
      )
    case 'IMAGE':
      return (
        <div className="option-image-container">
          <button type="button" className="button-image-wrap">
            <img
              data-testid="option"
              src={option.image_url}
              alt={option.text}
              className="option-image"
            />
          </button>
          <img
            className="answer-status-image"
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
            alt="correct checked circle"
            height="40px"
            width="40px"
          />
        </div>
      )
    default:
      return (
        <>
          <div className="option-button-container correct-answer">
            {/* CCBP TEST CASE */}
            {getPrefix(questionData.options.indexOf(option))}.
            <button
              className="option-button correct-answer"
              data-testid="option"
              type="button"
            >
              {/* {getPrefix(questionData.options.indexOf(option))}.  */}
              {option.text}
              {/* 
            CCBP TEST CASE
            {option.text} */}
            </button>
          </div>
          <img
            className="answer-status-image"
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
            alt="correct checked circle"
            height="40px"
            width="40px"
          />
        </>
      )
  }
}

export default CorrectAnswer
