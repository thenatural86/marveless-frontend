import React from "react"

const HeaderContainer = props => {
  // console.log(props)
  return (
    <div>
      <button onClick={props.showHandler}>Squad Up!</button>
    </div>
  )
}

export default HeaderContainer
