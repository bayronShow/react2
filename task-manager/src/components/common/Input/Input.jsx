import React from 'react';
import './Input.css';

export const Input = ({ value, onChange, placeholder, ...props }) => {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};