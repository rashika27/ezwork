// src/components/Header.jsx
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="logo.png" alt="EZWorks Logo" className={styles.logo} />
      <h1>EZWorks</h1>
      <p>Suite Of Business Support Services</p>
    </header>
  );
};

export default Header;
