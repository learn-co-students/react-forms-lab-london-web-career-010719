import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { tweet: "" };
  }

  remainingCharacters = number => this.props.maxChars - number;

  WordLength = event => this.setState({ tweet: event.target.value });

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.WordLength} type="text" />
        <p>
          Remaining characters:
          {this.remainingCharacters(this.state.tweet.length)}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
