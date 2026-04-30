'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransition from '../../components/PageTransition';

export default function AboutUs() {
  const values = [
    {
      title: "Excellence in Healthcare",
      description: "We strive to provide the highest quality healthcare services and professional development programs to enhance your well-being.",
      icon: "★"
    },
    {
      title: "Member-Focused",
      description: "Our members are at the heart of everything we do, driving our innovations and improvements.",
      icon: "♥"
    },
    {
      title: "Innovation",
      description: "We continuously evolve our services and technology to better serve our community's healthcare needs.",
      icon: "◆"
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty, transparency, and ethical conduct in all our operations.",
      icon: "●"
    }
  ];

  const team = [
    {
      name: "John Carter Cothran",
      role: "Chief Executive Officer",
      description: "With 4 years of diverse experience spanning insurance, software engineering, and finance, John leads our mission to revolutionize healthcare.",
      imagePath: "/images/me.jpeg"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="about-page">
        <Container>
          <div className="about-hero text-center">
            <h1 className="about-title">About Saint Daniels</h1>
            <p className="about-subtitle">
              Revolutionizing healthcare through innovation and member-focused professional development
            </p>
          </div>

          <div className="about-section">
            <Row className="align-items-center">
              <Col lg={6}>
                <h2 className="section-title">Our Story</h2>
                <p className="section-text">
                  Named in honor of Saint Daniel, known for his wisdom and healing, our company embodies these same principles in a modern context. We recognized that the key to better healthcare wasn't just in treatment, but in professional development and career advancement. This insight led to the development of our innovative career coaching and workplace wellness programs.
                </p>
                <p className="section-text">
                  Today, Saint Daniels Healthcare stands at the forefront of healthcare innovation, transforming the way professionals think about and engage with their career development. Our comprehensive programs don't just support career growth – they create a community of empowered professionals taking control of their healthcare and career journey. Through technology, compassion, and innovation, we're building a future where healthcare and career development are more accessible, engaging, and successful for everyone.
                </p>
              </Col>
              <Col lg={6}>
                <div className="about-image-container">
                  <Image
                    src="/images/Poland2.jpeg"
                    alt="Building a Healthier Future Together"
                    width={500}
                    height={400}
                    className="about-image"
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div className="values-section">
            <h2 className="section-title text-center">Our Values</h2>
            <Row className="g-4">
              {values.map((value, index) => (
                <Col md={6} lg={3} key={index}>
                  <div className="value-card">
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <div className="team-section">
            <h2 className="section-title text-center">Our Leadership</h2>
            <Row className="justify-content-center">
              <Col md={6}>
                <div className="team-card">
                  <div className="team-member-image">
                    <div className="member-image-container">
                      <Image
                        src={team[0].imagePath}
                        alt={team[0].name}
                        width={100}
                        height={100}
                        className="member-profile-image"
                      />
                    </div>
                  </div>
                  <h3 className="team-member-name">{team[0].name}</h3>
                  <p className="team-member-role">{team[0].role}</p>
                  <p className="team-member-description">{team[0].description}</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mission-section text-center">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              To empower professionals to take control of their career journey through innovative career coaching and comprehensive healthcare solutions.
            </p>
            <div className="mission-stats">
              <Row className="g-4">
                <Col md={4}>
                  <div className="stat-item">
                    <div className="stat-number" style={{ color: '#2c5530' }}>50,000+</div>
                    <div className="stat-label" style={{ color: '#2c5530' }}>Active Members</div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="stat-item">
                    <div className="stat-number" style={{ color: '#2c5530' }}>100+</div>
                    <div className="stat-label" style={{ color: '#2c5530' }}>Healthcare Partners</div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="stat-item">
                    <div className="stat-number" style={{ color: '#2c5530' }}>1M+</div>
                    <div className="stat-label" style={{ color: '#2c5530' }}>Career Milestones</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 