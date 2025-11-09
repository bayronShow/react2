import React from 'react';
import './Button.css';

export const Button = ({ children, onClick, variant = 'primary', ...props }) => {
  return (
    <button 
      className={`button ${variant}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};