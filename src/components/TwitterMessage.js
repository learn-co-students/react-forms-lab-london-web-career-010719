import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { tweetLength: 0 };
  }

  remainingCharacters = number => this.props.maxChars - number;

  WordLength = event =>
    this.setState({ tweetLength: event.target.value.length });

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.WordLength} type="text" />
        <p>
          Remaining characters:
          {this.remainingCharacters(this.state.tweetLength)}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
