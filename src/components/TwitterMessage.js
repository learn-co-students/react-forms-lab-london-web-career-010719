import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { characters: this.props.maxChars };
  }

  remainingCharacters = number => {
    return this.props.maxChars - number;
  };

  showWordLength = event => console.log(event.target.value.length);

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.showWordLength} type="text" />
        <p>Remaining characters: {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
