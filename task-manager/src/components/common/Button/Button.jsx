import React from 'react';
import './Button.css';

export const Button = ({ children, onClick, variant = 'primary', type = 'button', ...props }) => {
  return (
    <button 
      className={`button ${variant}`} 
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};