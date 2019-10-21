import React from "react"

const HeaderContainer = props => {
  // console.log(props)
  return (
    <div>
      {/* <div className="logoff"></div> */}
      <button onClick={props.logoutUser}>Logoff</button>
      <button onClick={props.goHome}>Home</button>
      <button onClick={props.showHandler}>Squad Up!</button>
      <button onClick={props.comicDay}>Comic of the Day</button>
      <button onClick={props.characterOfTheDay}>Character of the Day</button>
      <button onClick={props.goToCharacters}>Character List</button>
      <button onClick={props.playGame}>Play a Game</button>
    </div>
  )
}

export default HeaderContainer
