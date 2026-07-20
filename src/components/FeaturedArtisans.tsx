import React from 'react';
import Card from './Card';

interface Artisan {
  name: string;
  specialty: string;
  image: string;
  rating: number;
}

const featuredArtisans: Artisan[] = [
  {
    name: 'Sarah Crafts',
    specialty: 'Basket Weaving',
    image: '/sarah.jpg',
    rating: 4.9
  },
  {
    name: 'John Pottery',
    specialty: 'Ceramics',
    image: '/john.jpg',
    rating: 4.8
  },
  {
    name: 'Emma Leather',
    specialty: 'Leather Goods',
    image: '/emma.jpg',
    rating: 5.0
  },
  {
    name: 'Mike Woodworks',
    specialty: 'Woodworking',
    image: '/mike.jpg',
    rating: 4.7
  }
];

export default function FeaturedArtisans() {
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

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1.5rem'
  };

  const cardContentStyle: React.CSSProperties = {
    textAlign: 'center'
  };

  const photoPlaceholderStyle: React.CSSProperties = {
    width: '6rem',
    height: '6rem',
    margin: '0 auto 1rem',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
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
    marginBottom: '0.25rem'
  };

  const specialtyStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'var(--forest-green)',
    marginBottom: '0.5rem'
  };

  const ratingStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h3 style={headingStyle}>
          Featured Artisans
        </h3>
        <div style={gridStyle}>
          {featuredArtisans.map((artisan) => (
            <Card key={artisan.name}>
              <div style={cardContentStyle}>
                <div style={photoPlaceholderStyle}>
                  <span>Photo</span>
                </div>
                <h4 style={nameStyle}>{artisan.name}</h4>
                <p style={specialtyStyle}>{artisan.specialty}</p>
                <div style={ratingStyle}>
                  <span style={{ color: 'var(--gold)' }}>★</span>
                  <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>{artisan.rating.toFixed(1)}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
