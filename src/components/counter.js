import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: ++this.state.count
    });
  }

  decrementCount = () => {
    this.setState({
      count: --this.state.count
    });
  }

  render() {
    const {count} = this.state;

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default Counter;
