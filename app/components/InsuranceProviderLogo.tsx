import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

export default function InsuranceProviderLogo({ size = 'medium', className = '' }) {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 24;
      case 'medium':
        return 48;
      case 'large':
        return 48;
      case 'xlarge':
        return 48;
      default:
        return 48;
    }
  };

  return (
    <div className={`insurance-logo ${className}`}>
      <FaShieldAlt size={getSize()} className="text-primary" />
    </div>
  );
} 