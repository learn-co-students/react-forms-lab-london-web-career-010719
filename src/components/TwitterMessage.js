import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    // maxChars = this.props.maxChars

    this.state = {
      value: "",
     
    };
  }

  handleChange=(event)=>{
    this.setState(
      {value :event.target.value},
    )

  }

  render() {
    
    return (
      <div>
        
        <strong>Your message:</strong>
        <h3>Remaining Character:{this.props.maxChars - this.state.value.length}</h3>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
