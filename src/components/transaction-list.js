import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './transaction-card';
import TransactionForm from './transaction-form';

const TransactionList = ({ items, onRemoveTransaction, onAddTransaction }) => (
  <div>
    <TransactionForm onSubmit={onAddTransaction} />
    {items.map(item => (
      <TransactionCard
        key={item.id}
        item={item}
        onRemoveTransaction={onRemoveTransaction}
      />
    ))}
  </div>
);

TransactionList.propTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionList;
