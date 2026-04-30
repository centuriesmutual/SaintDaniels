'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaHome } from 'react-icons/fa';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import PageTransition from '../../../components/PageTransition';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const enrollmentId = searchParams.get('enrollmentId') || 'N/A';

  return (
    <PageTransition>
      <Navbar />
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)',
        padding: '4rem 0'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card style={{
                border: 'none',
                borderRadius: '20px',
                padding: '3rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  margin: '0 auto 2rem'
                }}>
                  <FaCheckCircle />
                </div>

                <h1 style={{ color: '#2c5530', marginBottom: '1rem', fontWeight: 700 }}>
                  Thank You!
                </h1>

                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                  Your enrollment application has been successfully submitted.
                </p>

                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '2rem',
                  marginBottom: '2rem'
                }}>
                  <p style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <strong>Enrollment ID:</strong>
                  </p>
                  <p style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#2c5530',
                    fontFamily: 'monospace',
                    letterSpacing: '2px'
                  }}>
                    {enrollmentId}
                  </p>
                  <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                    Please save this enrollment ID for your records. You will receive a confirmation email shortly.
                  </p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => router.push('/')}
                    style={{
                      background: '#2c5530',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                  >
                    <FaHome className="me-2" />
                    Back to Home
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </PageTransition>
  );
}

