import React from "react"
import PropTypes from "prop-types"
import Card from "../card/Card"

export default function Board({
  disabled,
  dimension,
  cards,
  flipped,
  solved,
  handleClick
}) {
  return (
    <div className="grid-container">
      {cards.map(card => {
        return (
          <Card
            key={card.id}
            id={card.id}
            type={card.type}
            width={dimension / 4.5}
            height={dimension / 4.5}
            back={card.back}
            front={card.front}
            flipped={flipped.includes(card.id)}
            solved={solved.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || solved.includes(card.id)}
          />
        )
      })}
    </div>
  )
}

Board.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired
}
