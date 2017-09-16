import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';

class CategoryForm extends Component {
  state = {
    name: '',
    budgeted: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, budgeted} = this.state;

    this.props.onSubmit({
      name,
      budgeted,
      activity: 0
    })
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    const { name, budgeted } = this.state;

    return (
      <form
        className='Category-form'
        onSubmit={this.onSubmit}
      >
        <Input
          name='name'
          placeholder='Name'
          value={name}
          onChange={this.handleInputChange}
        />
        <Input
          name='budgeted'
          type='number'
          placeholder='Budgeted'
          value={budgeted}
          onChange={this.handleInputChange}
        />
        <button>New transaction</button>
      </form>
    )
  }
};

CategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CategoryForm;
