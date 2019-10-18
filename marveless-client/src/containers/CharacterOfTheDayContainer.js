import React from "react"
import CharacterCard from "../components/CharacterCard"

const CharacterOfTheDayContainer = props => {
  console.log(props)
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
    <div className="character-day-container">
      <button
        className="character-day-container-button"
        onClick={props.closeCharacterOfTheDay}
      >
        X
      </button>
      {char}
    </div>
  )
}

export default CharacterOfTheDayContainer
