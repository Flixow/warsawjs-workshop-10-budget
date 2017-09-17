import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';

class TransactionForm extends Component {
  state = {
    description: '',
    value: '',
    date: '',
    category: this.props.categories[0].name
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { description, value, date, category } = this.state;

    this.props.onSubmit({
      description,
      value: Number(value),
      date,
      category
    })
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    const { description, value, date, category } = this.state;

    return (
      <form
        className='Transaction-form'
        onSubmit={this.onSubmit}
      >
        <Input
          name='description'
          placeholder='Description'
          value={description}
          onChange={this.handleInputChange}
        />
        <Input
          name='value'
          type='number'
          placeholder='value'
          value={value}
          onChange={this.handleInputChange}
        />
        <Input
          name='date'
          type='text'
          placeholder='Date'
          value={date}
          onChange={this.handleInputChange}
        />
        <select
          value={category}
          onChange={(e) => this.handleInputChange('category', e.target.value)}
        >
          {this.props.categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button>New transaction</button>
      </form>
    )
  }
};

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default TransactionForm;
