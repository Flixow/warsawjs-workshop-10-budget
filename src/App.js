import React, { Component } from 'react';

import {
  TransactionList, CategoryCard
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
    ],
    categories: [
      {
        id: 1,
        name: 'Edukacja',
        budgeted: 100,
        activity: 50
      },
      {
        id: 2,
        name: 'Transport',
        budgeted: 200,
        activity: 123
      },
      {
        id: 3,
        name: 'Samochód',
        budgeted: 300,
        activity: 170
      }
    ]
  }

  handleRemoveTransaction = ({ id }) => {
    const { transactions } = this.state;

    this.setState({ transactions: transactions.filter(transaction => transaction.id !== id) });
  }

  handleAddTransaction = (transaction) => {
    const { transactions } = this.state;

    this.setState({
      transactions: [
        ...transactions,
        { id: Math.random().toString(36).substring(7), ...transaction }
      ]
    });
  }

  handleChangeCategoryBudget = ({ id, budgeted }) => {
    const { categories } = this.state;
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
      console.error(`Category with index ${id} not found`)
      return;
    }

    categories[categoryIndex].budgeted = budgeted;
    this.setState({ categories });
  }

  render() {
    const { transactions, categories } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TransactionList
          items={transactions}
          onRemoveTransaction={this.handleRemoveTransaction}
          onAddTransaction={this.handleAddTransaction}
        />
        <CategoryCard
          item={categories[0]}
          handleChangeCategoryBudget={this.handleChangeCategoryBudget}
        />
      </div>
    );
  }
}

export default App;
