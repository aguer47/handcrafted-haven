import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--brown)'
  };

  const inputStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    border: error ? '1px solid #ef4444' : '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
    fontSize: '1rem'
  };

  const errorStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#ef4444'
  };

  return (
    <div style={containerStyle}>
      {label && (
        <label style={labelStyle}>
          {label}
        </label>
      )}
      <input
        style={inputStyle}
        {...props}
      />
      {error && (
        <span style={errorStyle}>{error}</span>
      )}
    </div>
  );
}
