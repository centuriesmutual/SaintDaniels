'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaUsers, FaHandshake, FaRocket, FaCheckCircle, FaCalendar, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import MainNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';

export default function JoinNetwork() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    experience: '',
    interests: [],
    goals: '',
    location: '',
    availability: '',
    contact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Network application submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const interests = formData.interests;
      if (checked) {
        interests.push(value);
      } else {
        const index = interests.indexOf(value);
        interests.splice(index, 1);
      }
      setFormData(prev => ({ ...prev, interests }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const networkBenefits = [
    {
      title: "Professional Networking",
      description: "Connect with like-minded professionals in your field",
      icon: <FaUsers />
    },
    {
      title: "Mentorship Opportunities",
      description: "Find mentors or become a mentor to others",
      icon: <FaHandshake />
    },
    {
      title: "Career Advancement",
      description: "Access exclusive career development resources",
      icon: <FaRocket />
    }
  ];

  if (isSubmitted) {
    return (
      <PageTransition>
        <MainNavbar />
        <div className="join-network-page">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h1 className="success-title">Application Submitted Successfully</h1>
                  <p className="success-description">
                    Thank you for your interest in joining our professional network! We'll review your application and get back to you within 48 hours.
                  </p>
                  <div className="next-steps">
                    <h3>What happens next?</h3>
                    <ul className="steps-list">
                      <li>We'll review your application and professional background</li>
                      <li>You'll receive a welcome email with network access details</li>
                      <li>You'll be invited to our exclusive networking events</li>
                      <li>Access to our professional community platform will be provided</li>
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
      <div className="join-network-page">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="network-header text-center mb-5">
                <FaUsers className="network-icon" />
                <h1 className="network-title">Join Our Professional Network</h1>
                <p className="network-subtitle">
                  Connect with career-focused professionals, access exclusive resources, and accelerate your professional development.
                </p>
              </div>

              <Row className="g-4 mb-5">
                {networkBenefits.map((benefit, index) => (
                  <Col lg={4} key={index}>
                    <Card className="benefit-card">
                      <Card.Body className="text-center">
                        <div className="benefit-icon">
                          {benefit.icon}
                        </div>
                        <h3 className="benefit-title">{benefit.title}</h3>
                        <p className="benefit-description">{benefit.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Card className="network-form-card">
                <Card.Body>
                  <h2 className="form-title">Network Application</h2>
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Profession *</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="profession"
                          placeholder="e.g., Software Engineer, Marketing Manager"
                          value={formData.profession}
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Years of Experience *</Form.Label>
                        <Form.Select 
                          name="experience"
                          value={formData.experience} 
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select experience level</option>
                          <option value="0-2">0-2 years (Entry Level)</option>
                          <option value="3-5">3-5 years (Mid Level)</option>
                          <option value="6-10">6-10 years (Senior Level)</option>
                          <option value="10+">10+ years (Executive Level)</option>
                        </Form.Select>
                      </Col>
                      <Col md={12}>
                        <Form.Label>Professional Interests (Select all that apply)</Form.Label>
                        <div className="interests-checkboxes">
                          {[
                            'Career Coaching',
                            'Leadership Development',
                            'Workplace Wellness',
                            'Public Health Education',
                            'Professional Networking',
                            'Mentorship',
                            'Skill Development',
                            'Industry Trends'
                          ].map((interest, index) => (
                            <Form.Check
                              key={index}
                              type="checkbox"
                              name="interests"
                              value={interest}
                              label={interest}
                              checked={formData.interests.includes(interest)}
                              onChange={handleChange}
                              className="interest-checkbox"
                            />
                          ))}
                        </div>
                      </Col>
                      <Col md={12}>
                        <Form.Label>Career Goals</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          name="goals"
                          rows={3}
                          placeholder="Tell us about your career goals and what you hope to achieve through our network..."
                          value={formData.goals}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="location"
                          placeholder="City, State/Country"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Availability for Networking</Form.Label>
                        <Form.Select 
                          name="availability"
                          value={formData.availability} 
                          onChange={handleChange}
                        >
                          <option value="">Select availability</option>
                          <option value="weekdays">Weekdays</option>
                          <option value="weekends">Weekends</option>
                          <option value="evenings">Evenings</option>
                          <option value="flexible">Flexible</option>
                        </Form.Select>
                      </Col>
                      <Col md={12}>
                        <Form.Label>Preferred Contact Method</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="contact"
                          placeholder="Phone number or preferred contact method"
                          value={formData.contact}
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    
                    <div className="privacy-notice mt-4">
                      <Alert variant="info">
                        <FaEnvelope className="me-2" />
                        <strong>Network Benefits:</strong> By joining our network, you'll gain access to exclusive events, mentorship opportunities, and professional development resources.
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
                        <FaHandshake className="me-2" />
                        Join Network
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
