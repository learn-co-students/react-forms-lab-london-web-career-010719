import React from "react";

class TwitterMessage extends React.Component {

state = {
  chars: this.props.maxChars,
  message: ''
}

getChar = (event) => {
let char = event.target.value.length
this.setState({
  chars: 140-char
})
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.getChar}/>
        <label>{this.state.chars}</label>
      </div>
    );
  }
}

export default TwitterMessage;
