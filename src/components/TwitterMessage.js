import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message:'',
      remainingChar:props.maxChars
    };
  }

  handleTweetChange = (event) => {
    this.setState({
      message:event.target.value,
      remainingChar:this.props.maxChars-event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleTweetChange} value={this.state.message}/>
        <div>reamining character {this.state.remainingChar}</div>
      </div>
    );
  }
}

export default TwitterMessage;
