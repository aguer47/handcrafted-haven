'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 cursor-pointer';
  
  const variantStyles = {
    primary: { backgroundColor: 'var(--brown)', color: 'white' },
    secondary: { backgroundColor: 'var(--forest-green)', color: 'white' },
    outline: { backgroundColor: 'transparent', border: '2px solid white', color: 'white' }
  };
  
  const sizeStyles = {
    sm: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
    md: { padding: '0.625rem 1.25rem', fontSize: '1rem' },
    lg: { padding: '0.75rem 1.75rem', fontSize: '1.125rem' }
  };
  
  return (
    <button
      className={baseStyles}
      style={{ ...variantStyles[variant], ...sizeStyles[size] }}
      {...props}
    >
      {children}
    </button>
  );
}
