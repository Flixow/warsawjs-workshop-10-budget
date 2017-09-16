import React from 'react';
import PropTypes from 'prop-types';

const TransactionCard = ({
  item: { id, description, value, date, category },
  onRemoveTransaction
}) => (
  <div className="Transaction-card">
    <div
      className="Transaction-card__Remove"
      onClick={() => onRemoveTransaction({ id })}
    >
      &times;
    </div>
    <h1>{description}</h1>
    <h2>{value} zł</h2>
    <div className='Transaction-card__metadata'>
      <span>{date}</span>
      <span>{category}</span>
    </div>
  </div>
);

TransactionCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default TransactionCard;
