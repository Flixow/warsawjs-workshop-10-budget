import React, { Component } from 'react';

import HelloStateless from './components/hello-stateless';
import HelloStateful from './components/hello-stateful';
import Counter from './components/counter';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <HelloStateless name="Daniel" />
        <HelloStateful name="Daniel" />
        <Counter />
      </div>
    );
  }
}

export default App;
