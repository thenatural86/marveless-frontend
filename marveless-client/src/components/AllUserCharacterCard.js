import React from "react"

const AllUserCharacterCard = props => {
  // console.log(props.character.character)
  return (
    <div className="all-user-character-card">
      <img alt="" src={props.character.character.image} />
      <div>{props.character.character.name}</div>
    </div>
  )
}

export default AllUserCharacterCard
