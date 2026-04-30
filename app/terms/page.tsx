'use client';

import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="terms-page">
        <Container>
          <h1 className="terms-title">Terms of Service</h1>
          <div className="terms-content">
            <section className="terms-section">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing or using Saint Daniels Healthcare services ("Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our Services.</p>
            </section>

            <section className="terms-section">
              <h2>2. Service Eligibility and Requirements</h2>
              <p>As a condition of using our Services, you must:</p>
              <ul>
                <li>Be at least 18 years of age</li>
                <li>Enroll in a qualifying health insurance plan through our authorized brokerage partner, Sendtoreach Mutual LLC</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain active health insurance coverage throughout your participation in our career development programs</li>
                <li>Be a resident of a state where our Services are legally available</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>3. Legal Review and Compliance</h2>
              <p>All career development programs and benefits provided through our Services are subject to:</p>
              <ul>
                <li>Legal review by our retained law firm</li>
                <li>Compliance with federal, state, and local regulations</li>
                <li>Geographic restrictions based on legal requirements</li>
                <li>Modification or termination at any time to maintain legal compliance</li>
              </ul>
              <p>We reserve the right to modify, suspend, or terminate any offers that may not be legally available in certain jurisdictions.</p>
            </section>

            <section className="terms-section">
              <h2>4. Prohibited Activities</h2>
              <p>Users are strictly prohibited from:</p>
              <ul>
                <li>Creating multiple accounts or sharing accounts</li>
                <li>Manipulating or falsifying health-related data or activities</li>
                <li>Gaming or exploiting the career development system</li>
                <li>Selling, trading, or transferring career development benefits</li>
                <li>Using automated systems or bots to interact with the Services</li>
                <li>Attempting to defraud or abuse the career development program</li>
                <li>Engaging in any activity that violates healthcare laws or regulations</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>5. Program Integrity</h2>
              <p>To maintain program integrity:</p>
              <ul>
                <li>All reward claims are subject to verification</li>
                <li>We employ advanced fraud detection systems</li>
                <li>Suspicious activity will be investigated</li>
                <li>Violations may result in immediate account termination</li>
                <li>Fraudulent activity will be reported to appropriate authorities</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>6. Insurance Requirement</h2>
              <p>Participation in our career development programs requires:</p>
              <ul>
                <li>Active enrollment through Sendtoreach Mutual LLC</li>
                <li>Maintenance of qualifying health insurance coverage</li>
                <li>Compliance with insurance policy terms</li>
                <li>Prompt notification of any changes in insurance status</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>7. Career Development Benefits</h2>
              <p>Understanding our career development programs:</p>
              <ul>
                <li>All career development benefits are subject to availability and legal review</li>
                <li>Benefits may vary by location and jurisdiction</li>
                <li>Career development benefits are non-transferable</li>
                <li>We reserve the right to modify or cancel benefits at any time</li>
                <li>Benefits may be subject to expiration dates</li>
                <li>Participation may be limited based on health plan type</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>8. Account Termination</h2>
              <p>We reserve the right to terminate accounts for:</p>
              <ul>
                <li>Violation of these terms</li>
                <li>Fraudulent activity</li>
                <li>Non-compliance with insurance requirements</li>
                <li>Abuse of the career development program</li>
                <li>Extended periods of inactivity</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>9. Privacy and Data Usage</h2>
              <p>By using our Services, you acknowledge:</p>
              <ul>
                <li>Collection and use of health-related data as described in our Privacy Policy</li>
                <li>Sharing of necessary information with insurance partners</li>
                <li>Use of data for program administration and improvement</li>
                <li>Implementation of security measures to protect your information</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>10. Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the Services following any changes constitutes acceptance of the modified terms.</p>
            </section>

            <section className="terms-section">
              <h2>11. Contact Information</h2>
              <p>For questions about these terms, please contact our legal department at legal@saintdaniels.com</p>
            </section>

            <div className="terms-footer">
              <p>Last Updated: March 2024</p>
              <p>© 2024 Saint Daniels Healthcare. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 