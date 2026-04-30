'use client';

import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="privacy-page">
        <Container>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">Last Updated: March 2024</p>

          <div className="privacy-content">
            <section className="privacy-section">
              <h2>Our Commitment to Your Privacy</h2>
              <p>
                At Saint Daniels Healthcare, we take the privacy and security of your personal health information extremely seriously. As a healthcare services platform, we understand the sensitive nature of the information you share with us and are committed to protecting it in accordance with all applicable laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA).
              </p>
            </section>

            <section className="privacy-section">
              <h2>HIPAA Compliance and Data Protection</h2>
              <p>
                Our platform is built with HIPAA compliance at its core. This means:
              </p>
              <ul>
                <li>All personal health information (PHI) is encrypted both in transit and at rest</li>
                <li>Access to PHI is strictly limited to authorized personnel who require it for specific healthcare operations</li>
                <li>Regular security audits and updates are performed to maintain the highest level of data protection</li>
                <li>All staff members undergo mandatory HIPAA compliance training</li>
                <li>We maintain detailed access logs and conduct regular security assessments</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>Information We Collect</h2>
              <p>
                We only collect information that is necessary to provide our career development and healthcare services:
              </p>
              <ul>
                <li>Basic personal information (name, contact details)</li>
                <li>Health insurance information</li>
                <li>Career development activity data related to program participation</li>
                <li>Program participation and career advancement history</li>
                <li>Information required for health insurance enrollment and management</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>How We Use Your Information</h2>
              <p>
                Your information is used exclusively for:
              </p>
              <ul>
                <li>Processing and managing your career development program participation</li>
                <li>Facilitating health insurance enrollment and coverage</li>
                <li>Verifying eligibility for specific career development programs</li>
                <li>Improving our services and user experience</li>
                <li>Maintaining HIPAA compliance and regulatory requirements</li>
              </ul>
              <p>
                We do not sell, trade, or transfer your personal information to outside parties for marketing purposes. Your data is strictly used for healthcare-related operations within our organization.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Data Storage and Security</h2>
              <p>
                We implement robust security measures to protect your information:
              </p>
              <ul>
                <li>Advanced encryption protocols for all stored data</li>
                <li>Secure, HIPAA-compliant servers and databases</li>
                <li>Regular security updates and vulnerability assessments</li>
                <li>Strict access controls and authentication procedures</li>
                <li>Automated security monitoring and threat detection</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>Your Rights and Control</h2>
              <p>
                Under HIPAA and our privacy commitment, you have the right to:
              </p>
              <ul>
                <li>Access your personal health information</li>
                <li>Request corrections to your information</li>
                <li>Receive an accounting of disclosures of your health information</li>
                <li>Request restrictions on certain uses and disclosures</li>
                <li>Obtain a copy of your health records</li>
                <li>Choose how we communicate with you about your health information</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>Data Retention</h2>
              <p>
                We retain your information only for as long as necessary to:
              </p>
              <ul>
                <li>Provide our services and maintain your career development program participation</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve any disputes or issues that may arise</li>
                <li>Maintain accurate business and health records as required by law</li>
              </ul>
              <p>
                After this period, your information is securely deleted or anonymized in accordance with our data retention policies and HIPAA requirements.
              </p>
            </section>

            <section className="privacy-section">
              <h2>Third-Party Service Providers</h2>
              <p>
                When we work with third-party service providers:
              </p>
              <ul>
                <li>All providers must meet our strict HIPAA compliance requirements</li>
                <li>Business Associate Agreements (BAAs) are maintained with all relevant parties</li>
                <li>Access to data is limited to only what is necessary for specific services</li>
                <li>Regular audits are conducted to ensure compliance</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>Updates to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements. Any significant changes will be communicated to you through our platform or via email. Continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
} 