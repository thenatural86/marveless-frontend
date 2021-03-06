import React from "react"

const HeaderContainer = props => {
  return (
    <div className="header">
      <button onClick={props.goToCharacters}>Home</button>
      <button onClick={props.showHandler}>Squad Up!</button>
      <button onClick={props.comicDay}>Comic of the Day</button>
      <button onClick={props.characterOfTheDay}>Character of the Day</button>
      <button onClick={props.playGame}>Play a Game</button>
      <button onClick={props.logoutUser}>Logoff</button>
    </div>
  )
}

export default HeaderContainer
