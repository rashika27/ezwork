import React, { useState } from 'react';
import './App.css';
import Logo from '../src/assets/Logo.png';
import PresentationDesign from '../src/assets/PresentationDesign.png';
import AudioVideo from '../src/assets/AudioVideo.png';
import TransalationServices from '../src/assets/TransalationServices.png';
import GraphicDesign from '../src/assets/GraphicDesign.png';
import ResearchAndAnalytics from '../src/assets/ResearchAndAnalytics.png';
import DataProcessing from '../src/assets/DataProcessing.png';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Empty form submission validation
    if (!email) {
      setError('Please enter your email address.');
      setMessage('');
      return;
    }

    // Email validation at front-end
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      setMessage('');
      return;
    }

    // API integration
    try {
      const response = await fetch('http://34.225.132.160:8002/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Form submitted successfully.');
        setError('');
      } else {
        if (data.error && data.error.includes('ends with @ez.works')) {
          setError('Email address ending with @ez.works is not allowed.');
        } else {
          setError(data.error || 'Something went wrong. Please try again.');
        }
        setMessage('');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo"/>
            <h1 className="title"> </h1>
          </div>
          <h2 className="subtitle">Suite Of Business Support Services</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          </p>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Contact Me</button>
            </form>
            {error && <p className="form-error">{error}</p>}
            {message && <p className="form-message">{message}</p>}
          </div>
        </div>
        <div className="services">
          {[
            { title: "Presentation Design", icon: PresentationDesign },
            { title: "Audio - Visual Production", icon: AudioVideo },
            { title: "Translation Services", icon: TransalationServices },
            { title: "Graphic Design", icon: GraphicDesign },
            { title: "Research & Analytics", icon: ResearchAndAnalytics },
            { title: "Data Processing", icon: DataProcessing },
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-header">
                <img src={service.icon} alt={service.title} className="service-icon" />
                <h3>{service.title}</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
