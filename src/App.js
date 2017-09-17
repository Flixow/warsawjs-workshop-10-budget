import React, { Component } from 'react';

import {
  TransactionList, CategoryList
} from './components';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    currentView: 'transactions',
    selectedCategory: null,
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
    const { transactions, categories } = this.state;
    const transactionCategory = transactions.find(transaction => transaction.id === id).category
    const transactionsWithSameCategory = transactions.filter(transaction => transaction.category === transactionCategory)

    if (transactionsWithSameCategory.length <= 1) { // W tym momencie w transactions mamy jeszcze transakcję którą usuwamy
      this.setState({ categories: categories.filter(category => category.name !== transactionCategory) });
    }

    this.setState({ transactions: transactions.filter(transaction => transaction.id !== id) });
  }

  handleAddTransaction = (transaction) => {
    const { transactions, categories } = this.state;
    const categoryIndex = categories.findIndex(category => category.name === transaction.category);

    if (categoryIndex === -1) {
      console.error(`Category with index ${transaction.category} not found`)
      return;
    }

    categories[categoryIndex].activity += transaction.value;

    this.setState({
      transactions: [
        ...transactions,
        { id: Math.random().toString(36).substring(7), ...transaction }
      ],
      categories
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

  handleAddCategory = (category) => {
    const { categories } = this.state;

    this.setState({
      categories: [
        ...categories,
        { id: Math.random().toString(36).substring(7), ...category }
      ]
    });
  }

  handleRemoveCategory = ({ id }) => {
    const { categories } = this.state;

    this.setState({ categories: categories.filter(category => category.id !== id) });
  }

  handleChangeView = (view) => {
    this.setState({
      currentView: view,
      selectedCategory: null
    });
  }

  handleSetCategory = (name) => {
    this.setState({ selectedCategory: name });
  }

  render() {
    const { transactions, categories, currentView, selectedCategory } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <button onClick={() => this.handleChangeView('transactions')}>Transactions</button>
          <button onClick={() => this.handleChangeView('categories')}>Categories</button>
        </div>
        {currentView === 'transactions' || !!selectedCategory ? (
          <TransactionList
            items={transactions}
            onRemoveTransaction={this.handleRemoveTransaction}
            onAddTransaction={this.handleAddTransaction}
            setCategory={this.handleSetCategory}
            selectedCategory={selectedCategory}
            categories={categories}
          />
        ) : (
          <CategoryList
            items={categories}
            handleChangeCategoryBudget={this.handleChangeCategoryBudget}
            onRemoveCategory={this.handleRemoveCategory}
            onAddCategory={this.handleAddCategory}
            setCategory={this.handleSetCategory}
            selectedCategory={selectedCategory}
          />
        )}
      </div>
    );
  }
}

export default App;
