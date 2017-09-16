import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TransactionForm extends Component {
  state = {
    description: '',
    value: '',
    date: '',
    category: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { description, value, date, category } = this.state;

    this.props.onSubmit({
      description,
      value,
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
        <input
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => this.handleInputChange('description', e.target.value)}
        />
        <input
          type='number'
          placeholder='value'
          value={value}
          onChange={(e) => this.handleInputChange('value', e.target.value)}
        />
        <input
          type='text'
          placeholder='Date'
          value={date}
          onChange={(e) => this.handleInputChange('date', e.target.value)}
        />
        <input
          type='text'
          placeholder='Category'
          value={category}
          onChange={(e) => this.handleInputChange('category', e.target.value)}
        />
        <button>New transaction</button>
      </form>
    )
  }
};

// TransactionForm.propTypes = {
//   : PropTypes.
// };

export default TransactionForm;
