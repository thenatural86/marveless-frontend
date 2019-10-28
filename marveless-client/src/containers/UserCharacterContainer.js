import React from "react"

const UserCharacterContainer = props => {
  return (
    <div onClick={props.clickHandler}>
      <h3>New Squad Member</h3>
      <div className="">Name:{props.userCharacters.character.name}</div>
      <div className="user-character-image">
        <img alt="" src={props.userCharacters.character.image} />
      </div>
      <div>{props.userCharacters.character.description}</div>
    </div>
  )
}

export default UserCharacterContainer
