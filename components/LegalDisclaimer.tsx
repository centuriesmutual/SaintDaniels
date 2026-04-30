'use client';
import { useState } from 'react';

const LegalDisclaimer = ({ onAccept }) => {
  const handleAccept = () => {
    onAccept();
  };

  return (
    <div className="enrollment-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="enrollment-card">
              <h1 className="enrollment-title">Welcome to Saint Daniels</h1>
              
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Legal Disclaimer</h2>
                
                <p className="mb-4">
                  By proceeding with this application, you acknowledge and agree to the following terms and conditions:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>You are limited to one application submission per day.</li>
                  <li>If you need to submit another application, please wait 24 hours or contact our hotline for assistance.</li>
                  <li>All information provided must be accurate and truthful.</li>
                  <li>Your application will be reviewed within 24-48 business hours.</li>
                </ul>

                <div className="alert alert-warning mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Please read this disclaimer carefully before proceeding. By clicking "I Accept", you acknowledge that you have read and understood these terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleAccept}
                    className="btn btn-primary"
                    style={{
                      backgroundColor: '#2c5530',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#4a7c59'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2c5530'}
                  >
                    I Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer; 