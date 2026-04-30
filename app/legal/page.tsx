'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn } from '../../components/ScrollAnimation';

export default function Legal() {
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
                    Legal Information
                  </h1>
                  <div className="mission-divider" style={{ margin: '1.5rem auto', background: '#C4A962' }}></div>
                  <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Legal documents, disclosures, and regulatory information
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>

        {/* Content Section */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <ScrollFadeIn>
                  <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '3rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    marginBottom: '2rem'
                  }}>
                    <h2 style={{
                      color: '#1B392F',
                      fontSize: '2rem',
                      fontWeight: 700,
                      marginBottom: '1.5rem'
                    }}>
                      Legal Disclosures
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '2rem'
                    }}>
                      Saint Daniels Healthcare Rewards operates in compliance with applicable federal and state 
                      healthcare regulations, including but not limited to HIPAA, ERISA, and state insurance laws. 
                      This section contains important legal disclosures and regulatory information.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '3rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    marginBottom: '2rem'
                  }}>
                    <h2 style={{
                      color: '#1B392F',
                      fontSize: '2rem',
                      fontWeight: 700,
                      marginBottom: '1.5rem'
                    }}>
                      Regulatory Compliance
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      Our platform adheres to the following regulatory frameworks:
                    </p>
                    <ul style={{
                      fontSize: '1.1rem',
                      lineHeight: '2',
                      color: '#666',
                      paddingLeft: '2rem',
                      marginBottom: '1.5rem'
                    }}>
                      <li><strong>HIPAA Compliance:</strong> All health information is handled in accordance with the Health Insurance Portability and Accountability Act</li>
                      <li><strong>ERISA:</strong> Employee Retirement Income Security Act compliance for benefit administration</li>
                      <li><strong>State Regulations:</strong> Compliance with state-specific healthcare and insurance regulations</li>
                      <li><strong>Data Protection:</strong> Adherence to applicable data protection and privacy laws</li>
                    </ul>
                  </div>

                  <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '3rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    marginBottom: '2rem'
                  }}>
                    <h2 style={{
                      color: '#1B392F',
                      fontSize: '2rem',
                      fontWeight: 700,
                      marginBottom: '1.5rem'
                    }}>
                      Important Disclaimers
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      Please review the following important disclaimers:
                    </p>
                    <ul style={{
                      fontSize: '1.1rem',
                      lineHeight: '2',
                      color: '#666',
                      paddingLeft: '2rem',
                      marginBottom: '1.5rem'
                    }}>
                      <li>Private subsidies are not insurance and do not replace health insurance coverage</li>
                      <li>Earnings from ad engagement are subject to applicable tax regulations</li>
                      <li>Compound interest rates are variable and subject to market conditions</li>
                      <li>Pharmacy network participation may vary by location</li>
                      <li>Program terms and conditions are subject to change with notice</li>
                    </ul>
                  </div>

                  <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '3rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    marginBottom: '2rem'
                  }}>
                    <h2 style={{
                      color: '#1B392F',
                      fontSize: '2rem',
                      fontWeight: 700,
                      marginBottom: '1.5rem'
                    }}>
                      Licensing Information
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      Saint Daniels Healthcare Rewards operates under appropriate business licenses and regulatory 
                      approvals. For specific licensing information or regulatory inquiries, please contact our 
                      legal department.
                    </p>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666'
                    }}>
                      <strong>Contact Legal Department:</strong><br />
                      Email: legal@saintdaniels.com<br />
                      Phone: 1-888-548-9952
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '3rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                    marginBottom: '2rem'
                  }}>
                    <h2 style={{
                      color: '#1B392F',
                      fontSize: '2rem',
                      fontWeight: 700,
                      marginBottom: '1.5rem'
                    }}>
                      Related Documents
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      For additional legal information, please review:
                    </p>
                    <ul style={{
                      fontSize: '1.1rem',
                      lineHeight: '2',
                      color: '#666',
                      paddingLeft: '2rem'
                    }}>
                      <li><a href="/privacy" style={{ color: '#1B392F', textDecoration: 'none' }}>Privacy Policy</a></li>
                      <li><a href="/terms" style={{ color: '#1B392F', textDecoration: 'none' }}>Terms of Service</a></li>
                      <li><a href="/whitepaper" style={{ color: '#1B392F', textDecoration: 'none' }}>Whitepaper</a></li>
                    </ul>
                  </div>
                </ScrollFadeIn>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
}

