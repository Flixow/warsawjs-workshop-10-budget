import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, type = 'text', placeholder, value, onChange, ...other }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(name, e.target.value)}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
