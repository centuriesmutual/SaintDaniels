'use client';

import React, { useState, useEffect, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';
import Link from 'next/link';
import PageTransition from '../../components/PageTransition';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';
import { extractMarketingID } from '../utils/leadTracking';
import { FaArrowLeft, FaArrowRight, FaUser, FaMapMarkerAlt, FaDollarSign, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
];

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [planType, setPlanType] = useState(''); // 'ACA' or 'Medicare'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [marketingID, setMarketingID] = useState('UNKNOWN');
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLeaveWarning, setShowLeaveWarning] = useState(false);
  const signatureCanvasRef = useRef(null);
  
  const [formData, setFormData] = useState({
    // Disclaimer
    acceptedDisclaimer: false,
    
    // Plan Selection
    planType: '',
    
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    dateOfBirth: '',
    ssn: '',
    gender: '',
    email: '',
    phone: '',
    
    // Address
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    county: '',
    sameAsMailing: true,
    mailingStreet: '',
    mailingCity: '',
    mailingState: '',
    mailingZip: '',
    
    // Citizenship/Immigration
    citizenshipStatus: '',
    immigrationStatus: '',
    countryOfOrigin: '',
    
    // Household Information (ACA)
    householdSize: '',
    taxFilingStatus: '',
    willFileTaxes: '',
    claimedAsDependent: false,
    relationshipToTaxFiler: '',
    
    // Income Information (ACA)
    householdIncome: '',
    incomeFrequency: 'annual', // annual, monthly
    expectedIncome: '',
    hasIncomeChanges: false,
    
    // Medicare Specific
    medicareNumber: '',
    partAStartDate: '',
    partBStartDate: '',
    hasPartD: false,
    needsPartD: false,
    hasMedicaid: false,
    hasOtherCoverage: false,
    
    // Plan Preferences (shared for both ACA and Medicare)
    desiredPremium: '',
    desiredDeductible: '',
    
    // Current Coverage
    hasCurrentCoverage: '',
    currentCoverageType: '',
    coverageTypeDetail: '', // Medicare, Tricare, ACA, Group
    currentPlanName: '',
    currentPolicyNumber: '',
    coverageEndDate: '',
    losingCoverage: false,
    losingCoverageReason: '',
    losingCoverageDate: '',
    
    // Terms
    agreeToTerms: false,
    agreeToPrivacy: false,
    consentToContact: false,
    signature: null
  });

  useEffect(() => {
    const extractedID = extractMarketingID();
    setMarketingID(extractedID);
  }, []);

  // Warn users before leaving the page to prevent data loss
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Only warn if user has started filling out the form
      const hasFormData = formData.firstName || formData.email || formData.planType;
      if (hasFormData) {
        e.preventDefault();
        setShowLeaveWarning(true);
        e.returnValue = 'Are you sure you want to leave? All your information will be lost.';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formData]);

  const formatSSN = (value) => {
    const ssn = value.replace(/\D/g, '');
    if (ssn.length <= 3) return ssn;
    if (ssn.length <= 5) return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
    return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 9)}`;
  };

  const formatPhone = (value) => {
    const phone = value.replace(/\D/g, '');
    if (phone.length <= 3) return phone;
    if (phone.length <= 6) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const formatMedicareNumber = (value) => {
    const medicare = value.replace(/\D/g, '');
    if (medicare.length <= 3) return medicare;
    if (medicare.length <= 6) return `${medicare.slice(0, 3)}-${medicare.slice(3)}`;
    if (medicare.length <= 9) return `${medicare.slice(0, 3)}-${medicare.slice(3, 6)}-${medicare.slice(6)}`;
    return `${medicare.slice(0, 3)}-${medicare.slice(3, 6)}-${medicare.slice(6, 9)}A`;
  };

  const formatCurrency = (value) => {
    // Remove all non-digit characters
    const numbers = value.replace(/\D/g, '');
    if (!numbers) return '';
    // Add commas and dollar sign
    return '$' + numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const parseCurrency = (value) => {
    // Remove dollar sign and commas, return as number string
    return value.replace(/[$,]/g, '');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'ssn') {
      setFormData(prev => ({ ...prev, [name]: formatSSN(value) }));
    } else if (name === 'phone' || name === 'medicareNumber') {
      if (name === 'medicareNumber') {
        setFormData(prev => ({ ...prev, [name]: formatMedicareNumber(value) }));
      } else {
        setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
      }
    } else if (name === 'householdIncome' || name === 'expectedIncome' || name === 'desiredPremium' || name === 'desiredDeductible') {
      // Format currency fields
      const formatted = formatCurrency(value);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const validateStep = (stepNum) => {
    setError('');
    
    switch(stepNum) {
      case 1:
        if (!formData.acceptedDisclaimer) {
          setError('You must accept the terms and conditions and privacy policy to continue');
          return false;
        }
        break;
      case 2:
        if (!formData.planType) {
          setError('Please select a plan type');
          return false;
        }
        break;
      case 3:
        if (!formData.firstName || !formData.lastName || !formData.dateOfBirth || 
            !formData.ssn || !formData.gender || !formData.email || !formData.phone) {
          setError('Please fill in all required personal information fields');
          return false;
        }
        // Validate SSN format
        if (formData.ssn.replace(/\D/g, '').length !== 9) {
          setError('Please enter a valid 9-digit SSN');
          return false;
        }
        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError('Please enter a valid email address');
          return false;
        }
        // Validate phone
        if (formData.phone.replace(/\D/g, '').length !== 10) {
          setError('Please enter a valid 10-digit phone number');
          return false;
        }
        break;
      case 4:
        if (!formData.streetAddress || !formData.city || !formData.state || !formData.zipCode) {
          setError('Please fill in all required address fields');
          return false;
        }
        if (!formData.sameAsMailing && (!formData.mailingStreet || !formData.mailingCity || !formData.mailingState || !formData.mailingZip)) {
          setError('Please fill in all mailing address fields');
          return false;
        }
        if (!formData.citizenshipStatus) {
          setError('Please select citizenship status');
          return false;
        }
        break;
      case 5:
        if (formData.planType === 'ACA') {
          if (!formData.householdSize || !formData.taxFilingStatus) {
            setError('Please fill in all required household information');
            return false;
          }
          if (!formData.householdIncome || !formData.expectedIncome) {
            setError('Please provide income information');
            return false;
          }
        } else if (formData.planType === 'Medicare') {
          if (!formData.medicareNumber) {
            setError('Please enter your Medicare number');
            return false;
          }
          if (formData.medicareNumber.replace(/\D/g, '').length < 9) {
            setError('Please enter a valid Medicare number');
            return false;
          }
        }
        if (!formData.desiredPremium || !formData.desiredDeductible) {
          setError('Please provide desired monthly premium and annual deductible');
          return false;
        }
        break;
      case 6:
        // Coverage information is optional but validate if provided
        break;
      case 7:
        if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
          setError('You must agree to the Terms of Service and Privacy Policy');
          return false;
        }
        if (!formData.signature) {
          setError('You must provide an electronic signature');
          return false;
        }
        if (!formData.desiredPremium || !formData.desiredDeductible) {
          setError('Please provide desired premium and deductible amounts');
          return false;
        }
        if (!formData.hasCurrentCoverage) {
          setError('Please indicate whether you currently have health insurance coverage');
          return false;
        }
        if (formData.hasCurrentCoverage === 'Yes' && !formData.coverageTypeDetail) {
          setError('Please specify the type of coverage you have');
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      if (step === 2) {
        setPlanType(formData.planType);
      }
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setError('');
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(step)) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const submissionData = {
        ...formData,
        marketingid: marketingID,
        timestamp: new Date().toISOString(),
        submittedat: new Date().toISOString(),
        status: 'New Enrollment',
        convertedtoapplication: true
      };

      // Submit to API
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Generate enrollment ID
      const enrollmentId = 'ENR-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();

      // Redirect to thank you page with enrollment ID
      router.push(`/signup/thank-you?enrollmentId=${enrollmentId}`);
      router.push(`/application?planType=${formData.planType}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="step-content">
            <h2 className="step-title">Important Information & Disclaimers</h2>
            <p className="step-description">Please read and accept the following terms before proceeding with your health insurance enrollment</p>
            
            <Alert variant="info" className="mb-4">
              <strong>Health Insurance Enrollment</strong><br />
              You are about to begin the enrollment process for health insurance coverage. By proceeding, you acknowledge that you are applying for health insurance and understand that this application will be reviewed by insurance providers.
            </Alert>

            <div style={{ 
              maxHeight: '400px', 
              overflowY: 'auto', 
              border: '1px solid #dee2e6', 
              borderRadius: '8px', 
              padding: '1.5rem',
              marginBottom: '2rem',
              background: '#f8f9fa'
            }}>
              <h4 style={{ color: '#2c5530', marginBottom: '1.5rem' }}>Terms and Conditions</h4>
              
              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>1. Application Process</h5>
              <p>By submitting this enrollment application, you agree to provide accurate and complete information. Any false or misleading information may result in denial of coverage or cancellation of your policy.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>2. Eligibility</h5>
              <p>Eligibility for health insurance coverage is subject to verification of the information provided. Coverage is not guaranteed and is subject to underwriting approval by the insurance carrier.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>3. Premiums and Payments</h5>
              <p>You are responsible for paying all premiums and fees associated with your health insurance plan. Premium amounts are subject to change and will be communicated to you upon plan approval.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>4. Coverage Terms</h5>
              <p>Coverage terms, benefits, and limitations are determined by the insurance carrier and are outlined in your policy documents. Please review all policy materials carefully upon receipt.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>5. Data Collection and Use</h5>
              <p>We collect and use your personal information to process your enrollment application, communicate with you about your application, and provide customer service. Your information may be shared with insurance carriers, third-party service providers, and as required by law.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>6. Communication</h5>
              <p>By providing your contact information, you consent to receive communications via phone, email, and mail regarding your enrollment application and health insurance coverage.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>7. Limitation of Liability</h5>
              <p>Saint Daniels Healthcare acts as an insurance broker and is not responsible for coverage decisions made by insurance carriers. We are not liable for any claims, damages, or losses arising from your health insurance coverage or lack thereof.</p>

              <h4 style={{ color: '#2c5530', marginTop: '2rem', marginBottom: '1.5rem' }}>Privacy Policy</h4>
              
              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Information We Collect</h5>
              <p>We collect personal information including but not limited to: name, date of birth, Social Security number, contact information, health information, income information, and other data necessary to process your enrollment application.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>How We Use Your Information</h5>
              <p>Your information is used to:</p>
              <ul>
                <li>Process and submit your enrollment application to insurance carriers</li>
                <li>Communicate with you about your application status</li>
                <li>Provide customer service and support</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services</li>
              </ul>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Information Sharing</h5>
              <p>We may share your information with:</p>
              <ul>
                <li>Insurance carriers and their affiliates</li>
                <li>Third-party service providers who assist in processing your application</li>
                <li>Government agencies as required by law</li>
                <li>Legal authorities when required by court order or subpoena</li>
              </ul>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Data Security</h5>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Your Rights</h5>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of certain communications</li>
              </ul>

              <h5 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Contact Us</h5>
              <p>For questions about our privacy practices or to exercise your rights, please contact us at <a href="mailto:privacy@saintdaniels.com">privacy@saintdaniels.com</a> or call 1-800-123-4567.</p>

              <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="acceptedDisclaimer"
                checked={formData.acceptedDisclaimer}
                onChange={handleChange}
                required
                label={
                  <>
                    I have read and understand the Terms and Conditions and Privacy Policy. I acknowledge that I am applying for health insurance coverage and consent to the collection, use, and sharing of my information as described above. <span className="text-danger">*</span>
                  </>
                }
              />
            </Form.Group>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h2 className="step-title">Select Your Plan Type</h2>
            <p className="step-description">Choose the type of health insurance plan you're enrolling in</p>
            
            <Row className="g-4 mt-4">
              <Col md={6}>
                <div 
                  className={`plan-option-card ${formData.planType === 'ACA' ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, planType: 'ACA' }))}
                  style={{
                    padding: '2rem',
                    border: formData.planType === 'ACA' ? '3px solid #007bff' : '2px solid #dee2e6',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: formData.planType === 'ACA' ? '#f0f8ff' : 'white'
                  }}
                >
                  <FaShieldAlt style={{ fontSize: '3rem', color: '#007bff', marginBottom: '1rem' }} />
                  <h3>ACA Marketplace Plan</h3>
                  <p className="text-muted">Affordable Care Act health insurance through the Health Insurance Marketplace</p>
                  <ul className="text-start mt-3">
                    <li>Income-based subsidies available</li>
                    <li>Essential health benefits included</li>
                    <li>Open enrollment periods apply</li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div 
                  className={`plan-option-card ${formData.planType === 'Medicare' ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, planType: 'Medicare' }))}
                  style={{
                    padding: '2rem',
                    border: formData.planType === 'Medicare' ? '3px solid #007bff' : '2px solid #dee2e6',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: formData.planType === 'Medicare' ? '#f0f8ff' : 'white'
                  }}
                >
                  <FaUser style={{ fontSize: '3rem', color: '#007bff', marginBottom: '1rem' }} />
                  <h3>Medicare Plan</h3>
                  <p className="text-muted">Medicare Advantage, Supplement, or Part D prescription drug plans</p>
                  <ul className="text-start mt-3">
                    <li>For individuals 65+ or with disabilities</li>
                    <li>Multiple plan options available</li>
                    <li>Prescription drug coverage</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h2 className="step-title">Personal Information</h2>
            <p className="step-description">Please provide your personal details</p>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Suffix</Form.Label>
                  <Form.Control as="select" name="suffix" value={formData.suffix} onChange={handleChange}>
                    <option value="">None</option>
                    <option value="Jr">Jr</option>
                    <option value="Sr">Sr</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    max={new Date().toISOString().split('T')[0]}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Social Security Number <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="ssn"
                    value={formData.ssn}
                    onChange={handleChange}
                    placeholder="XXX-XX-XXXX"
                    maxLength={11}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
                  <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(XXX) XXX-XXXX"
                    maxLength={14}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h2 className="step-title">Address & Citizenship</h2>
            <p className="step-description">Provide your residential address and citizenship information</p>
            
            <Form.Group className="mb-3">
              <Form.Label>Street Address <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>State <span className="text-danger">*</span></Form.Label>
                  <Form.Control as="select" name="state" value={formData.state} onChange={handleChange} required>
                    <option value="">Select</option>
                    {US_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>ZIP Code <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    pattern="[0-9]{5}(-[0-9]{4})?"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>County</Form.Label>
              <Form.Control
                type="text"
                name="county"
                value={formData.county}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="sameAsMailing"
                checked={formData.sameAsMailing}
                onChange={handleChange}
                label="Mailing address is the same as residential address"
              />
            </Form.Group>

            {!formData.sameAsMailing && (
              <>
                <h4 className="mt-4 mb-3">Mailing Address</h4>
                <Form.Group className="mb-3">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="mailingStreet"
                    value={formData.mailingStreet}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="mailingCity"
                        value={formData.mailingCity}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" name="mailingState" value={formData.mailingState} onChange={handleChange}>
                        <option value="">Select</option>
                        {US_STATES.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="mailingZip"
                        value={formData.mailingZip}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </>
            )}

            <Row className="mt-4">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Citizenship Status <span className="text-danger">*</span></Form.Label>
                  <Form.Control as="select" name="citizenshipStatus" value={formData.citizenshipStatus} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="US Citizen">US Citizen</option>
                    <option value="Naturalized Citizen">Naturalized Citizen</option>
                    <option value="Lawfully Present">Lawfully Present</option>
                    <option value="Qualified Non-Citizen">Qualified Non-Citizen</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              {formData.citizenshipStatus !== 'US Citizen' && formData.citizenshipStatus !== 'Naturalized Citizen' && (
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Immigration Status</Form.Label>
                    <Form.Control
                      type="text"
                      name="immigrationStatus"
                      value={formData.immigrationStatus}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              )}
            </Row>
          </div>
        );

      case 5:
        if (formData.planType === 'ACA') {
          return (
            <div className="step-content">
              <h2 className="step-title">Household & Income Information</h2>
              <p className="step-description">Provide information about your household and income for subsidy eligibility</p>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Household Size <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="number"
                      name="householdSize"
                      value={formData.householdSize}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                    <Form.Text className="text-muted">Include yourself and all dependents</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tax Filing Status <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" name="taxFilingStatus" value={formData.taxFilingStatus} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Single">Single</option>
                      <option value="Married Filing Jointly">Married Filing Jointly</option>
                      <option value="Married Filing Separately">Married Filing Separately</option>
                      <option value="Head of Household">Head of Household</option>
                      <option value="Qualifying Widow(er)">Qualifying Widow(er)</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Will you file taxes for {new Date().getFullYear()}? <span className="text-danger">*</span></Form.Label>
                <Form.Control as="select" name="willFileTaxes" value={formData.willFileTaxes} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not Sure">Not Sure</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="claimedAsDependent"
                  checked={formData.claimedAsDependent}
                  onChange={handleChange}
                  label="I can be claimed as a dependent on someone else's tax return"
                />
              </Form.Group>

              {formData.claimedAsDependent && (
                <Form.Group className="mb-3">
                  <Form.Label>Relationship to Tax Filer</Form.Label>
                  <Form.Control as="select" name="relationshipToTaxFiler" value={formData.relationshipToTaxFiler} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Child">Child</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Other Relative">Other Relative</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
              )}

              <hr className="my-4" />

              <h4 className="mb-3">Income Information</h4>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Household Income <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="householdIncome"
                      value={formData.householdIncome}
                      onChange={handleChange}
                      placeholder="$0"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Income Frequency</Form.Label>
                    <Form.Control as="select" name="incomeFrequency" value={formData.incomeFrequency} onChange={handleChange}>
                      <option value="annual">Annual</option>
                      <option value="monthly">Monthly</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Expected Income for {new Date().getFullYear()} <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="expectedIncome"
                  value={formData.expectedIncome}
                  onChange={handleChange}
                  placeholder="$0"
                  required
                />
                <Form.Text className="text-muted">Your best estimate of total household income for the year</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="hasIncomeChanges"
                  checked={formData.hasIncomeChanges}
                  onChange={handleChange}
                  label="I expect my income to change significantly this year"
                />
              </Form.Group>

              <hr className="my-4" />

              <h4 className="mb-3">Plan Preferences</h4>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Desired Monthly Premium <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="desiredPremium"
                      value={formData.desiredPremium}
                      onChange={handleChange}
                      placeholder="$0"
                      required
                    />
                    <Form.Text className="text-muted">Your preferred monthly premium amount</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Desired Annual Deductible <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="desiredDeductible"
                      value={formData.desiredDeductible}
                      onChange={handleChange}
                      placeholder="$0"
                      required
                    />
                    <Form.Text className="text-muted">Your preferred annual deductible amount</Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          );
        } else {
          return (
            <div className="step-content">
              <h2 className="step-title">Medicare Information</h2>
              <p className="step-description">Provide your Medicare details</p>
              
              <Form.Group className="mb-3">
                <Form.Label>Medicare Number <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="medicareNumber"
                  value={formData.medicareNumber}
                  onChange={handleChange}
                  placeholder="XXX-XX-XXXXA"
                  maxLength={12}
                  required
                />
                <Form.Text className="text-muted">Found on your red, white, and blue Medicare card</Form.Text>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Medicare Part A Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="partAStartDate"
                      value={formData.partAStartDate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Medicare Part B Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="partBStartDate"
                      value={formData.partBStartDate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="hasPartD"
                  checked={formData.hasPartD}
                  onChange={handleChange}
                  label="I currently have Medicare Part D (prescription drug coverage)"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="needsPartD"
                  checked={formData.needsPartD}
                  onChange={handleChange}
                  label="I need Medicare Part D (prescription drug coverage)"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="hasMedicaid"
                  checked={formData.hasMedicaid}
                  onChange={handleChange}
                  label="I have Medicaid (dual eligible)"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="hasOtherCoverage"
                  checked={formData.hasOtherCoverage}
                  onChange={handleChange}
                  label="I have other health insurance coverage"
                />
              </Form.Group>

              <hr className="my-4" />

              <h4 className="mb-3">Plan Preferences</h4>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Desired Monthly Premium <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="desiredPremium"
                      value={formData.desiredPremium}
                      onChange={handleChange}
                      placeholder="$0"
                      required
                    />
                    <Form.Text className="text-muted">Your preferred monthly premium amount for Medicare plan</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Desired Annual Deductible <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      name="desiredDeductible"
                      value={formData.desiredDeductible}
                      onChange={handleChange}
                      placeholder="$0"
                      required
                    />
                    <Form.Text className="text-muted">Your preferred annual deductible amount</Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          );
        }

      case 6:
        return (
          <div className="step-content">
            <h2 className="step-title">Current Coverage Information</h2>
            <p className="step-description">Tell us about your current health insurance, if any</p>
            
            <Form.Group className="mb-4">
              <Form.Label>Do you currently have health insurance coverage? <span className="text-danger">*</span></Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  name="hasCurrentCoverage"
                  id="hasCoverageYes"
                  value="Yes"
                  checked={formData.hasCurrentCoverage === 'Yes'}
                  onChange={handleChange}
                  label="Yes"
                  required
                />
                <Form.Check
                  type="radio"
                  name="hasCurrentCoverage"
                  id="hasCoverageNo"
                  value="No"
                  checked={formData.hasCurrentCoverage === 'No'}
                  onChange={handleChange}
                  label="No"
                  required
                />
              </div>
            </Form.Group>

            {formData.hasCurrentCoverage === 'Yes' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>What type of coverage do you have? <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    as="select" 
                    name="coverageTypeDetail" 
                    value={formData.coverageTypeDetail} 
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Medicare">Medicare</option>
                    <option value="Tricare">Tricare</option>
                    <option value="ACA">ACA (Affordable Care Act)</option>
                    <option value="Group">Group Coverage</option>
                  </Form.Control>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Current Coverage Type</Form.Label>
                      <Form.Control as="select" name="currentCoverageType" value={formData.currentCoverageType} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Employer">Employer-sponsored</option>
                        <option value="Individual">Individual plan</option>
                        <option value="Medicaid">Medicaid</option>
                        <option value="Medicare">Medicare</option>
                        <option value="Other">Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Plan Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="currentPlanName"
                        value={formData.currentPlanName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Policy Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="currentPolicyNumber"
                        value={formData.currentPolicyNumber}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Coverage End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="coverageEndDate"
                        value={formData.coverageEndDate}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    name="losingCoverage"
                    checked={formData.losingCoverage}
                    onChange={handleChange}
                    label="I am losing my current coverage"
                  />
                </Form.Group>

                {formData.losingCoverage && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>Reason for Losing Coverage</Form.Label>
                      <Form.Control as="select" name="losingCoverageReason" value={formData.losingCoverageReason} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Job Loss">Job loss</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Age Out">Aging out of parent's plan</option>
                        <option value="Plan Termination">Plan termination</option>
                        <option value="Moving">Moving to new area</option>
                        <option value="Other">Other</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Date Coverage Ends</Form.Label>
                      <Form.Control
                        type="date"
                        name="losingCoverageDate"
                        value={formData.losingCoverageDate}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </>
                )}
              </>
            )}
          </div>
        );

      case 7:
        return (
          <div className="step-content">
            <h2 className="step-title">Review & Consent</h2>
            <p className="step-description">Please review your information and provide consent</p>
            
            <div className="review-section mb-4">
              <h4>Personal Information</h4>
              <p><strong>Name:</strong> {formData.firstName} {formData.middleName} {formData.lastName} {formData.suffix}</p>
              <p><strong>DOB:</strong> {formData.dateOfBirth}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
            </div>

            <div className="review-section mb-4">
              <h4>Address</h4>
              <p>{formData.streetAddress}</p>
              <p>{formData.city}, {formData.state} {formData.zipCode}</p>
            </div>

            <div className="review-section mb-4">
              <h4>Plan Type</h4>
              <p>{formData.planType === 'ACA' ? 'ACA Marketplace Plan' : 'Medicare Plan'}</p>
            </div>

            <hr className="my-4" />

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                label={
                  <>
                    I agree to the <Link href="/terms" target="_blank">Terms of Service</Link> <span className="text-danger">*</span>
                  </>
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="agreeToPrivacy"
                checked={formData.agreeToPrivacy}
                onChange={handleChange}
                required
                label={
                  <>
                    I agree to the <Link href="/privacy" target="_blank">Privacy Policy</Link> <span className="text-danger">*</span>
                  </>
                }
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="mb-3 d-block">
                <strong>Electronic Signature <span className="text-danger">*</span></strong>
                <br />
                <small className="text-muted">By signing below, you consent to be contacted about your enrollment application and acknowledge this as your legal signature.</small>
              </Form.Label>
              <div style={{ 
                border: '2px solid #ddd', 
                borderRadius: '8px', 
                padding: '1rem',
                background: '#f9f9f9',
                marginBottom: '1rem'
              }}>
                <SignatureCanvas
                  ref={signatureCanvasRef}
                  canvasProps={{
                    width: 500,
                    height: 150,
                    className: 'signature-canvas'
                  }}
                  backgroundColor="#ffffff"
                  penColor="#000000"
                />
              </div>
              <div className="d-flex gap-2">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => {
                    if (signatureCanvasRef.current) {
                      signatureCanvasRef.current.clear();
                      setFormData(prev => ({ ...prev, signature: null }));
                    }
                  }}
                >
                  Clear Signature
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    if (signatureCanvasRef.current && !signatureCanvasRef.current.isEmpty()) {
                      const signatureData = signatureCanvasRef.current.toDataURL();
                      setFormData(prev => ({ ...prev, signature: signatureData, consentToContact: true }));
                    }
                  }}
                >
                  Save Signature
                </Button>
              </div>
              {formData.signature && (
                <Alert variant="success" className="mt-2">
                  <FaCheckCircle className="me-2" />
                  Signature saved. You consent to be contacted about your enrollment application.
                </Alert>
              )}
            </Form.Group>

            <Alert variant="info" className="mt-4">
              <strong>Next Steps:</strong> After submitting, you'll be redirected to complete your full application with additional details and documentation.
            </Alert>
          </div>
        );

      default:
        return null;
    }
  };

  const totalSteps = 7;

  return (
    <PageTransition>
      <div className="page-content">
        <Navbar />
        <div className="enrollment-page" style={{ 
          padding: '4rem 0',
          background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dcc6 100%)',
          minHeight: '100vh'
        }}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} xl={9}>
                <div className="enrollment-card" style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '3rem',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Progress Bar */}
                  <div className="progress-container mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Step {step} of {totalSteps}</span>
                      <span className="text-muted">{Math.round((step / totalSteps) * 100)}% Complete</span>
                    </div>
                    <div className="progress" style={{ height: '8px', borderRadius: '10px' }}>
                      <div 
                        className="progress-bar bg-primary" 
                        role="progressbar" 
                        style={{ width: `${(step / totalSteps) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="danger" className="mb-4">
                      {error}
                    </Alert>
                  )}

                  <form onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                    {renderStepContent()}

                    <div className="form-navigation mt-5 d-flex justify-content-between">
                      {step > 2 ? (
                        <Button
                          variant="outline-secondary"
                          onClick={prevStep}
                          style={{ minWidth: '120px' }}
                        >
                          <FaArrowLeft className="me-2" />
                          Previous
                        </Button>
                      ) : (
                        <div></div>
                      )}
                      
                      {step < totalSteps ? (
                        <Button
                          type="submit"
                          variant="primary"
                          style={{ 
                            minWidth: '120px',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#2c5530';
                            e.currentTarget.style.borderColor = '#2c5530';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '';
                            e.currentTarget.style.borderColor = '';
                            e.currentTarget.style.color = '';
                          }}
                        >
                          Next
                          <FaArrowRight className="ms-2" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          style={{ minWidth: '150px' }}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <FaCheckCircle className="me-2" />
                              Submit Application
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>

                  <div className="text-center mt-4">
                    <p className="text-muted">
                      <Link href="#" onClick={(e) => { e.preventDefault(); setShowContactModal(true); }} style={{ cursor: 'pointer' }}>Contact Us</Link>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />

        {/* Contact Us Modal */}
        <Modal show={showContactModal} onHide={() => setShowContactModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Saint Daniels Healthcare</h5>
              <p><strong>Phone:</strong> <a href="tel:+18001234567">1-800-123-4567</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@saintdaniels.com">info@saintdaniels.com</a></p>
              <p><strong>Address:</strong><br />
              123 Healthcare Drive<br />
              Dallas, TX 75201</p>
              <p><strong>Hours:</strong><br />
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM<br />
              Sunday: Closed</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowContactModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Leave Warning Modal */}
        <Modal show={showLeaveWarning} onHide={() => setShowLeaveWarning(false)} backdrop="static" keyboard={false} centered>
          <Modal.Header>
            <Modal.Title>Warning: Data Loss</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert variant="warning">
              <strong>Are you sure you want to leave?</strong><br />
              All the information you've entered will be lost if you navigate away from this page.
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowLeaveWarning(false)}>
              Stay on Page
            </Button>
            <Button variant="danger" onClick={() => {
              setShowLeaveWarning(false);
              router.push('/');
            }}>
              Leave Anyway
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </PageTransition>
  );
}