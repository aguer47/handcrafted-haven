'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Button from '@/components/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  seller: string;
  rating: number;
}

const allProducts: Product[] = [
  { id: 1, name: 'Handwoven Basket', price: 45.00, category: 'home-decor', seller: 'Sarah Crafts', rating: 4.9 },
  { id: 2, name: 'Ceramic Vase', price: 65.00, category: 'pottery', seller: 'John Pottery', rating: 4.8 },
  { id: 3, name: 'Leather Wallet', price: 85.00, category: 'textiles', seller: 'Emma Leather', rating: 5.0 },
  { id: 4, name: 'Wooden Cutting Board', price: 55.00, category: 'woodwork', seller: 'Mike Woodworks', rating: 4.7 },
  { id: 5, name: 'Silver Earrings', price: 35.00, category: 'jewelry', seller: 'Lisa Jewelry', rating: 4.6 },
  { id: 6, name: 'Woven Wall Hanging', price: 75.00, category: 'textiles', seller: 'Sarah Crafts', rating: 4.8 },
  { id: 7, name: 'Ceramic Mug Set', price: 40.00, category: 'pottery', seller: 'John Pottery', rating: 4.5 },
  { id: 8, name: 'Wooden Bowl', price: 30.00, category: 'woodwork', seller: 'Mike Woodworks', rating: 4.9 },
  { id: 9, name: 'Beaded Necklace', price: 25.00, category: 'jewelry', seller: 'Lisa Jewelry', rating: 4.7 },
  { id: 10, name: 'Hand-painted Canvas', price: 120.00, category: 'art-prints', seller: 'Art Studio', rating: 5.0 },
  { id: 11, name: 'Knitted Scarf', price: 45.00, category: 'textiles', seller: 'Emma Knits', rating: 4.6 },
  { id: 12, name: 'Wooden Picture Frame', price: 35.00, category: 'woodwork', seller: 'Mike Woodworks', rating: 4.4 }
];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'low' && product.price < 50) ||
                        (priceRange === 'medium' && product.price >= 50 && product.price < 100) ||
                        (priceRange === 'high' && product.price >= 100);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const mainStyle: React.CSSProperties = {
    flex: 1,
    padding: '2rem 1rem',
    backgroundColor: 'var(--cream)'
  };

  const containerMaxWidth: React.CSSProperties = {
    maxWidth: '80rem',
    margin: '0 auto'
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--brown)',
    marginBottom: '2rem'
  };

  const filtersStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: 'var(--white)',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  };

  const filterRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    minWidth: '200px',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '1rem'
  };

  const selectStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    backgroundColor: 'white',
    minWidth: '150px'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem'
  };

  const productImageStyle: React.CSSProperties = {
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
    marginBottom: '0.25rem'
  };

  const sellerStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#4b5563',
    marginBottom: '0.25rem'
  };

  const ratingStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.875rem'
  };

  const noResultsStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '3rem',
    color: '#6b7280',
    fontSize: '1.125rem'
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <main style={mainStyle}>
        <div style={containerMaxWidth}>
          <h1 style={headingStyle}>Browse Products</h1>
          
          <div style={filtersStyle}>
            <div style={filterRowStyle}>
              <input
                type="text"
                placeholder="Search products or sellers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={inputStyle}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={selectStyle}
              >
                <option value="all">All Categories</option>
                <option value="jewelry">Jewelry</option>
                <option value="home-decor">Home Decor</option>
                <option value="art-prints">Art & Prints</option>
                <option value="textiles">Textiles</option>
                <option value="pottery">Pottery</option>
                <option value="woodwork">Woodwork</option>
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                style={selectStyle}
              >
                <option value="all">All Prices</option>
                <option value="low">Under $50</option>
                <option value="medium">$50 - $100</option>
                <option value="high">$100+</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={noResultsStyle}>
              No products found matching your criteria.
            </div>
          ) : (
            <div style={gridStyle}>
              {filteredProducts.map((product) => (
                <Card key={product.id} onClick={() => {}}>
                  <div style={productImageStyle}>
                    <span>Product Image</span>
                  </div>
                  <h3 style={nameStyle}>{product.name}</h3>
                  <p style={priceStyle}>${product.price.toFixed(2)}</p>
                  <p style={sellerStyle}>by {product.seller}</p>
                  <div style={ratingStyle}>
                    <span style={{ color: 'var(--gold)' }}>★</span>
                    <span style={{ color: '#4b5563' }}>{product.rating.toFixed(1)}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
