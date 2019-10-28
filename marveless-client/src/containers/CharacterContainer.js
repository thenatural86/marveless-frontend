import React from "react"
import CharacterCard from "../components/CharacterCard"
import SearchForm from "../components/SearchForm"

function shuffle(array) {
  const _array = array.slice(0)
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let temp = _array[i]
    _array[i] = _array[randomIndex]
    _array[randomIndex] = temp
  }
  return _array
}

class CharacterContainer extends React.Component {
  state = { characters: [], searchTerm: "", shuffle: false }

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
    this.setState({ searchTerm: e.target.value })
  }

  filterCharacterList = () => {
    return this.state.characters.filter(character =>
      character.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())
    )
  }

  shufflePeopleHandler = () => {
    this.setState({ characters: shuffle(this.state.characters) })
  }

  render() {
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
        <SearchForm
          searchTerm={this.state.searchTerm}
          changeHandler={this.changeHandler}
          clickHandler={this.shufflePeopleHandler}
        />
        <div>
          <div id="character-container" className="fadeIn">
            {characters}
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterContainer
