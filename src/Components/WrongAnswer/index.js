import './index.css'

const WrongAnswer = ({questionData, option}) => {
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
            src="/img/wrongAnswer.png"
            alt="Wrong"
            height="40px"
            width="40px"
          />
        </div>
      )
    case 'IMAGE':
      return (
        <div className="option-image-container">
          <img
            data-testid="option"
            src={option.image_url}
            alt={option.text}
            className="option-image"
          />
          <img
            src="/img/wrongAnswer.png"
            alt="Wrong"
            height="40px"
            width="40px"
          />
        </div>
      )
    default:
      return (
        <>
          <div className="option-button-container wrong-answer">
            {`${getPrefix(questionData.options.indexOf(option))} .`}
            <button
              className="option-button wrong-answer"
              data-testid="option"
              type="button"
            >
              {option.text}
            </button>
          </div>
          <img
            className="answer-status-image"
            src="/img/wrongAnswer.png"
            alt="Wrong"
            height="40px"
            width="40px"
          />
        </>
      )
  }
}

export default WrongAnswer
