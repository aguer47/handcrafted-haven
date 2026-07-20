'use client';

import React from 'react';
import Card from './Card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  seller: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Handwoven Basket',
    price: 45.00,
    image: '/images/products/basket-handwoven.jpg',
    seller: 'Sarah Crafts'
  },
  {
    id: 2,
    name: 'Ceramic Vase',
    price: 65.00,
    image: '/images/products/ceramic-vase-blue.jpg',
    seller: 'John Pottery'
  },
  {
    id: 3,
    name: 'Leather Wallet',
    price: 85.00,
    image: '/images/products/leather-wallet-brown.jpg',
    seller: 'Emma Leather'
  },
  {
    id: 4,
    name: 'Wooden Cutting Board',
    price: 55.00,
    image: '/images/products/cutting-board-wooden.jpg',
    seller: 'Mike Woodworks'
  }
];

export default function FeaturedProducts() {
  const sectionStyle: React.CSSProperties = {
    padding: '4rem 1rem',
    backgroundColor: 'var(--cream)'
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



  const imagePlaceholderStyle: React.CSSProperties = {
    aspectRatio: '1/1',
    backgroundColor: '#e5e7eb',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    fontSize: '0.875rem'
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: 'var(--brown)',
    marginBottom: '0.5rem'
  };

  const priceStyle: React.CSSProperties = {
    color: 'var(--forest-green)',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const sellerStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#4b5563'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h3 style={headingStyle}>
          Featured Products
        </h3>
        <div className="grid-responsive">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ ...imagePlaceholderStyle, objectFit: 'cover' }} 
              />
              <h4 style={nameStyle}>{product.name}</h4>
              <p style={priceStyle}>${product.price.toFixed(2)}</p>
              <p style={sellerStyle}>by {product.seller}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
