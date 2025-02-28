// src/components/Testimonials.js
import React from 'react';

function Testimonials() {
  const dummyTestimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Best pizza I have ever tasted! Highly recommended.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Lovely staff and cozy atmosphere. Will come back soon!'
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Customers Have to Say About Us</h2>
      <div style={styles.testimonialContainer}>
        {dummyTestimonials.map(t => (
          <div key={t.id} style={styles.testimonialCard}>
            <p style={{ fontStyle: 'italic' }}>"{t.review}"</p>
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#f44336', // tạm dùng màu đỏ
    color: '#fff',
    textAlign: 'center',
    padding: '3rem 1rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  testimonialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  testimonialCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '1rem',
    maxWidth: '300px',
    textAlign: 'left',
  },
};
