import React from 'react';
import PropTypes from 'prop-types';
import TransactionCard from './transaction-card';
import TransactionForm from './transaction-form';
import CategoryCard from './category-card';

const TransactionList = ({
  items, onRemoveTransaction, onAddTransaction, setCategory, selectedCategory,
  categories
}) => {
  const currentCategory = categories.find(category => category.name === selectedCategory)

  return (
    <div>
      <TransactionForm onSubmit={onAddTransaction} />
      {currentCategory && (
        <CategoryCard readOnly item={currentCategory} />
      )}
      {items
        .filter(item => selectedCategory? item.category === selectedCategory : true)
        .map(item => (
          <TransactionCard
            key={item.id}
            item={item}
            onRemoveTransaction={onRemoveTransaction}
            setCategory={setCategory}
          />
        )
      )}
    </div>
  )
}

TransactionList.propTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionList;
