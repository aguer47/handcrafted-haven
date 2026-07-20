import React from 'react';
import Card from './Card';

interface Review {
  name: string;
  product: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    name: 'Emily R.',
    product: 'Handwoven Basket',
    rating: 5,
    comment: 'Absolutely beautiful craftsmanship! The basket is even better in person.'
  },
  {
    name: 'Michael T.',
    product: 'Ceramic Vase',
    rating: 4,
    comment: 'Great quality and unique design. Shipping was fast too!'
  },
  {
    name: 'Sarah L.',
    product: 'Leather Wallet',
    rating: 5,
    comment: 'The leather is so soft and the stitching is perfect. Love it!'
  }
];

export default function CustomerReviews() {
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
    padding: '1.5rem'
  };

  const starsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    marginBottom: '0.75rem'
  };

  const commentStyle: React.CSSProperties = {
    color: '#374151',
    marginBottom: '1rem',
    fontStyle: 'italic'
  };

  const dividerStyle: React.CSSProperties = {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '0.75rem'
  };

  const nameStyle: React.CSSProperties = {
    fontWeight: 600,
    color: 'var(--brown)'
  };

  const productStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#4b5563'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h3 style={headingStyle}>
          Customer Reviews
        </h3>
        <div style={gridStyle}>
          {reviews.map((review, index) => (
            <Card key={index}>
              <div style={cardContentStyle}>
                <div style={starsStyle}>
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} style={{ color: 'var(--gold)', fontSize: '1.125rem' }}>★</span>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#d1d5db', fontSize: '1.125rem' }}>★</span>
                  ))}
                </div>
                <p style={commentStyle}>"{review.comment}"</p>
                <div style={dividerStyle}>
                  <p style={nameStyle}>{review.name}</p>
                  <p style={productStyle}>Purchased: {review.product}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
