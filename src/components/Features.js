// src/components/Features.js
import React from 'react';

function Features() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Feed the Beast with a Pizza Feast</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto' }}>
        Our pizzas are crafted to satisfy your deepest cravings. 
        From classic Margherita to adventurous new flavors, we’ve got something for everyone.
      </p>

      <div style={styles.imageWrapper}>
        <img
          src="https://via.placeholder.com/600x300?text=Pizza+Feast"
          alt="Pizza Feast"
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
    </section>
  );
}

export default Features;

const styles = {
  section: {
    textAlign: 'center',
    padding: '3rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  imageWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
};
