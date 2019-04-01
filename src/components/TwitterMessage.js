import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charsLeft: this.props.maxChars};
  }

  handleOnChange = (e) => {
    this.setState({
      message: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleOnChange}
          value={this.state.message}
        />
        <p> Chars Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
