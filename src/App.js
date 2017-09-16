import React, { Component } from 'react';

import {
  HelloStateless, HelloStateful, Counter, TransactionCard
} from './components';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    transactions: [
      {
        id: 1,
        description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
        value: 20,
        date: '16.09.2017',
        category: 'Edukacja'
      },
      {
        id: 2,
        description: 'Bilet na pociąg',
        value: 120,
        date: '07.09.2017',
        category: 'Transport'
      },
      {
        id: 3,
        description: 'Części do samochodu',
        value: 430,
        date: '26.08.2017',
        category: 'Samochód'
      }
    ]
  }

  render() {
    const { transactions } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <HelloStateless name='Daniel' />
        <HelloStateful name='Daniel' />
        <Counter />
        <TransactionCard item={transactions[0]} />
      </div>
    );
  }
}

export default App;
