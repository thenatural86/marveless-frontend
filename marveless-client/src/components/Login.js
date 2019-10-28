import React from "react"

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  render() {
    return (
      <div className="ok">
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
          MARVELESS
        </h1>
        <br />
        <form onSubmit={this.submitHandler}>
          <input
            className="login"
            type="text"
            name="username"
            placeholder="username"
            onChange={this.changeHandler}
          />
          <br />
          <input
            className="login"
            type="text"
            name="password"
            placeholder="password"
            onChange={this.changeHandler}
          />
          <br />
          <input
            className="login-button"
            type="submit"
            value="Log In"
            style={{ width: "400px" }}
          />
        </form>

        <div></div>
        <div className="background"></div>
      </div>
    )
  }
}

export default LoginForm
