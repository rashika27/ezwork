// src/components/ServiceCard.jsx
import React from 'react';
import styles from '../styles/ServiceCard.module.css';

const ServiceCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
