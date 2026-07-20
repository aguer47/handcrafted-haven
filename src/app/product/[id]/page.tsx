'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: 'Emily R.', rating: 5, comment: 'Absolutely beautiful craftsmanship! The basket is even better in person.', date: '2024-01-15' },
    { id: 2, name: 'Michael T.', rating: 4, comment: 'Great quality and unique design. Shipping was fast too!', date: '2024-01-10' }
  ]);

  // Mock product data - in real app, this would come from params.id
  const product = {
    id: 1,
    name: 'Handwoven Basket',
    price: 45.00,
    description: 'This beautiful handwoven basket is crafted using traditional techniques passed down through generations. Made from natural materials, each basket is unique and perfect for storage or decoration.',
    category: 'Home Decor',
    seller: {
      name: 'Sarah Crafts',
      rating: 4.9,
      bio: 'Master weaver with 15 years of experience creating beautiful handmade baskets.',
      image: '/images/artisans/artisan1-Sarah.jpg'
    },
    images: [
      '/images/products/basket-handwoven.jpg',
      '/images/products/basket-handwoven1.jpg',
      '/images/products/basket-handwoven2.jpg'
    ],
    averageRating: 4.7,
    reviewCount: 2
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment.trim()) return;
    
    const review: Review = {
      id: reviews.length + 1,
      name: 'You',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([...reviews, review]);
    setNewReview({ rating: 5, comment: '' });
  };

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

  const contentGridStyle: React.CSSProperties = {
    marginBottom: '3rem'
  };

  const imageGalleryStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1rem'
  };

  const mainImageStyle: React.CSSProperties = {
    aspectRatio: '1/1',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    fontSize: '1rem'
  };

  const thumbnailStyle: React.CSSProperties = {
    aspectRatio: '1/1',
    backgroundColor: '#f3f4f6',
    borderRadius: '0.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    fontSize: '0.75rem',
    cursor: 'pointer'
  };

  const detailsStyle: React.CSSProperties = {};

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--brown)',
    marginBottom: '0.5rem'
  };

  const priceStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--forest-green)',
    marginBottom: '1rem'
  };

  const ratingStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  };

  const descriptionStyle: React.CSSProperties = {
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '2rem'
  };

  const sellerCardStyle: React.CSSProperties = {
    padding: '1.5rem',
    backgroundColor: '#fafafa',
    borderRadius: '0.5rem',
    marginBottom: '2rem'
  };

  const sellerNameStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: 'var(--brown)',
    marginBottom: '0.25rem'
  };

  const actionsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--brown)',
    marginBottom: '1.5rem'
  };

  const reviewsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem'
  };

  const reviewFormStyle: React.CSSProperties = {
    backgroundColor: 'var(--white)',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    marginBottom: '2rem'
  };

  const textareaStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    minHeight: '100px',
    marginBottom: '1rem',
    fontSize: '1rem'
  };

  const selectStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    marginBottom: '1rem'
  };

  const reviewCardStyle: React.CSSProperties = {
    padding: '1rem'
  };

  const reviewStarsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.25rem',
    marginBottom: '0.5rem'
  };

  const reviewCommentStyle: React.CSSProperties = {
    color: '#374151',
    fontStyle: 'italic',
    marginBottom: '0.5rem'
  };

  const reviewMetaStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <main style={mainStyle}>
        <div style={containerMaxWidth}>
          <div className="product-detail-grid" style={contentGridStyle}>
            {/* Image Gallery */}
            <div style={imageGalleryStyle}>
              <img 
                src={product.images[0]} 
                alt={product.name} 
                style={{ ...mainImageStyle, objectFit: 'cover' }} 
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {product.images.map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`${product.name} view ${i + 1}`} 
                    style={{ ...thumbnailStyle, objectFit: 'cover' }} 
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div style={detailsStyle}>
              <h1 style={titleStyle}>{product.name}</h1>
              <p style={priceStyle}>${product.price.toFixed(2)}</p>
              
              <div style={ratingStyle}>
                <span style={{ color: 'var(--gold)', fontSize: '1.25rem' }}>★</span>
                <span style={{ fontWeight: 600 }}>{product.averageRating.toFixed(1)}</span>
                <span style={{ color: '#6b7280' }}>({product.reviewCount} reviews)</span>
              </div>

              <p style={descriptionStyle}>{product.description}</p>

              <div style={sellerCardStyle}>
                <h3 style={sellerNameStyle}>Sold by {product.seller.name}</h3>
                <div style={ratingStyle}>
                  <span style={{ color: 'var(--gold)' }}>★</span>
                  <span>{product.seller.rating.toFixed(1)} seller rating</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{product.seller.bio}</p>
              </div>

              <div style={actionsStyle}>
                <Button variant="primary" size="lg" style={{ flex: 1 }}>
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Customer Reviews</h2>
            
            <div style={reviewFormStyle}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Leave a Review</h3>
              <form onSubmit={handleSubmitReview}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
                    Rating
                  </label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    style={selectStyle}
                  >
                    {[5, , 3, 2, 1].map((rating) => (
                      <option key={rating} value={rating}>{rating} Stars</option>
                    ))}
                  </select>
                </div>
                <textarea
                  placeholder="Share your experience with this product..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  style={textareaStyle}
                />
                <Button type="submit" variant="primary" size="md">
                  Submit Review
                </Button>
              </form>
            </div>

            <div style={reviewsGridStyle}>
              {reviews.map((review) => (
                <Card key={review.id}>
                  <div style={reviewCardStyle}>
                    <div style={reviewStarsStyle}>
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} style={{ color: 'var(--gold)' }}>★</span>
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <span key={i} style={{ color: '#d1d5db' }}>★</span>
                      ))}
                    </div>
                    <p style={reviewCommentStyle}>"{review.comment}"</p>
                    <div style={reviewMetaStyle}>
                      <span style={{ fontWeight: 600 }}>{review.name}</span>
                      <span> • {review.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
