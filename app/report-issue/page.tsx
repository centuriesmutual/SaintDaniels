'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaExclamationTriangle, FaPaperPlane, FaShieldAlt, FaClock } from 'react-icons/fa';
import MainNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';

export default function ReportIssue() {
  const [formData, setFormData] = useState({
    type: '',
    subject: '',
    description: '',
    priority: 'medium',
    contact: '',
    anonymous: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Report submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <MainNavbar />
        <div className="report-issue-page">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <div className="success-message">
                  <FaShieldAlt className="success-icon" />
                  <h1 className="success-title">Report Submitted Successfully</h1>
                  <p className="success-description">
                    Thank you for reporting this issue. Our team will review your report within 24 hours and take appropriate action.
                  </p>
                  <div className="next-steps">
                    <h3>What happens next?</h3>
                    <ul className="steps-list">
                      <li>Your report will be reviewed by our support team</li>
                      <li>You'll receive an email confirmation within 24 hours</li>
                      <li>If additional information is needed, we'll contact you</li>
                      <li>Resolution updates will be provided via email</li>
                    </ul>
                  </div>
                  <Button 
                    variant="primary" 
                    onClick={() => window.location.href = '/help'}
                    className="mt-4"
                  >
                    Return to Help Center
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <MainNavbar />
      <div className="report-issue-page">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="report-header text-center mb-5">
                <FaExclamationTriangle className="report-icon" />
                <h1 className="report-title">Report an Issue</h1>
                <p className="report-subtitle">
                  Help us improve our services by reporting any issues, concerns, or feedback you may have.
                </p>
              </div>

              <Card className="report-form-card">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Label>Issue Type *</Form.Label>
                        <Form.Select 
                          name="type"
                          value={formData.type} 
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select issue type</option>
                          <option value="technical">Technical Issue</option>
                          <option value="billing">Billing Problem</option>
                          <option value="service">Service Concern</option>
                          <option value="safety">Safety Concern</option>
                          <option value="feedback">General Feedback</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Priority Level</Form.Label>
                        <Form.Select 
                          name="priority"
                          value={formData.priority} 
                          onChange={handleChange}
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </Form.Select>
                      </Col>
                      <Col md={12}>
                        <Form.Label>Subject *</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="subject"
                          placeholder="Brief description of the issue"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col md={12}>
                        <Form.Label>Detailed Description *</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          name="description"
                          rows={5}
                          placeholder="Please provide detailed information about the issue, including steps to reproduce if applicable..."
                          value={formData.description}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col md={12}>
                        <Form.Label>Contact Information *</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="contact"
                          placeholder="Your email address for follow-up"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col md={12}>
                        <Form.Check
                          type="checkbox"
                          name="anonymous"
                          label="Submit anonymously (no follow-up contact)"
                          checked={formData.anonymous}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    
                    <div className="privacy-notice mt-4">
                      <Alert variant="info">
                        <FaShieldAlt className="me-2" />
                        <strong>Privacy Notice:</strong> All reports are confidential and will only be shared with our support team. Your personal information will not be disclosed to third parties.
                      </Alert>
                    </div>

                    <div className="d-flex justify-content-between mt-4">
                      <Button 
                        variant="secondary" 
                        onClick={() => window.history.back()}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        variant="primary"
                        className="d-flex align-items-center"
                      >
                        <FaPaperPlane className="me-2" />
                        Submit Report
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </PageTransition>
  );
}
