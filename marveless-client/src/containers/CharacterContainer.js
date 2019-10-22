import React from "react"
import CharacterCard from "../components/CharacterCard"
import SearchForm from "../components/SearchForm"

class CharacterContainer extends React.Component {
  state = { characters: [], searchTerm: "" }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/characters")
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ characters: data })
      })
  }

  // SearchForm CallBack
  changeHandler = e => {
    console.log("change")
    this.setState({ searchTerm: e.target.value })
  }

  filterCharacterList = () => {
    return this.state.characters.filter(character =>
      character.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())
    )
  }

  render() {
    // console.log(this.props)
    let characters = this.filterCharacterList().map(character => {
      return (
        <CharacterCard
          key={character.id}
          character={character}
          clickHandler={this.props.clickHandler}
          user={this.props.user}
          addToTeam={this.props.addToTeam}
        />
      )
    })
    return (
      <div>
        {/* className="CharacterSearchAndContainer" */}
        {/* <h1>Characters</h1> */}
        <SearchForm
          searchTerm={this.state.searchTerm}
          changeHandler={this.changeHandler}
          // submitHandler={props.submitHandler}
        />
        <div>
          <div
            id="character-container"
            // className="character-container"
            className="fadeIn"
          >
            {characters}
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterContainer
