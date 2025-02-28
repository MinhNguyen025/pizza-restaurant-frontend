// src/components/Banner.js
import React from 'react';

function Banner() {
  return (
    <section style={styles.banner}>
      <div style={styles.bannerText}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Amazing Pizza</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Experience the taste of authentic pizza made with fresh ingredients.
        </p>
        <button style={styles.orderButton}>Order Now</button>
      </div>
      <div style={styles.bannerImage}>
        {/* Pizza Banner (placeholder) */}
        <img
          src="https://via.placeholder.com/400x300?text=Pizza+Banner"
          alt="Pizza Banner"
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
    </section>
  );
}

export default Banner;

const styles = {
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: '#fafafa',
    flexWrap: 'wrap',
  },
  bannerText: {
    flex: 1,
    minWidth: '280px',
    marginRight: '2rem',
  },
  orderButton: {
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
  },
  bannerImage: {
    flex: 1,
    minWidth: '280px',
    textAlign: 'center',
    marginTop: '1rem',
  },
};
