import React from "react"
import AllUserCharacterCard from "../components/AllUserCharacterCard"

const AllUserCharactersContainer = props => {
  // console.log(props.allUserCharacters)
  let squad = props.allUserCharacters.map(character => {
    return <AllUserCharacterCard key={character.id} character={character} />
  })
  return (
    <div>
      <button onClick={props.squadDown}>Squad Down!</button>
      <div className="all-user-character">{squad}</div>
    </div>
  )
}

export default AllUserCharactersContainer
