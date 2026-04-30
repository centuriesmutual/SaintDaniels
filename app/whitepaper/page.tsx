'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn } from '../../components/ScrollAnimation';

export default function Whitepaper() {
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
                    Whitepaper
                  </h1>
                  <div className="mission-divider" style={{ margin: '1.5rem auto', background: '#C4A962' }}></div>
                  <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Comprehensive documentation of the Saint Daniels Healthcare Rewards platform
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
                      Executive Summary
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '2rem'
                    }}>
                      Saint Daniels Healthcare Rewards represents a revolutionary approach to healthcare financing, 
                      combining private subsidies, ad network engagement, and compound interest mechanisms to create 
                      a sustainable healthcare rewards ecosystem. This whitepaper outlines the technical architecture, 
                      economic model, and implementation strategy of our platform.
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
                      Platform Architecture
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      Our platform is built on a secure, scalable infrastructure that ensures HIPAA compliance 
                      and data protection. The system integrates multiple components including:
                    </p>
                    <ul style={{
                      fontSize: '1.1rem',
                      lineHeight: '2',
                      color: '#666',
                      paddingLeft: '2rem'
                    }}>
                      <li>Private subsidy wallet management</li>
                      <li>Ad network integration and campaign management</li>
                      <li>Pharmacy network verification and redemption</li>
                      <li>Compound interest treasury system</li>
                      <li>User authentication and data protection</li>
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
                      Economic Model
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      The economic model is designed to create sustainable value for all participants:
                    </p>
                    <ul style={{
                      fontSize: '1.1rem',
                      lineHeight: '2',
                      color: '#666',
                      paddingLeft: '2rem',
                      marginBottom: '1.5rem'
                    }}>
                      <li><strong>Members:</strong> Earn private subsidies through ad engagement and benefit from compound interest on unused funds</li>
                      <li><strong>Advertisers:</strong> Reach engaged healthcare consumers through verified health brand campaigns</li>
                      <li><strong>Pharmacies:</strong> Increase customer traffic and sales through the redemption network</li>
                      <li><strong>Platform:</strong> Maintains sustainability through network effects and treasury management</li>
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
                      Privacy & Security
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      Saint Daniels Healthcare Rewards is committed to maintaining the highest standards of privacy 
                      and security. Our platform implements:
                    </p>
                    <ul style={{
                      fontSize: '1.1rem',
                      lineHeight: '2',
                      color: '#666',
                      paddingLeft: '2rem'
                    }}>
                      <li>HIPAA-compliant data handling and storage</li>
                      <li>End-to-end encryption for sensitive information</li>
                      <li>Regular security audits and compliance monitoring</li>
                      <li>Transparent privacy policies and user data controls</li>
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
                      Future Roadmap
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#666',
                      marginBottom: '1.5rem'
                    }}>
                      Our development roadmap includes:
                    </p>
                    <ul style={{
                      fontSize: '1.1rem',
                      lineHeight: '2',
                      color: '#666',
                      paddingLeft: '2rem'
                    }}>
                      <li>Expansion of pharmacy network coverage</li>
                      <li>Enhanced ad network partnerships</li>
                      <li>Advanced analytics and reporting features</li>
                      <li>Mobile application development</li>
                      <li>Integration with additional healthcare services</li>
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

