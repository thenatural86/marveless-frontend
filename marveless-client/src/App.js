import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import "./App.css"
import CharacterContainer from "./containers/CharacterContainer"
import ComicContainer from "./containers/ComicContainer"
import ComicShowPageContainer from "./containers/ComicShowPageContainer"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Welcome from "./components/Welcome"
import badRoute from "./components/badRoute"
import UserCharacterContainer from "./containers/UserCharacterContainer"
import AllUserCharactersContainer from "./containers/AlUserCharactersContainer"
import HeaderContainer from "./containers/HeaderContainer"
import CharacterOfTheDayContainer from "./containers/CharacterOfTheDayContainer"
import ComicOfTheDayContainer from "./containers/ComicOfTheDayContainer"
import MemoryGameContainer from "./containers/Game/MemoryGameContainer"

class App extends React.Component {
  state = {
    comics: [],
    comicPage: [],
    user: null,
    userCharacters: [],
    allUserCharacters: [],
    squadUp: false,
    showComics: false,
    characterDay: [],
    comicDay: [],
    showCharacters: false,
    error: null,
    game: false
  }

  componentDidMount() {
    // console.log("App props:", this.props)
    let token = localStorage.getItem("token")
    if (token) {
      let targetPath = this.props.location.pathname
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(data =>
          this.setState({ user: data.user }, () => {
            // console.log("target path: ", targetPath)
            this.props.history.push(targetPath)
          })
        )
    }
  }
  // CallBack by Signup component
  fetchUser = userObj => {
    console.log("fetching", userObj)
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        user: userObj
      })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.token)
        this.setState({ user: data.user })
        this.props.history.push("/characters")
      })
  }
  // CallBack by Login component
  loginUser = userObj => {
    console.log("logging in", userObj)
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        user: userObj
      })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.token)
        this.setState({ user: data.user })
        this.props.history.push("/characters")
      })
  }

  logoutUser = () => {
    console.log("logout")
    localStorage.removeItem("token")
    this.setState({ user: "" })
    this.setState({ allUserCharacters: [] })
    window.location.href = "/login"
  }

  // CharacterCard Component CallBack
  clickHandler = characterObj => {
    // console.log("CHARACTER OBJECT:", characterObj)
    fetch(`
    https://gateway.marvel.com/v1/public/characters/${characterObj.marvelid}/comics?ts=1&apikey=50265fe0032e30bc7011bf3ef16ffd9b&hash=d4e5c40fc9d222d34bfdbf5ed7858ade`)
      .then(resp => resp.json())
      .then(data => {
        console.log("hello")
        this.setState({ comics: data })
        if (this.state.showComics === false) {
          this.setState({ showComics: !this.state.showComics })
          this.setState({ squadUp: false })
          this.setState({ comicDay: [] })
          this.setState({ characterDay: [] })
          this.setState({ game: false })
          this.setState({ comicPage: [] })
          this.setState({ userCharacters: [] })
        }
      })
  }
  // ComicCard CallBack
  comicClickHandler = comicObj => {
    if (!this.state.comicPage.includes(comicObj)) {
      this.setState({ comicPage: [comicObj] })
      this.setState({ showComics: !this.state.showComics })
    }
  }
  // SearchForm CallBack
  submitHandler = e => {
    // console.log(e)
    e.preventDefault()
    // this.setState({ characters: e.target.value })
    this.setState({ searchTerm: this.state.searchTerm })
  }

  addToTeam = (character, id) => {
    console.log("adding", id)
    fetch("http://localhost:3000/api/v1/user_characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: localStorage.token
      },
      body: JSON.stringify({
        character_id: id,
        user_id: localStorage.token,
        character: character
      })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({ userCharacters: data })
        this.setState({ comicDay: [] })
        this.setState({ characterDay: [] })
        this.setState({ game: false })
        this.setState({ showComics: false })
        this.setState({ comicPage: [] })
        this.setState({ squadUp: false })
      })
  }
  showAllUserCharactersHandler = () => {
    // console.log("show me the money")
    fetch("http://localhost:3000/api/v1/user_characters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ squadUp: !this.state.squadUp })
        this.setState({ allUserCharacters: data })
        this.setState({ comicDay: [] })
        this.setState({ characterDay: [] })
        this.setState({ game: false })
        this.setState({ showComics: false })
        this.setState({ comicPage: [] })
        this.setState({ userCharacters: [] })
      })
  }

  closeComicShowPage = () => {
    console.log("close")
    this.setState({ comicPage: [] })
    this.setState({ showComics: !this.state.showComics })
  }

  closeComicContainer = () => {
    console.log("close button")
    this.setState({ showComics: !this.state.showComics })
  }

  closeUserCharacterContainer = () => {
    console.log("close er down")
    this.setState({ userCharacters: [] })
  }

  closeCharacterContainer = () => {
    console.log("close charcters")
    this.setState({ showCharacters: !this.state.showCharacters })
  }

  closeCharacterOfTheDay = () => {
    console.log("close character day")
    this.setState({ characterDay: [] })
  }

  closeComicOfTheDayContainerHandler = () => {
    console.log("close me")
    this.setState({ comicDay: [] })
  }

  squadDown = () => {
    console.log("squad down")
    this.setState({ squadUp: !this.state.squadUp })
  }

  goHome = () => {
    console.log("take em home")
    window.location.href = "/"
  }

  goToCharacters = () => {
    console.log("go to characters")
    window.location.href = "/characters"
  }

  characterOfTheDay = () => {
    let number = Math.floor(Math.random() * 1491) + 1
    console.log("lets get a random character", number)
    fetch(`http://localhost:3000/api/v1/characters/${number}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ characterDay: [data] })
        this.setState({ game: false })
        this.setState({ squadUp: false })
        this.setState({ comicDay: [] })
        this.setState({ showComics: false })
        this.setState({ comicPage: [] })
        this.setState({ userCharacters: [] })
      })
  }

  comicOfTheDayHandler = () => {
    let number = Math.floor(Math.random() * 45557) + 1
    this.fetchHelperHandler(number)
    this.setState({ characterDay: [] })
    this.setState({ game: false })
    this.setState({ squadUp: false })
    this.setState({ showComics: false })
    this.setState({ comicPage: [] })
    this.setState({ userCharacters: [] })
  }

  fetchHelperHandler = number => {
    fetch(
      `https://gateway.marvel.com/v1/public/comics/${number}?ts=1&apikey=50265fe0032e30bc7011bf3ef16ffd9b&hash=d4e5c40fc9d222d34bfdbf5ed7858ade`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      }
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data.code === 404) {
          console.log("trying again")
          let newNumber = Math.floor(Math.random() * 45557) + 1
          this.fetchHelperHandler(newNumber)
        } else {
          this.setState({ comicDay: data })
        }
      })
  }

  playGameHandler = () => {
    // console.log("playtime")
    // fetch("http://localhost:4000/cartoons")
    //   .then(resp => resp.json())
    //   .then(data => {
    //     // console.log(data)
    //     this.setState({ cards: data })
    //   })
    this.setState({ game: !this.state.game })
    this.setState({ squadUp: false })
    this.setState({ comicDay: [] })
    this.setState({ characterDay: [] })
    this.setState({ showComics: false })
    this.setState({ comicPage: [] })
    this.setState({ userCharacters: [] })
  }

  render() {
    // console.log(this.state.memory)
    // console.log(this.state.comicDay)
    // console.log(this.state.showCharacters)
    // console.log(this.state.characterDay)
    // console.log(this.state.showComics)
    // console.log("characters:", this.state.allUserCharacters)
    // console.log("state user:", this.state.user)
    console.log("userCharacters STATE:", this.state.userCharacters)
    return (
      <div className="App">
        <div className="header-container">
          <HeaderContainer
            user={this.state.user}
            showHandler={this.showAllUserCharactersHandler}
            logoutUser={this.logoutUser}
            characterOfTheDay={this.characterOfTheDay}
            goHome={this.goHome}
            goToCharacters={this.goToCharacters}
            comicDay={this.comicOfTheDayHandler}
            playGame={this.playGameHandler}
          />
        </div>

        <Switch>
          <Route
            path="/signup"
            render={() => <Signup fetchUser={this.fetchUser} />}
          />
          <Route
            path="/login"
            render={() => <Login loginUser={this.loginUser} />}
          />
          <Route
            path="/characters"
            render={routerProps => {
              // console.log("Router Props in Render:", routerProps)
              return (
                <CharacterContainer
                  user={this.state.user}
                  clickHandler={this.clickHandler}
                  addToTeam={this.addToTeam}
                  closeCharacterContainer={this.closeCharacterContainer}
                />
              )
            }}
          />
          <Route
            exact
            path="/"
            render={routerProps => {
              return <Welcome user={this.state.user} />
            }}
          />
          <Route component={badRoute} />
        </Switch>

        {this.state.showComics ? (
          <>
            {this.state.comics.length !== 0 ? (
              <ComicContainer
                user={this.state.user}
                comics={this.state.comics}
                clickHandler={this.comicClickHandler}
                closeComic={this.closeComicContainer}
              />
            ) : null}
          </>
        ) : null}

        {this.state.comicPage.length !== 0 ? (
          <div className="comic-show-page-container">
            <ComicShowPageContainer
              user={this.state.user}
              comicPage={this.state.comicPage}
              clickHandler={this.closeComicShowPage}
            />
          </div>
        ) : null}

        {this.state.userCharacters.length !== 0 ? (
          <div className="user-characters-container">
            <UserCharacterContainer
              user={this.state.user}
              userCharacters={this.state.userCharacters}
              clickHandler={this.closeUserCharacterContainer}
            />
          </div>
        ) : null}

        {this.state.squadUp ? (
          <AllUserCharactersContainer
            user={this.state.user}
            allUserCharacters={this.state.allUserCharacters}
            squadDown={this.squadDown}
          />
        ) : null}

        {this.state.characterDay.length !== 0 ? (
          <CharacterOfTheDayContainer
            characterDay={this.state.characterDay}
            user={this.state.user}
            clickHandler={this.clickHandler}
            addToTeam={this.addToTeam}
            closeCharacterOfTheDay={this.closeCharacterOfTheDay}
          />
        ) : null}

        {this.state.comicDay.length !== 0 ? (
          <ComicOfTheDayContainer
            comicDay={this.state.comicDay}
            user={this.state.user}
            clickHandler={this.closeComicOfTheDayContainerHandler}
          />
        ) : null}

        {this.state.game ? (
          <>
            <MemoryGameContainer user={this.state.user} />
          </>
        ) : null}
      </div>
    )
  }
}

export default withRouter(App)
