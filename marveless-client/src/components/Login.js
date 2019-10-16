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
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="username" onChange={this.changeHandler} />
          <input type="text" name="password" onChange={this.changeHandler} />
          <input type="submit" value="log in" />
        </form>
      </>
    )
  }
}

export default LoginForm
