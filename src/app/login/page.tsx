'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // TODO: Implement actual login logic
    console.log('Login attempt:', { email, password });
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
          <h1 style={headingStyle}>Welcome Back</h1>
          <p style={subheadingStyle}>
            Don't have an account? <a href="/signup" style={linkStyle}>Sign up</a>
          </p>
          
          {error && <div style={errorStyle}>{error}</div>}
          
          <form onSubmit={handleSubmit} style={formStyle}>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <div style={{ textAlign: 'right' }}>
              <a href="#" style={linkStyle}>Forgot password?</a>
            </div>
            <Button type="submit" variant="primary" size="md">
              Log In
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
