import React from "react"

const CharacterCard = props => {
  return (
    <div className="character-card">
      <div className="character-image">
        <img alt="" src={props.character.image} />
      </div>
      <div className="character-name">{props.character.name}</div>
      <button onClick={() => props.clickHandler(props.character)}>
        Get Comics
      </button>
      <button
        onClick={() => props.addToTeam(props.character.id, props.character)}
      >
        Add to Team
      </button>
    </div>
  )
}

export default CharacterCard
