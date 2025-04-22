// src/components/Select.jsx
import React from 'react';
import './Select.scss';

/**
 * Reusable Select component
 * @param {Object} props
 * @param {string} props.id - Unique ID for the select element
 * @param {string} props.value - Currently selected value
 * @param {Function} props.onChange - Function to call when selection changes
 * @param {Array} props.options - Array of options (can be strings or objects with name/abbreviation)
 * @param {string} [props.optionKey] - Key to use for value if options are objects (e.g., 'abbreviation')
 * @param {string} [props.optionLabel] - Key to use for display if options are objects (e.g., 'name')
 * @param {string} [props.placeholder] - Placeholder text for empty selection
 * @returns {JSX.Element}
 */
const Select = ({ id, value, onChange, options, optionKey, optionLabel, placeholder }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="custom-select"
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => {
        const optionValue = optionKey ? option[optionKey] : option;
        const optionText = optionLabel ? option[optionLabel] : option;
        return (
          <option key={index} value={optionValue}>
            {optionText}
          </option>
        );
      })}
    </select>
  );
};

export default Select;