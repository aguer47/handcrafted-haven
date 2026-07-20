import React from 'react';
import Button from './Button';

export default function Navbar() {
  const navStyle: React.CSSProperties = {
    backgroundColor: 'var(--brown)',
    color: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const flexStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem'
  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem'
  };

  const buttonsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={flexStyle}>
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--gold)', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>Handcrafted Haven</h1>
          </div>
          
          {/* Navigation Links */}
          <div style={linksContainerStyle}>
            <a href="#" style={linkStyle}>Browse</a>
            <a href="#" style={linkStyle}>Sell</a>
            <a href="#" style={linkStyle}>About</a>
          </div>
          
          {/* Auth Buttons */}
          <div style={buttonsContainerStyle}>
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="secondary" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
