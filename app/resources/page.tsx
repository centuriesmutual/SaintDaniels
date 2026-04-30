'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDownload, FaFileAlt, FaFilePdf, FaFileContract, FaFileInvoice, FaBook, FaListAlt, FaFileMedical, FaShieldAlt, FaLock } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';
import Link from 'next/link';

export default function ResourcesPage() {
  const documents = [
    {
      title: "Healthcare Rewards Program",
      description: "Complete guide to understanding how private subsidies work",
      link: "#",
      icon: <FaBook size={28} />,
      color: '#2c5530'
    },
    {
      title: "Tax Forms",
      description: "Tax documents and forms for your healthcare rewards account",
      link: "#",
      icon: <FaFileInvoice size={28} />,
      color: '#C4A962'
    },
    {
      title: "Identity Documents",
      description: "Driver's license, state ID, or government-issued identification",
      link: "#",
      icon: <FaFileAlt size={28} />,
      color: '#2c5530'
    },
    {
      title: "Employment Verification",
      description: "Pay stubs, employment letter, or employer verification forms",
      link: "#",
      icon: <FaFileContract size={28} />,
      color: '#C4A962'
    },
    {
      title: "Citizenship Verification",
      description: "Birth certificate, passport, or naturalization certificate",
      link: "#",
      icon: <FaFileMedical size={28} />,
      color: '#2c5530'
    },
    {
      title: "Residence Verification",
      description: "Utility bills, lease agreement, or mortgage statement",
      link: "#",
      icon: <FaFileAlt size={28} />,
      color: '#C4A962'
    }
  ];


  return (
    <PageTransition>
      <Navbar />
      <div className="resources-page">
        {/* Hero Section */}
        <section className="mission-section-professional" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center text-center">
                <Col lg={10}>
                  <h1 className="mission-title-professional">Documents</h1>
                  <div className="mission-divider" style={{ margin: '1.5rem auto' }}></div>
                  <p className="mission-description-professional" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    Access all program documentation, application forms, and legal documents for the Healthcare Rewards program. 
                    Find everything you need to understand, enroll in, and manage your private subsidy account.
                  </p>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>

        {/* Documents Grid */}
        <section className="service-fullpage-section">
          <Container>
            <Row className="g-4">
              {documents.map((doc, index) => (
                <Col lg={4} md={6} key={index}>
                  <ScrollFadeIn delay={index * 0.1}>
                    <Card style={{
                      height: '100%',
                      border: '1px solid #e9ecef',
                      borderRadius: '15px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                    }}
                    >
                      <Card.Body style={{ 
                        padding: '2rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        flex: 1,
                        textAlign: 'center'
                      }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '80px',
                          height: '100px',
                          borderRadius: '8px',
                          background: 'white',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          margin: '0 auto 1.5rem',
                          position: 'relative',
                          border: '1px solid #e9ecef'
                        }}>
                          <div style={{
                            position: 'absolute',
                            top: '8px',
                            left: '8px',
                            right: '8px',
                            bottom: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: doc.color
                          }}>
                            {doc.icon}
                          </div>
                          <div style={{
                            position: 'absolute',
                            bottom: '4px',
                            right: '4px',
                            width: '0',
                            height: '0',
                            borderLeft: '8px solid transparent',
                            borderBottom: '8px solid #C4A962'
                          }}></div>
                        </div>
                        <h4 style={{
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: '#1B392F',
                          marginBottom: '1rem',
                          lineHeight: '1.4'
                        }}>
                          {doc.title}
                        </h4>
                        <p style={{
                          fontSize: '0.95rem',
                          color: '#666',
                          marginBottom: '1.5rem',
                          lineHeight: '1.6',
                          flex: 1
                        }}>
                          {doc.description}
                        </p>
                        <a href={doc.link} className="resource-link" style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          color: '#2c5530',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '8px',
                          background: 'transparent',
                          border: '2px solid #2c5530',
                          marginTop: 'auto'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.background = '#2c5530';
                          e.currentTarget.style.borderColor = '#2c5530';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#2c5530';
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.borderColor = '#2c5530';
                        }}
                        >
                          <FaDownload size={16} />
                          Download
                        </a>
                      </Card.Body>
                    </Card>
                  </ScrollFadeIn>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Contact Information */}
        <section className="service-fullpage-section">
          <Container>
            <ScrollFadeIn>
              <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                  <h2 className="section-title-professional">Need Help Finding Documents?</h2>
                  <p className="mission-description-professional" style={{ marginBottom: '2rem' }}>
                    Our support team is here to help you locate the documents you need for your healthcare rewards account.
                  </p>
                  <div className="contact-buttons" style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <Link href="/contact" className="btn-primary-lonestar" style={{
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>
                      Contact Support
                    </Link>
                    <Link href="/help" className="btn-secondary-lonestar" style={{
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>
                      Help Center
                    </Link>
                  </div>
                </Col>
              </Row>
            </ScrollFadeIn>
          </Container>
        </section>
      </div>
      
      <Footer />
    </PageTransition>
  );
}

