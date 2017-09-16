import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './transaction-card';

const TransactionList = ({ items, onRemoveTransaction }) => (
  <div>
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
