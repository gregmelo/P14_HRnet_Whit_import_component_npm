// src/components/Button.jsx
import React from 'react';
import './Button.scss';

/**
 * Reusable Button component
 * @param {Object} props
 * @param {string} props.text - Text to display inside the button
 * @param {Function} [props.onClick] - Function to call when the button is clicked
 * @param {string} [props.className] - Additional custom classes to append
 * @returns {JSX.Element}
 */
const Button = ({ text, onClick, className = '' }) => {
  return (
    <button
      className={`button ${className}`} // Combine la classe de base "button" avec les classes supplémentaires
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;