// src/components/Input.jsx
import React from 'react';
import './Input.scss';

/**
 * Reusable Input component
 * @param {Object} props
 * @param {string} props.id - Unique ID for the input element
 * @param {string} props.value - Current value of the input
 * @param {Function} props.onChange - Function to call when input changes
 * @param {string} [props.type] - Input type (e.g., 'text', 'number', defaults to 'text')
 * @param {string} [props.placeholder] - Placeholder text
 * @returns {JSX.Element}
 */
const Input = ({ id, value, onChange, type = 'text', placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="custom-input"
    />
  );
};

export default Input;