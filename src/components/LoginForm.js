import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  formHandler = e => {
    e.preventDefault();
    if (this.state.password > 0 && this.state.username > 0) {
      this.props.onSubmit({this.state.username, this.state.password});
    } else {
      alert("neither field can be empty!");
    }
  };

  // updateStateWithFromInput = (formName, formValue) => {
  //   this.setState({formName: formValue})
  // }

  render() {
    return (
      <form onSubmit={this.formHandler}>
        <div>
          <label>
            Username
            <input
              onChange={event =>
                this.setState({ username: event.target.value })
              }
              id="username"
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              id="password"
              name="password"
              type="password"
            />
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
