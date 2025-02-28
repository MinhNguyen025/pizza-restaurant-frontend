// src/components/MenuSection.js
import React from 'react';

function MenuSection() {
  const dummyPizzas = [
    {
      id: 1,
      name: 'Margherita',
      img: 'https://via.placeholder.com/100?text=Margherita',
      description: 'Tomato, mozzarella, and basil.',
    },
    {
      id: 2,
      name: 'Pepperoni',
      img: 'https://via.placeholder.com/100?text=Pepperoni',
      description: 'Spicy pepperoni, mozzarella cheese.',
    },
    {
      id: 3,
      name: 'Hawaiian',
      img: 'https://via.placeholder.com/100?text=Hawaiian',
      description: 'Pineapple, ham, cheese.',
    },
  ];

  return (
    <section style={styles.section} id="menu">
      <h2 style={styles.title}>Pizza with Great Taste</h2>
      <p>Explore our classic and signature pizzas.</p>
      <div style={styles.cardContainer}>
        {dummyPizzas.map((pizza) => (
          <div key={pizza.id} style={styles.card}>
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{ width: '60px', height: '60px' }}
            />
            <h3 style={{ margin: '0.5rem 0' }}>{pizza.name}</h3>
            <p>{pizza.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;

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
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '8px',
    width: '200px',
  },
};
