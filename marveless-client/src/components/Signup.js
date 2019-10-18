import React from "react"

class Signup extends React.Component {
  state = { username: "", password: "" }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.fetchUser(this.state)
    this.setState({ username: "", password: "" })
  }

  render() {
    return (
      <div className="center">
        <h1>Signup Form</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <input type="submit" value="signup" />
        </form>
      </div>
    )
  }
}

export default Signup
