// src/components/ServicesGrid.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from '../styles/ServiceCard.module.css';

const services = [
  { title: 'Presentation Design', description: 'Description for Presentation Design.' },
  { title: 'Audio - Visual Production', description: 'Description for Audio - Visual Production.' },
  { title: 'Translation Services', description: 'Description for Translation Services.' },
  { title: 'Graphic Design', description: 'Description for Graphic Design.' },
  { title: 'Research & Analytics', description: 'Description for Research & Analytics.' },
  { title: 'Data Processing', description: 'Description for Data Processing.' }
];

const ServicesGrid = () => {
  return (
    <div className={styles.grid}>
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default ServicesGrid;
