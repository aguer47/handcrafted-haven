'use client';

import React from 'react';
import Card from './Card';

interface Category {
  name: string;
  description: string;
  icon: string;
}

const categories: Category[] = [
  {
    name: 'Jewelry',
    description: 'Handcrafted accessories and adornments',
    icon: '💎'
  },
  {
    name: 'Home Decor',
    description: 'Unique pieces for your living space',
    icon: '🏠'
  },
  {
    name: 'Art & Prints',
    description: 'Original artwork and prints',
    icon: '🖼'
  },
  {
    name: 'Textiles',
    description: 'Handmade fabrics and clothing',
    icon: '🧵'
  }
];

export default function Categories() {
  const sectionStyle: React.CSSProperties = {
    padding: '4rem 1rem',
    backgroundColor: 'var(--white)'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto'
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: 'var(--brown)',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem'
  };

  const cardContentStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '1.5rem'
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '2.25rem',
    marginBottom: '1rem'
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: 'var(--brown)',
    marginBottom: '0.5rem'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#4b5563'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h3 style={headingStyle}>
          Shop by Category
        </h3>
        <div style={gridStyle}>
          {categories.map((category) => (
            <Card key={category.name} onClick={() => {}}>
              <div style={cardContentStyle}>
                <div style={iconStyle}>{category.icon}</div>
                <h4 style={nameStyle}>{category.name}</h4>
                <p style={descriptionStyle}>{category.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
