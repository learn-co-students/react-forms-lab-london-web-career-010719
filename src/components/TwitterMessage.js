import React from "react"

class TwitterMessage extends React.Component {
  constructor() {
    super()

    this.state = {
      message: ""
    }
  }

  handleChangeEvent = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.maxChars - this.state.message.length}</p>
        <strong>Your message:</strong>
        <input
          value={this.state.message}
          onChange={this.handleChangeEvent}
          type="text"
        />
      </div>
    )
  }
}

export default TwitterMessage
