import React from "react"

class Card extends React.Component {
  state = {
    clicked: false,
    hasFlippedCard: false
  }
  firstCard = null
  secondCard = null
  clickHandler = cardObj => {
    this.setState({ clicked: !this.state.clicked })
    if (!this.state.hasFlippedCard) {
      this.setState({ hasFlippedCard: true })
      // this.setState({ firstCard: cardObj })
      let firstCard = cardObj
    } else {
      this.setState({ hasFlippedCard: false })
      // this.setState({ secondCard: cardObj })
      let secondCard = cardObj
      // console.log(cardObj)
    }
  }

  render() {
    // console.log(this.props.card)
    // console.log("firstCard:", this.state.firstCard)
    // console.log("secondCard:", this.state.secondCard)
    return (
      <div
        className="memory-card"
        onClick={() => this.clickHandler(this.props.card)}
      >
        {this.state.clicked ? (
          <img
            className="front-face"
            alt="front"
            src={this.props.card.frontFace}
          />
        ) : (
          <img
            className="back-face"
            alt="back"
            src={this.props.card.backFace}
          />
        )}
      </div>
    )
  }
}

export default Card
