'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    images: [] as File[]
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: Array.from(e.target.files)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.price || !formData.category) {
      setError('Please fill in all required fields');
      return;
    }
    
    const priceNum = parseFloat(formData.price);
    if (isNaN(priceNum) || priceNum <= 0) {
      setError('Please enter a valid price');
      return;
    }
    
    // TODO: Implement actual product creation logic
    console.log('Product creation attempt:', formData);
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const mainStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    backgroundColor: 'var(--cream)'
  };

  const formContainerStyle: React.CSSProperties = {
    backgroundColor: 'var(--white)',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    width: '100%',
    maxWidth: '600px'
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--brown)',
    marginBottom: '0.5rem',
    textAlign: 'center'
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#4b5563',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const textareaStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
    fontSize: '1rem',
    fontFamily: 'inherit',
    minHeight: '150px',
    resize: 'vertical'
  };

  const selectStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: 'white',
    width: '100%'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--brown)',
    marginBottom: '0.25rem',
    display: 'block'
  };

  const errorStyle: React.CSSProperties = {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    marginBottom: '1rem'
  };

  const uploadStyle: React.CSSProperties = {
    border: '2px dashed #d1d5db',
    borderRadius: '0.5rem',
    padding: '2rem',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.2s'
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <main style={mainStyle}>
        <div style={formContainerStyle}>
          <h1 style={headingStyle}>Add New Product</h1>
          <p style={subheadingStyle}>
            List your handcrafted item for sale
          </p>
          
          {error && <div style={errorStyle}>{error}</div>}
          
          <form onSubmit={handleSubmit} style={formStyle}>
            <div>
              <label style={labelStyle}>Product Images *</label>
              <div style={uploadStyle}>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  id="image-upload"
                />
                <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
                  <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                    Click to upload or drag and drop
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                    PNG, JPG up to 5MB each (max 5 images)
                  </p>
                </label>
              </div>
              {formData.images.length > 0 && (
                <p style={{ fontSize: '0.875rem', color: 'var(--forest-green)', marginTop: '0.5rem' }}>
                  {formData.images.length} image(s) selected
                </p>
              )}
            </div>
            
            <Input
              label="Product Title *"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Handwoven Basket"
            />
            
            <div>
              <label style={labelStyle}>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your product, materials used, dimensions, and any special features..."
                style={textareaStyle}
              />
            </div>
            
            <Input
              label="Price ($) *"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="45.00"
              step="0.01"
              min="0"
            />
            
            <div>
              <label style={labelStyle}>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={selectStyle}
              >
                <option value="">Select a category</option>
                <option value="jewelry">Jewelry</option>
                <option value="home-decor">Home Decor</option>
                <option value="art-prints">Art & Prints</option>
                <option value="textiles">Textiles</option>
                <option value="pottery">Pottery</option>
                <option value="woodwork">Woodwork</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <Button type="submit" variant="primary" size="md">
              List Product
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
