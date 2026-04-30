'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Join Saint Daniels Healthcare",
      description: "Register for your Saint Daniels Healthcare account and connect with our professional development network."
    },
    {
      number: "2",
      title: "Access Career Resources",
      description: "Explore our comprehensive career coaching, workplace wellness programs, and public health education resources."
    },
    {
      number: "3",
      title: "Advance Your Career",
      description: "Leverage our expert guidance and community support to achieve your professional goals and career advancement."
    }
  ];

  return (
    <section className="how-it-works">
      <Container>
        <h2 className="section-title">ROYAL DECREE: HOW IT WORKS</h2>
        <Row className="justify-content-center">
          {steps.map((step, index) => (
            <Col md={4} key={index} className="text-center mb-4">
              <div className="step-number mx-auto">{step.number}</div>
              <h3 className="font-serif mb-3">{step.title}</h3>
              <p>{step.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
} 