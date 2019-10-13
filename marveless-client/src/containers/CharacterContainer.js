import React from "react"
import CharacterCard from "../components/CharacterCard"

const CharacterContainer = props => {
  // console.log(props.characters)

  let characters = props.filterCharacterList().map(character => {
    return (
      <CharacterCard
        key={character.id}
        character={character}
        clickHandler={props.clickHandler}
      />
    )
  })
  return <div className="character-container">{characters}</div>
}

export default CharacterContainer
