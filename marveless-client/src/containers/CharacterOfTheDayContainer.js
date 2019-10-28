import React from "react"
import CharacterCard from "../components/CharacterCard"

const CharacterOfTheDayContainer = props => {
  let char = props.characterDay.map(character => {
    return (
      <CharacterCard
        key={character.id}
        character={character}
        clickHandler={props.clickHandler}
        addToTeam={props.addToTeam}
      />
    )
  })
  return (
    <div
      id="character-day-container"
      onClick={props.closeCharacterOfTheDay}
      className="slideExpandUp"
    >
      <div className="character-day-char">{char}</div>
    </div>
  )
}

export default CharacterOfTheDayContainer
