import React from "react"
import UserCharacterCard from "../components/UserCharacterCard"

const UserCharacterContainer = props => {
  console.log(props.userCharacters.character)

  return (
    <div>
      User Character
      {props.userCharacters.character.name}
      <img alt="" src={props.userCharacters.character.image} />
    </div>
  )
}

export default UserCharacterContainer
