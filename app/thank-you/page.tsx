'use client';

import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ThankYouPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-content">
      <Navbar />
      <div className="thank-you-page py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="text-center mb-5">
                <FaCheckCircle className="text-success mb-4" style={{ fontSize: '4rem' }} />
                <h1 className="display-4 mb-3">Thank You!</h1>
                <p className="lead text-muted">
                  Your application has been successfully submitted. We appreciate your interest in our career development and healthcare programs.
                </p>
              </div>

              <div className="next-steps-card p-4 mb-4 bg-light rounded-lg">
                <h2 className="h4 mb-4">What's Next?</h2>
                <div className="steps-list">
                  <div className="step-item d-flex align-items-start mb-4">
                    <FaEnvelope className="text-primary mt-1 me-3" />
                    <div>
                      <h3 className="h5 mb-2">Email Confirmation</h3>
                      <p className="text-muted mb-0">
                        You will receive an email confirmation with your application details and next steps.
                      </p>
                    </div>
                  </div>
                  
                  <div className="step-item d-flex align-items-start mb-4">
                    <FaPhone className="text-primary mt-1 me-3" />
                    <div>
                      <h3 className="h5 mb-2">Application Review</h3>
                      <p className="text-muted mb-0">
                        Our team will review your application within 1-2 business days. We'll contact you if we need any additional information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/" className="btn btn-primary btn-lg">
                  Return Home
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
} 