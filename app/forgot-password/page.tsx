'use client';

import { useState } from 'react';
import { Container, Form, Button, Row, Col, Navbar, Alert } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';
// Firebase removed - password reset functionality needs to be implemented via API

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // TODO: Implement password reset via API route
      // For now, show success message
      setSuccess(true);
      console.log('Password reset requested for:', email);
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <Navbar bg="transparent" expand="lg" className="px-5 py-3">
        <Container>
          <Link href="/" className="navbar-brand ms-5">
            <Image 
              src="/images/saintdanielslogo.jpeg" 
              alt="Saint Daniels Logo" 
              width={60} 
              height={60} 
              className="header-logo"
            />
          </Link>
        </Container>
      </Navbar>
      <div className="login-container">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <div className="login-bubble">
                <div className="bubble-content">
                  <div className="text-center mb-4">
                    <FaLock className="mb-3" style={{ fontSize: '2rem', color: '#007bff' }} />
                    <h2>Forgot Password</h2>
                    <p className="text-muted">Enter your email address and we'll send you a link to reset your password.</p>
                  </div>
                  
                  {error && (
                    <Alert variant="danger" className="mb-4">
                      {error}
                    </Alert>
                  )}

                  {success ? (
                    <Alert variant="success" className="mb-4">
                      <p className="mb-0">Password reset instructions have been sent to your email address.</p>
                      <p className="mb-0 mt-2">Please check your inbox and follow the instructions to reset your password.</p>
                    </Alert>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>

                      <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100 py-3 mb-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                      </Button>

                      <div className="text-center">
                        <p className="mb-0 mt-3">
                          <Link href="/contact" className="text-primary text-decoration-none">
                            Need help? Contact us
                          </Link>
                        </p>
                      </div>
                    </Form>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
} 