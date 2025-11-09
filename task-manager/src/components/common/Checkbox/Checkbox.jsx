import React from 'react';
import './Checkbox.css';

export const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};