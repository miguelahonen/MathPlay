import React, { Component } from 'react';

class Message extends Component  {

  constructor() {
    super()
    this.state = {
      message: 'Welcome to the math paradice, click me in!'
    }
  }

  changeMessage() {
    this.setState({
      message: "As you can see.."
    })
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={() => this.changeMessage()}>{this.state.message === 'Welcome to the math paradice, click me in!' ? 'I want to join' : '.. you are now in.'}</button>

      </div>
    )
  }
}

export default Message
