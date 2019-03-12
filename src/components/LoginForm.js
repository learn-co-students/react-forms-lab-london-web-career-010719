import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  inputUsername = (event) =>{
    this.setState({
      username:event.target.value,
    })
  }

  inputPassword = (event) =>{
    this.setState({
      password:event.target.value,
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    if (this.state.username.length>0 && this.state.password.length>0){
      this.props.onSubmit({username:this.state.username, password:this.state.password})
    }
    else {
      console.log('username or password is empty')
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.inputUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.inputPassword}/>
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
