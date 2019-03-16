import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleForm = e => {
    e.preventDefault();
    if (!this.state.password || !this.state.username) {
      alert("neither field can be empty!");
    } else {
      this.props.onSubmit(this.state);
    }
  };

  handleChange = (formName, formValue) => {
    this.setState({ [formName]: formValue });
  };

  render() {
    return (
      <form onSubmit={this.handleForm}>
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
