import React from "react"

const CharacterCard = props => {
  // console.log(props.character)
  return (
    <div className="character-card">
      <div className="character-image">
        <img alt="" src={props.character.image} />
      </div>
      <div className="character-name">{props.character.name}</div>
      <div className="character-description">{props.character.description}</div>
      {/* <div className="character-comics">
        <h3>Comics Array</h3>
        {props.character.comics}
      </div> */}
    </div>
  )
}

export default CharacterCard
