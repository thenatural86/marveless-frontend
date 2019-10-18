import React from "react"

const UserCharacterContainer = props => {
  console.log(props.userCharacters.character)

  return (
    <div>
      <h3>Added User Character Container</h3>
      <button onClick={props.clickHandler}>X</button>
      <div className="user-character-name">
        Name:{props.userCharacters.character.name}
      </div>
      <div className="user-character-image">
        <img alt="" src={props.userCharacters.character.image} />
      </div>
      <div>{props.userCharacters.character.description}</div>
    </div>
  )
}

export default UserCharacterContainer
