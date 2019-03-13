import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ''
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input name="message" value={this.state.message} onChange={this.handleInputChange} type="text" />
        <p> {this.props.maxChars - this.state.message.length} char(s) remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
