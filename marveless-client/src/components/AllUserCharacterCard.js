import React from "react"

const AllUserCharacterCard = props => {
  return (
    <div className="all-user-character-card">
      <img alt="" src={props.character.character.image} />
      <div style={{ color: "white", background: "black" }}>
        {props.character.character.name}
      </div>
    </div>
  )
}

export default AllUserCharacterCard
