import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      character: props.maxChars
    };
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      message: value,
      character: this.props.maxChars - value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        <p>{this.state.character}</p>
      </div>
    );
  }
}

export default TwitterMessage;
