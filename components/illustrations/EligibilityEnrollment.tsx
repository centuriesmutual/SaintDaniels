'use client';

export default function EligibilityEnrollmentIllustration() {
  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="enrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#28a745', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#20c997', stopOpacity: 0.1 }} />
        </linearGradient>
        <linearGradient id="peopleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <circle cx="300" cy="300" r="280" fill="url(#enrollGrad)" opacity="0.1" />
      
      {/* People icons - diverse group */}
      <g transform="translate(150, 200)">
        <circle cx="0" cy="0" r="50" fill="url(#peopleGrad)" opacity="0.4" />
        <circle cx="0" cy="-15" r="20" fill="#007bff" opacity="0.3" />
        <path d="M -30 10 Q -30 0 0 0 Q 30 0 30 10 L 30 40 Q 30 50 0 50 Q -30 50 -30 40 Z" fill="#007bff" opacity="0.3" />
        <text x="0" y="80" textAnchor="middle" fontSize="12" fill="#2c3e50">Adult 1</text>
      </g>
      
      <g transform="translate(300, 200)">
        <circle cx="0" cy="0" r="50" fill="url(#peopleGrad)" opacity="0.4" />
        <circle cx="0" cy="-15" r="20" fill="#28a745" opacity="0.3" />
        <path d="M -30 10 Q -30 0 0 0 Q 30 0 30 10 L 30 40 Q 30 50 0 50 Q -30 50 -30 40 Z" fill="#28a745" opacity="0.3" />
        <text x="0" y="80" textAnchor="middle" fontSize="12" fill="#2c3e50">Adult 2</text>
      </g>
      
      <g transform="translate(450, 200)">
        <circle cx="0" cy="0" r="50" fill="url(#peopleGrad)" opacity="0.4" />
        <circle cx="0" cy="-15" r="20" fill="#ffc107" opacity="0.3" />
        <path d="M -30 10 Q -30 0 0 0 Q 30 0 30 10 L 30 40 Q 30 50 0 50 Q -30 50 -30 40 Z" fill="#ffc107" opacity="0.3" />
        <text x="0" y="80" textAnchor="middle" fontSize="12" fill="#2c3e50">Adult 3</text>
      </g>
      
      {/* Mobile phone - enrollment */}
      <g transform="translate(300, 400)">
        <rect x="-60" y="-100" width="120" height="200" rx="15" fill="#2c3e50" />
        <rect x="-55" y="-95" width="110" height="190" rx="12" fill="#ffffff" />
        
        {/* Form elements */}
        <text x="0" y="-70" textAnchor="middle" fontSize="14" fill="#2c3e50" fontWeight="bold">Enrollment</text>
        <rect x="-45" y="-55" width="90" height="12" rx="3" fill="#f8f9fa" />
        <text x="-40" y="-47" fontSize="9" fill="#6c757d">Name</text>
        
        <rect x="-45" y="-38" width="90" height="12" rx="3" fill="#f8f9fa" />
        <text x="-40" y="-30" fontSize="9" fill="#6c757d">Phone</text>
        
        <rect x="-45" y="-21" width="90" height="12" rx="3" fill="#f8f9fa" />
        <text x="-40" y="-13" fontSize="9" fill="#6c757d">Pharmacy</text>
        
        {/* Checkmark */}
        <circle cx="0" cy="20" r="25" fill="#28a745" opacity="0.2" />
        <path d="M -12 15 L -5 22 L 12 5" stroke="#28a745" strokeWidth="3" fill="none" strokeLinecap="round" />
        
        <text x="0" y="60" textAnchor="middle" fontSize="10" fill="#28a745" fontWeight="bold">Ready!</text>
      </g>
      
      {/* US flag indicator */}
      <g transform="translate(100, 100)">
        <rect x="0" y="0" width="80" height="50" rx="3" fill="#ffffff" />
        <rect x="0" y="0" width="80" height="20" fill="#dc3545" />
        <rect x="0" y="20" width="80" height="10" fill="#ffffff" />
        <rect x="0" y="30" width="80" height="10" fill="#dc3545" />
        <rect x="0" y="40" width="80" height="10" fill="#ffffff" />
        <rect x="0" y="0" width="30" height="20" fill="#007bff" />
        <text x="40" y="70" textAnchor="middle" fontSize="11" fill="#2c3e50">U.S. Adults</text>
      </g>
      
      {/* No insurance required badge */}
      <g transform="translate(450, 100)">
        <circle cx="0" cy="0" r="60" fill="#28a745" opacity="0.2" />
        <circle cx="0" cy="0" r="45" fill="#ffffff" />
        <text x="0" y="-15" textAnchor="middle" fontSize="11" fill="#2c3e50" fontWeight="bold">No Insurance</text>
        <text x="0" y="0" textAnchor="middle" fontSize="11" fill="#2c3e50" fontWeight="bold">Required</text>
        <circle cx="0" cy="20" r="12" fill="#28a745" opacity="0.3" />
        <text x="0" y="26" textAnchor="middle" fontSize="14" fill="#28a745">✓</text>
      </g>
      
      {/* Zero cost badge */}
      <g transform="translate(100, 450)">
        <rect x="-50" y="-30" width="100" height="60" rx="10" fill="#28a745" opacity="0.2" />
        <rect x="-45" y="-25" width="90" height="50" rx="8" fill="#ffffff" />
        <text x="0" y="-5" textAnchor="middle" fontSize="20" fill="#28a745" fontWeight="bold">$0</text>
        <text x="0" y="15" textAnchor="middle" fontSize="11" fill="#6c757d">Zero Cost</text>
      </g>
      
      {/* Clock - instant setup */}
      <g transform="translate(450, 450)">
        <circle cx="0" cy="0" r="50" fill="#007bff" opacity="0.2" />
        <circle cx="0" cy="0" r="40" fill="#ffffff" />
        <circle cx="0" cy="0" r="35" stroke="#007bff" strokeWidth="2" fill="none" opacity="0.5" />
        <line x1="0" y1="0" x2="0" y2="-20" stroke="#007bff" strokeWidth="3" />
        <line x1="0" y1="0" x2="15" y2="0" stroke="#007bff" strokeWidth="2" />
        <text x="0" y="60" textAnchor="middle" fontSize="11" fill="#2c3e50">Minutes</text>
      </g>
      
      {/* Connection lines */}
      <line x1="150" y1="200" x2="250" y2="350" stroke="#28a745" strokeWidth="3" opacity="0.3" strokeDasharray="5,5" />
      <line x1="300" y1="200" x2="300" y2="300" stroke="#28a745" strokeWidth="3" opacity="0.3" strokeDasharray="5,5" />
      <line x1="450" y1="200" x2="350" y2="350" stroke="#28a745" strokeWidth="3" opacity="0.3" strokeDasharray="5,5" />
    </svg>
  );
}

