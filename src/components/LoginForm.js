import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.props.handleLogin

    this.state = {
      username: '',
      password: ''
    }
  }

handleUsernameChange = event => {
  this.setState({
    username: event.target.value
  })
}

handlePasswordChange = event => {
  this.setState({
    password: event.target.value
  })
}

 handleSubmit = event => {
    event.preventDefault()
    let formData = {username: this.state.username, password: this.state.password}
    if (formData['username'] !== "" && formData['password'] !== "") return this.props.handleLogin(formData)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsernameChange}  value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePasswordChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
