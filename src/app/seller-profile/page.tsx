'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function SellerProfilePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    bio: '',
    location: '',
    specialties: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formData.businessName || !formData.bio) {
      setError('Please fill in required fields');
      return;
    }
    
    // TODO: Implement actual profile creation logic
    console.log('Profile creation attempt:', formData);
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
    maxWidth: '500px'
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
    minHeight: '120px',
    resize: 'vertical'
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
          <h1 style={headingStyle}>Create Seller Profile</h1>
          <p style={subheadingStyle}>
            Tell buyers about yourself and your handcrafted products
          </p>
          
          {error && <div style={errorStyle}>{error}</div>}
          
          <form onSubmit={handleSubmit} style={formStyle}>
            <div>
              <label style={labelStyle}>Profile Photo</label>
              <div style={uploadStyle}>
                <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                  Click to upload or drag and drop
                </p>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                  PNG, JPG up to 5MB
                </p>
              </div>
            </div>
            
            <Input
              label="Business Name *"
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Your Artisan Shop"
            />
            
            <div>
              <label style={labelStyle}>Bio *</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell buyers about your craft, inspiration, and story..."
                style={textareaStyle}
              />
            </div>
            
            <Input
              label="Location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State"
            />
            
            <Input
              label="Specialties (comma separated)"
              type="text"
              name="specialties"
              value={formData.specialties}
              onChange={handleChange}
              placeholder="Jewelry, Pottery, Woodwork"
            />
            
            <Button type="submit" variant="primary" size="md">
              Create Profile
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
