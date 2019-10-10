import React from "react"

class SearchFrom extends React.Component {
  state = { character: "" }

  changeHandler = e => {
    // console.log("change now!")
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="character"
            placeholder="Search for a character.."
            value={this.state.character}
            onChange={this.changeHandler}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default SearchFrom
