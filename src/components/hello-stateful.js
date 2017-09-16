import React, { Component } from 'react';

class HelloStateful extends Component {
  render() {
    return <div>Witaj {this.props.name}. Z tej strony stateful component.</div>
  }
}

export default HelloStateful;
