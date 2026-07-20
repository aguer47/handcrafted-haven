import React from 'react';

export default function Footer() {
  const footerStyle: React.CSSProperties = {
    backgroundColor: 'var(--brown)',
    color: 'white',
    padding: '3rem 1rem'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const brandStyle: React.CSSProperties = {};

  const brandHeadingStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--gold)',
    marginBottom: '1rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  };

  const brandTextStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    opacity: 0.9
  };

  const sectionStyle: React.CSSProperties = {};

  const sectionHeadingStyle: React.CSSProperties = {
    fontWeight: 600,
    marginBottom: '1rem'
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s'
  };

  const dividerStyle: React.CSSProperties = {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    opacity: 0.9
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Brand */}
          <div style={brandStyle}>
            <h4 style={brandHeadingStyle}>Handcrafted Haven</h4>
            <p style={brandTextStyle}>
              A marketplace for unique handmade goods crafted with love and care.
            </p>
          </div>
          
          {/* Quick Links */}
          <div style={sectionStyle}>
            <h5 style={sectionHeadingStyle}>Quick Links</h5>
            <ul style={listStyle}>
              <li><a href="#" style={linkStyle}>Browse Products</a></li>
              <li><a href="#" style={linkStyle}>Become a Seller</a></li>
              <li><a href="#" style={linkStyle}>About Us</a></li>
              <li><a href="#" style={linkStyle}>Contact</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div style={sectionStyle}>
            <h5 style={sectionHeadingStyle}>Support</h5>
            <ul style={listStyle}>
              <li><a href="#" style={linkStyle}>FAQ</a></li>
              <li><a href="#" style={linkStyle}>Shipping Info</a></li>
              <li><a href="#" style={linkStyle}>Returns</a></li>
              <li><a href="#" style={linkStyle}>Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div style={sectionStyle}>
            <h5 style={sectionHeadingStyle}>Connect With Us</h5>
            <ul style={listStyle}>
              <li><a href="#" style={linkStyle}>Instagram</a></li>
              <li><a href="#" style={linkStyle}>Facebook</a></li>
              <li><a href="#" style={linkStyle}>Pinterest</a></li>
              <li><a href="#" style={linkStyle}>Twitter</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={dividerStyle}>
          <p>© 2024 Handcrafted Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
