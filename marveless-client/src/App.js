import React from "react"
import "./App.css"
import CharacterContainer from "./containers/CharacterContainer"
import NavBarContainer from "./containers/NavBarContainer"
import ComicContainer from "./containers/ComicContainer"
import ComicShowPageContainer from "./containers/ComicShowPageContainer"

class App extends React.Component {
  state = { characters: [], comics: [], comicPage: [], searchTerm: "" }

  componentDidMount() {
    fetch("http://localhost:3000/characters")
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ characters: data })
      })
  }

  clickHandler = characterObj => {
    // console.log("CHARACTER OBJECT:", characterObj)
    fetch(`
    https://gateway.marvel.com/v1/public/characters/${characterObj.marvelid}/comics?ts=1&apikey=50265fe0032e30bc7011bf3ef16ffd9b&hash=d4e5c40fc9d222d34bfdbf5ed7858ade`)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ comics: data })
      })
  }

  comicClickHandler = comicObj => {
    if (!this.state.comicPage.includes(comicObj)) {
      this.setState({ comicPage: [comicObj] })
    }
  }

  creatorClickHandler = creatorObj => {
    // console.log("creator click", creatorObj)
    // creatorObj.map(creator => {
    // return console.log(creator)
    // })
  }

  changeHandler = e => {
    // console.log(e.target.value)
    this.setState({ searchTerm: e.target.value })
  }

  filterCharacterList = () => {
    return this.state.characters.filter(character =>
      character.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())
    )
  }

  submitHandler = e => {
    console.log(e)
    e.preventDefault()
    // this.setState({ characters: e.target.value })
    this.setState({ searchTerm: this.state.searchTerm })
  }

  render() {
    // console.log(this.state.characters)
    return (
      <div className="App">
        <div className="header">
          <div className="title">
            <h1>MarveLess</h1>
          </div>
          <NavBarContainer
            searchTerm={this.state.searchTerm}
            changeHandler={this.changeHandler}
            submitHandler={this.submitHandler}
          />
        </div>
        <div className="character-comic-container">
          <CharacterContainer
            characters={this.state.characters}
            clickHandler={this.clickHandler}
            filterCharacterList={this.filterCharacterList}
          />

          {this.state.comics.length !== 0 ? (
            <ComicContainer
              comics={this.state.comics}
              clickHandler={this.comicClickHandler}
            />
          ) : null}
        </div>
        <div className="comic-show-page-container">
          <ComicShowPageContainer
            comicPage={this.state.comicPage}
            clickHandler={this.creatorClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default App
