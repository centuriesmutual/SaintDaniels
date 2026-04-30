'use client';

import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn } from '../../components/ScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      setError('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <Navbar />
      <div style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="mission-section-professional" style={{ paddingTop: '4rem', paddingBottom: '3rem', background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)' }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center text-center">
                <Col lg={10}>
                  <h1 className="mission-title-professional" style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>
                    Contact Us
                  </h1>
                  <div className="mission-divider" style={{ margin: '1.5rem auto', background: '#C4A962' }}></div>
                  <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Get in touch with our support team
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>

        <Container style={{ padding: '4rem 0' }}>
          <Row className="justify-content-center">
            {/* Contact Form Section */}
            <Col lg={8} md={10}>
              <ScrollFadeIn>
                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  height: '100%'
                }}>
                  <h2 style={{
                    color: '#1B392F',
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '1.5rem'
                  }}>
                    Send us a Message
                  </h2>

                  {/* Phone Number */}
                  <div style={{
                    background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)',
                    borderRadius: '10px',
                    padding: '1.5rem',
                    marginBottom: '2rem',
                    color: 'white'
                  }}>
                    <div className="d-flex align-items-center">
                      <FaPhone className="me-3" style={{ fontSize: '1.5rem' }} />
                      <div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '0.25rem' }}>
                          Call Us
                        </div>
                        <a href="tel:1-888-548-9952" style={{
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '1.5rem',
                          fontWeight: 700
                        }}>
                          1-888-548-9952
                        </a>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="danger" className="mb-3">
                      {error}
                    </Alert>
                  )}

                  {success && (
                    <Alert variant="success" className="mb-3">
                      Your message has been sent successfully! We'll get back to you soon.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number (optional)"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Message <span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message..."
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        background: '#C4A962',
                        border: 'none',
                        padding: '0.75rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        width: '100%'
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form>
                </div>
              </ScrollFadeIn>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </PageTransition>
  );
}
