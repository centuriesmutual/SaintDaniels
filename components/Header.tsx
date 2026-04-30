'use client';

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SupportModal from '../components/SupportModal';

export default function Header() {
  const pathname = usePathname();
  const isLearnMorePage = pathname === '/learnmore';
  const [showSupportModal, setShowSupportModal] = useState(false);

  return (
    <>
      <div className="top-header">
        <Container>
          <div className="header-content">
            <Link href="/" className="logo-container">
              <Image 
                src="/images/saintdanielslogo.jpeg" 
                alt="Saint Daniels Logo" 
                width={50} 
                height={50} 
                className="header-logo"
              />
              <span className="brand-text">SAINT DANIELS</span>
            </Link>
            {!isLearnMorePage && (
              <button 
                className="login-button"
                onClick={() => setShowSupportModal(true)}
                style={{
                  background: '#1B392F',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2c5530';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1B392F';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Support
              </button>
            )}
          </div>
        </Container>
      </div>
      <SupportModal show={showSupportModal} onHide={() => setShowSupportModal(false)} />
    </>
  );
} 