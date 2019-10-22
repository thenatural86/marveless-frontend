import React from "react"
import GameApp from "./GameApp"
class MemoryGameContainer extends React.PureComponent {
  render() {
    return (
      <div id="memory-game-container" className="slideLeft">
        <div className="memory-game-container">
          <GameApp />
        </div>
      </div>
    )
  }
}

export default MemoryGameContainer
