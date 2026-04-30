'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
      <section className="hero-section-lonestar">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="order-2 order-lg-1">
              <div className="hero-content-lonestar">
              <h1 className="hero-title-lonestar">
                Healthcare Rewards: Earn Well. Live Well
              </h1>
              <p className="hero-description-lonestar">
                Saint Daniels Healthcare Rewards converts every qualified sponsor interaction into a private subsidy you can
                deploy at trusted pharmacies. Download the app to track each reward, authorize spending with a secure virtual card, 
                and build a long-term wellness balance with complete transparency.
              </p>
              <div className="hero-buttons-lonestar">
                <button 
                  className="btn-primary-lonestar"
                  onClick={() => router.push('/download')}
                >
                  Download App
                </button>
                <button
                  className="btn-secondary-lonestar"
                  onClick={() => router.push('/learnmore')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2">
            <div className="hero-image-lonestar">
              <img 
                src="/%20.gif"
                alt="Saint Daniels Healthcare"
                className="hero-image-main"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
} 