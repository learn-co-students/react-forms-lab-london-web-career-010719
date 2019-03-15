import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    const username = this.state.username
    const password = this.state.password;

    if (username.length === 0 || password.length === 0) {
      window.alert('fields cannot be empty')
    } else {
      this.props.onSubmit(this.state);
    }
    
    

  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
       
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password"
            value={this.state.value}
            onChange={this.handleChange}
               />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
