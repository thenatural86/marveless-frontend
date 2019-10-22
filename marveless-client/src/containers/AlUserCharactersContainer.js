import React from "react"
import AllUserCharacterCard from "../components/AllUserCharacterCard"

const AllUserCharactersContainer = props => {
  // console.log(props.allUserCharacters)
  let squad = props.allUserCharacters.map(character => {
    return <AllUserCharacterCard key={character.id} character={character} />
  })
  return (
    <div>
      <div id="all-user-character" className="bigEntrance">
        {squad}
      </div>
      <button className="all-user-char-button" onClick={props.squadDown}>
        Squad Down!
      </button>
    </div>
  )
}

export default AllUserCharactersContainer
