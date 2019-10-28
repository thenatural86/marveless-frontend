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
      <div>
        <h1
          style={{
            fontSize: "50px",
            color: "white",
            background: "red",
            width: "400px",
            marginTop: "30px",
            borderRadius: "15px"
          }}
        >
          Signup
        </h1>
        <form onSubmit={this.submitHandler}>
          <input
            className="signup"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            className="signup"
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <input
            className="signup-button"
            type="submit"
            value="signup"
            style={{ width: "400px" }}
          />
        </form>
        <div className="background"></div>
      </div>
    )
  }
}

export default Signup
