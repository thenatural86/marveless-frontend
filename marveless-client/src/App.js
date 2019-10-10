import React from "react"
import "./App.css"
import CharacterContainer from "./containers/CharacterContainer"
import NavBarContainer from "./containers/NavBarContainer"

class App extends React.Component {
  state = { characters: [] }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/characters")
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ characters: data })
      })
  }

  render() {
    // console.log(this.state.characters)
    return (
      <div className="App">
        <div className="title">
          <h1>MarveLess</h1>
        </div>
        <NavBarContainer />
        <CharacterContainer characters={this.state.characters} />
      </div>
    )
  }
}

export default App
