'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    
    // TODO: Implement actual signup logic
    console.log('Signup attempt:', formData);
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
    maxWidth: '400px'
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

  const linkStyle: React.CSSProperties = {
    color: 'var(--forest-green)',
    textDecoration: 'none',
    fontSize: '0.875rem'
  };

  const errorStyle: React.CSSProperties = {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    marginBottom: '1rem'
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <main style={mainStyle}>
        <div style={formContainerStyle}>
          <h1 style={headingStyle}>Create Account</h1>
          <p style={subheadingStyle}>
            Already have an account? <a href="/login" style={linkStyle}>Log in</a>
          </p>
          
          {error && <div style={errorStyle}>{error}</div>}
          
          <form onSubmit={handleSubmit} style={formStyle}>
            <Input
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
            />
            <Button type="submit" variant="primary" size="md">
              Sign Up
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
