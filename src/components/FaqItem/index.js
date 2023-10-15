// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickButton = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {faqItemsDetails} = this.props
    const {questionText, answerText} = faqItemsDetails
    const {isActive} = this.state

    const images = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-card">
          <h1 className="text">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            <img src={images} alt={altText} className="plus" />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="line" />
            <p className="para">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
