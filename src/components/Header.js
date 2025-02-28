// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header style={styles.header}>
      {/* LEFT NAV */}
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navLink}>Home</Link></li>
        <li><Link to="/reservation" style={styles.navLink}>Reservation</Link></li>
      </ul>

      {/* LOGO Ở GIỮA */}
      <div style={styles.logoContainer}>
        <img
          src={logo}
          alt="Pizza Logo"
          style={{ height: '60px' }}
        />
      </div>

      {/* RIGHT NAV */}
      <ul style={styles.navList}>
        <li><Link to="/menu" style={styles.navLink}>Menu</Link></li>
        <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
      </ul>
    </header>
  );
}

export default Header;

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
  },
  logoContainer: {
    flex: '0 0 auto',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '600',
  },
};
