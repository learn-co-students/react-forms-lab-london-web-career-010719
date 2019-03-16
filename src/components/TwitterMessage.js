import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { tweet: "" };
  }

  remainingCharacters = number => this.props.maxChars - number;

  handleChange = event => this.setState({ tweet: event.target.value });

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.tweet}
        />
        <p>
          Remaining characters:
          {this.remainingCharacters(this.state.tweet.length)}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
