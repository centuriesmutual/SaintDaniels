'use client';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
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
  
  const [formData, setFormData] = useState({
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
    hasCurrentCoverage: false,
    currentCoverageType: '',
    currentPlanName: '',
    currentPolicyNumber: '',
    coverageEndDate: '',
    losingCoverage: false,
    losingCoverageReason: '',
    losingCoverageDate: '',
    
    // Additional Information
    preferredLanguage: 'English',
    needsInterpreter: false,
    hasDisability: false,
    hasTobaccoUse: false,
    
    // Terms
    agreeToTerms: false,
    agreeToPrivacy: false,
    consentToContact: true
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
        if (!formData.planType) {
          setError('Please select a plan type');
          return false;
        }
        break;
      case 2:
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
      case 3:
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
      case 4:
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
        break;
      case 5:
        // Coverage information is optional but validate if provided
        break;
      case 6:
        if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
          setError('You must agree to the Terms of Service and Privacy Policy');
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      if (step === 1) {
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

      // Redirect to application page with plan type
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

      case 2:
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

      case 3:
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

      case 4:
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
                      type="number"
                      name="householdIncome"
                      value={formData.householdIncome}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
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
                  type="number"
                  name="expectedIncome"
                  value={formData.expectedIncome}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
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
                    <Form.Label>Desired Monthly Premium</Form.Label>
                    <Form.Control
                      type="number"
                      name="desiredPremium"
                      value={formData.desiredPremium}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      placeholder="e.g., 300"
                    />
                    <Form.Text className="text-muted">Your preferred monthly premium amount (optional)</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Desired Annual Deductible</Form.Label>
                    <Form.Control
                      type="number"
                      name="desiredDeductible"
                      value={formData.desiredDeductible}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      placeholder="e.g., 5000"
                    />
                    <Form.Text className="text-muted">Your preferred annual deductible amount (optional)</Form.Text>
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
                    <Form.Label>Desired Monthly Premium</Form.Label>
                    <Form.Control
                      type="number"
                      name="desiredPremium"
                      value={formData.desiredPremium}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      placeholder="e.g., 150"
                    />
                    <Form.Text className="text-muted">Your preferred monthly premium amount for Medicare plan (optional)</Form.Text>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Desired Annual Deductible</Form.Label>
                    <Form.Control
                      type="number"
                      name="desiredDeductible"
                      value={formData.desiredDeductible}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      placeholder="e.g., 2000"
                    />
                    <Form.Text className="text-muted">Your preferred annual deductible amount (optional)</Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          );
        }

      case 5:
        return (
          <div className="step-content">
            <h2 className="step-title">Current Coverage Information</h2>
            <p className="step-description">Tell us about your current health insurance, if any</p>
            
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="hasCurrentCoverage"
                checked={formData.hasCurrentCoverage}
                onChange={handleChange}
                label="I currently have health insurance coverage"
              />
            </Form.Group>

            {formData.hasCurrentCoverage && (
              <>
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
              </>
            )}

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

            <hr className="my-4" />

            <h4 className="mb-3">Additional Information</h4>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Preferred Language</Form.Label>
                  <Form.Control as="select" name="preferredLanguage" value={formData.preferredLanguage} onChange={handleChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Chinese">Chinese</option>
                    <option value="French">French</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    name="needsInterpreter"
                    checked={formData.needsInterpreter}
                    onChange={handleChange}
                    label="I need interpreter services"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="hasDisability"
                checked={formData.hasDisability}
                onChange={handleChange}
                label="I have a disability"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="hasTobaccoUse"
                checked={formData.hasTobaccoUse}
                onChange={handleChange}
                label="I use tobacco products"
              />
            </Form.Group>
          </div>
        );

      case 6:
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

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="consentToContact"
                checked={formData.consentToContact}
                onChange={handleChange}
                label="I consent to be contacted about my enrollment application"
              />
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

  const totalSteps = 6;

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
                      {step > 1 ? (
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
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}