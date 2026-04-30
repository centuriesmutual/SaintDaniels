'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import {
  FaApple,
  FaGooglePlay,
  FaHospital,
  FaCreditCard,
  FaMobileAlt,
  FaSearch,
  FaChartLine,
  FaDollarSign,
  FaSync,
  FaChartBar,
  FaCalendarAlt,
  FaClock,
  FaBriefcase,
  FaTrophy,
  FaLock,
  FaUserTie,
  FaBullseye,
  FaRocket,
  FaFileAlt,
  FaMapMarkerAlt,
  FaComments,
} from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';
import Link from 'next/link';

export default function DownloadPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const downloadOptions = [
    {
      platform: 'iOS',
      icon: <FaApple size={48} />,
      description: 'Optimized for iPhone and iPad with Face ID ready checkout.',
      buttonText: 'Download on App Store',
      buttonClass: 'btn-ios',
      link: '#'
    },
    {
      platform: 'Android',
      icon: <FaGooglePlay size={48} />,
      description: 'Runs on every modern Android device with secure biometrics.',
      buttonText: 'Download from Google Play',
      buttonClass: 'btn-android',
      link: '#'
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      <div className="download-page">

        {/* Download Options */}
        <section className="download-options-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="section-title">Choose Your Platform</h2>
                <p className="section-subtitle">
                  Available on all major platforms for your convenience
                </p>
              </Col>
            </Row>
            
            <Row className="justify-content-center g-4">
              {downloadOptions.map((option, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card className="download-card">
                    <Card.Body className="text-center">
                      <div className="platform-icon mb-4">
                        {option.icon}
                      </div>
                      <h3 className="platform-title">{option.platform}</h3>
                      <p className="platform-description">{option.description}</p>
                      <button className={`btn-download ${option.buttonClass}`} onClick={handleShow}>
                        {option.buttonText}
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>


        {/* App Features Section */}
        <section className="app-features-immersive">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="features-title">Unlock Your Healthcare Rewards</h2>
                <p className="features-subtitle">
                  The Saint Daniels app is the secure gateway to earning brand-funded healthcare rewards, redeeming them in
                  pharmacies, and letting unused balances compound through the network treasury. Install it to manage
                  wallets, verify pharmacies, and authorize payments with confidence.
                </p>
              </Col>
            </Row>
            
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="preview-content">
                  <div className="app-features">
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Opt into sponsored health moments to earn private subsidies</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Unlock rewards instantly in your secure wallet</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Spend at pharmacies with tap-to-pay virtual cards</span>
                    </div>
                    <div className="app-feature">
                      <span className="feature-check">✓</span>
                      <span>Let unused balances compound daily in network vaults</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="preview-visual">
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="app-interface">
                        <div className="app-header">Saint Daniels</div>
                        <div className="app-content">
                          <div className="app-section">Rewards Wallet</div>
                          <div className="app-section">Pharmacy Network</div>
                          <div className="app-section">Compound Vaults</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </div>
      
      {/* Coming Soon Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', margin: '1rem 0' }}>
            The app is currently under development and will be available soon. 
            Stay tuned for updates!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} style={{
            background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
            border: 'none'
          }}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Footer />
    </PageTransition>
  );
}
