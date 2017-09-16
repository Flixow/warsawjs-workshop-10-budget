import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './category-card';
import CategoryForm from './category-form';

const CategoryList = ({
  items, onRemoveCategory, onAddCategory, handleChangeCategoryBudget
}) => (
  <div>
    <CategoryForm onSubmit={onAddCategory} />
    {items.map(item => (
      <CategoryCard
        key={item.id}
        item={item}
        onRemoveCategory={onRemoveCategory}
        handleChangeCategoryBudget={handleChangeCategoryBudget}
      />
    ))}
  </div>
);

CategoryList.propTypes = {
  items: PropTypes.array.isRequired
};

export default CategoryList;
