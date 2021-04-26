import React, { Component } from 'react';

class Welcome extends Component  {
  render() {
    return <h1>Math start by some class testing in the beginning. {this.props.name} -> {this.props.isKeenOn}</h1>
  }
}

export default Welcome
