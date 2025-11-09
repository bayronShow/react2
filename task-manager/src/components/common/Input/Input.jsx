import React from 'react';
import './Input.css';

export const Input = ({ value, onChange, placeholder, className = '', ...props }) => {
  return (
    <input
      className={`input ${className}`}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};