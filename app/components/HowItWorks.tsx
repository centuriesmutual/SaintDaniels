'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserPlus, FaCalendarCheck, FaCrown } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <section className="how-it-works py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="section-title">ROYAL DECREE: HOW IT WORKS</h2>
            <p className="section-subtitle">
              Join our kingdom of health and wellness, where your daily dedication leads to royal rewards.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <div className="step-card text-center">
              <div className="step-icon">
                <FaUserPlus size={48} />
              </div>
              <h3 className="step-number">1</h3>
              <h4>Join The Kingdom</h4>
              <p>
                Register for a Saint Daniels account and connect your healthcare providers to begin your journey to wellness.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="step-card text-center">
              <div className="step-icon">
                <FaCalendarCheck size={48} />
              </div>
              <h3 className="step-number">2</h3>
              <h4>Track Your Health Days</h4>
              <p>
                Build your streak of consecutive health days through daily check-ins, wellness activities, and healthy choices.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="step-card text-center">
              <div className="step-icon">
                <FaCrown size={48} />
              </div>
              <h3 className="step-number">3</h3>
              <h4>Claim Your Royal Rewards</h4>
              <p>
                Unlock exclusive benefits and coverage rewards as you maintain your health streak and reach new milestones.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
} 