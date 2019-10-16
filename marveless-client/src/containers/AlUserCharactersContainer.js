import React from "react"
import AllUserCharacterCard from "../components/AllUserCharacterCard"

const AllUserCharactersContainer = props => {
  console.log(props.allUserCharacters)
  let squad = props.allUserCharacters.map(character => {
    return <AllUserCharacterCard key={character.id} character={character} />
  })
  return (
    <h2>
      My Squad
      {squad}
    </h2>
  )
}

export default AllUserCharactersContainer
