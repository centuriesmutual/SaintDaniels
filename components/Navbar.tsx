'use client';

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SupportModal from './SupportModal';

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      <Navbar 
        expand="lg" 
        className="navbar py-2"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container className="px-3">
          <div className="d-flex align-items-center justify-content-between w-100">
            <Link href="/" className="navbar-brand d-flex align-items-center">
              <Image
                src="/images/saintdanielslogo.jpeg"
                alt="Saint Daniels Logo"
                width={45}
                height={45}
                className="me-2"
              />
              <span className="brand-text">Saint Daniels</span>
            </Link>
            {isHomePage && (
              <button 
                className="nav-button ms-auto"
                onClick={() => setShowSupportModal(true)}
                style={{
                  background: 'transparent',
                  color: '#1B392F',
                  border: '2px solid #1B392F',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1B392F';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1B392F';
                }}
              >
                Support
              </button>
            )}
          </div>
        </Container>
      </Navbar>
      <SupportModal show={showSupportModal} onHide={() => setShowSupportModal(false)} />
    </>
  );
};

export default MainNavbar; 