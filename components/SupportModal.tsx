'use client';

import { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

export default function SupportModal({ show, onHide }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  // Check if user has already submitted today
  useEffect(() => {
    const lastSubmission = localStorage.getItem('supportLastSubmission');
    if (lastSubmission) {
      const lastDate = new Date(lastSubmission);
      const today = new Date();
      const isSameDay = lastDate.toDateString() === today.toDateString();
      setCanSubmit(!isSameDay);
    }
  }, [show]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!canSubmit) {
      setError('You can only send one support message per day. Please try again tomorrow or call us at 1-888-548-9952.');
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    // Email validation
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
      
      // Save submission date
      localStorage.setItem('supportLastSubmission', new Date().toISOString());
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
        setCanSubmit(false);
      }, 3000);
    } catch (err) {
      setError('An error occurred while sending your message. Please try calling us at 1-888-548-9952.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:1-888-548-9952';
  };

  const handleClose = () => {
    setError('');
    setSuccess(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <FaEnvelope className="me-2" />
          Contact Support
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Call Option */}
        <div className="mb-4 p-3" style={{ 
          background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)', 
          borderRadius: '10px',
          color: 'white'
        }}>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5 className="mb-1">
                <FaPhone className="me-2" />
                Call Us Now
              </h5>
              <p className="mb-0" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                1-888-548-9952
              </p>
            </div>
            <Button 
              variant="light" 
              onClick={handleCall}
              style={{ 
                background: '#C4A962', 
                border: 'none',
                color: 'white',
                fontWeight: '600'
              }}
            >
              <FaPhone className="me-2" />
              Call Now
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="text-center my-4">
          <span style={{ color: '#666' }}>OR</span>
        </div>

        {/* Daily Limit Notice */}
        {!canSubmit && (
          <Alert variant="warning" className="d-flex align-items-center">
            <FaExclamationTriangle className="me-2" />
            <div>
              <strong>Daily Limit Reached</strong>
              <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                You can only send one support message per day. Please call us at 1-888-548-9952 for immediate assistance.
              </p>
            </div>
          </Alert>
        )}

        {canSubmit && (
          <Alert variant="info" className="d-flex align-items-center">
            <FaExclamationTriangle className="me-2" />
            <div>
              <strong>Daily Limit</strong>
              <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                You can send one support message per day. For urgent matters, please call us at 1-888-548-9952.
              </p>
            </div>
          </Alert>
        )}

        {/* Support Form */}
        <Form onSubmit={handleSubmit}>
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

          <Form.Group className="mb-3">
            <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              disabled={!canSubmit || isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              disabled={!canSubmit || isSubmitting}
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
              disabled={!canSubmit || isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              required
              disabled={!canSubmit || isSubmitting}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your issue or question..."
              required
              disabled={!canSubmit || isSubmitting}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button
              variant="primary"
              type="submit"
              disabled={!canSubmit || isSubmitting}
              style={{ 
                background: '#C4A962', 
                border: 'none',
                flex: 1,
                color: 'white'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

