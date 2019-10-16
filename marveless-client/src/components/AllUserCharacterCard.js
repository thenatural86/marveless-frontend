import React from "react"

const AllUserCharacterCard = props => {
  console.log(props.character.character)
  return (
    <>
      <div>
        <img alt="" src={props.character.character.image} />
      </div>
      <div>{props.character.character.name}</div>
    </>
  )
}

export default AllUserCharacterCard
