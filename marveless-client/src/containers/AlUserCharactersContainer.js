import React from "react"
import AllUserCharacterCard from "../components/AllUserCharacterCard"

const AllUserCharactersContainer = props => {
  let squad = props.allUserCharacters.map(character => {
    return <AllUserCharacterCard key={character.id} character={character} />
  })
  return (
    <div>
      <div
        id="all-user-character"
        onClick={props.squadDown}
        className="bigEntrance"
      >
        {squad.reverse()}
      </div>
    </div>
  )
}

export default AllUserCharactersContainer
