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

class App extends React.Component {
  state = {
    comics: [],
    comicPage: [],
    user: {},
    userCharacters: []
  }

  componentDidMount() {
    // console.log("App props:", this.props)
    let token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => this.setState({ user: data.user }))
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
  // CharacterCard Component CallBack
  clickHandler = characterObj => {
    console.log("CHARACTER OBJECT:", characterObj)
    fetch(`
    https://gateway.marvel.com/v1/public/characters/${characterObj.marvelid}/comics?ts=1&apikey=50265fe0032e30bc7011bf3ef16ffd9b&hash=d4e5c40fc9d222d34bfdbf5ed7858ade`)
      .then(resp => resp.json())
      .then(data => {
        // console.log("hello")
        this.setState({ comics: data })
      })
  }
  // ComicCard CallBack
  comicClickHandler = comicObj => {
    if (!this.state.comicPage.includes(comicObj)) {
      this.setState({ comicPage: [comicObj] })
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
      })
  }

  render() {
    console.log("state user:", this.state.user)
    console.log("userCharacters STATE:", this.state.userCharacters)
    return (
      <div className="App">
        <div className="header">
          <div className="title">
            <h1>MarveLess</h1>
          </div>
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

          <div className="character-container">
            <Route
              path="/characters"
              render={routerProps => {
                console.log("Router Props in Render:", routerProps)
                return (
                  <CharacterContainer
                    user={this.state.user}
                    clickHandler={this.clickHandler}
                    addToTeam={this.addToTeam}
                  />
                )
              }}
            />
          </div>

          <Route exact path="/" component={Welcome} />
          <Route component={badRoute} />
        </Switch>

        <div className="comic-container">
          {this.state.comics.length !== 0 ? (
            <ComicContainer
              comics={this.state.comics}
              clickHandler={this.comicClickHandler}
            />
          ) : null}
        </div>

        {this.state.comicPage.length !== 0 ? (
          <div className="comic-show-page-container">
            <ComicShowPageContainer
              comicPage={this.state.comicPage}
              clickHandler={this.creatorClickHandler}
            />
          </div>
        ) : null}

        {this.state.userCharacters.length !== 0 ? (
          <div className="user-characters">
            <UserCharacterContainer
              userCharacters={this.state.userCharacters}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default withRouter(App)

// creatorClickHandler = creatorObj => {
//   console.log("creator click", creatorObj)
//   creatorObj.map(creator => {
//   return console.log(creator)
//   })
// }
