import React from 'react';
import Button from './Button';

export default function Hero() {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: 'var(--forest-green)',
    color: 'white',
    padding: '5rem 1rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const heroImageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.15,
    zIndex: 0
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: 'var(--gold)',
    textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    maxWidth: '48rem',
    margin: '0 auto 2rem',
    opacity: 0.9
  };

  const buttonsStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center'
  };

  return (
    <section style={sectionStyle}>
      {/* Optional hero image - replace with your own image path! */}
      <img 
        src="/images/hero/hero-handcrafted-items.jpg" 
        alt="Handcrafted items" 
        style={heroImageStyle} 
      />
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Discover Unique Handmade Treasures
        </h2>
        <p style={paragraphStyle}>
          Connect with talented artisans and find one-of-a-kind handmade goods crafted with love and care.
        </p>
        <div style={buttonsStyle}>
          <Button variant="secondary" size="lg">
            Start Shopping
          </Button>
          <Button variant="outline" size="lg">
            Become a Seller
          </Button>
        </div>
      </div>
    </section>
  );
}
