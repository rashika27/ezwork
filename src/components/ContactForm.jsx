// src/components/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios-esm';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setMessage('Email is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Email is invalid.');
      return;
    }

    try {
      const response = await axios.post('http://34.225.132.160:8002/api', { email });
      if (response.status === 200) {
        setMessage('Form Submitted');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setMessage('Invalid email domain: @ez.works is not allowed.');
      } else {
        setMessage('Something went wrong.');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Contact Me</button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
};

export default ContactForm;
