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
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="username" onChange={this.changeHandler} />
          <input type="text" name="password" onChange={this.changeHandler} />
          <input type="submit" value="log in" />
        </form>
        <iframe
          // id="myVideo"
          title="spider"
          src="https://giphy.com/embed/9tZc9Mzo9K0yOYx38U"
          width="700"
          height="700"
          frameBorder="0"
        ></iframe>
      </div>
    )
  }
}

export default LoginForm
