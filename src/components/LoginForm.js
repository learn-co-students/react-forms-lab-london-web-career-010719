import React from "react";
import { EventEmitter } from "events";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password) this.props.onSubmit(this.state.username, this.state.password )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id='username' 
              value={this.state.username} 
              onChange={this.handleInputChange} 
              name='username' 
              type='text' 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id='password' 
              value={this.state.password} 
              onChange={this.handleInputChange} 
              name='password' 
              type='password' 
            />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;
