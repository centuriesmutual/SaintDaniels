'use client';

export default function PrivacyProtectionIllustration() {
  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 0.1 }} />
        </linearGradient>
        <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#28a745', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#20c997', stopOpacity: 0.1 }} />
        </linearGradient>
        <radialGradient id="encryptGrad" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: '#6c757d', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: '#6c757d', stopOpacity: 0.1 }} />
        </radialGradient>
      </defs>
      
      {/* Background */}
      <circle cx="300" cy="300" r="280" fill="url(#shieldGrad)" opacity="0.1" />
      
      {/* Central shield */}
      <g transform="translate(300, 250)">
        <path d="M 0 -80 L -60 -40 L -60 40 L 0 80 L 60 40 L 60 -40 Z" fill="url(#shieldGrad)" opacity="0.4" />
        <path d="M 0 -70 L -50 -35 L -50 35 L 0 70 L 50 35 L 50 -35 Z" fill="#ffffff" />
        <path d="M 0 -60 L -40 -30 L -40 30 L 0 60 L 40 30 L 40 -30 Z" fill="#007bff" opacity="0.2" />
        <circle cx="0" cy="0" r="25" fill="#007bff" opacity="0.3" />
        <text x="0" y="8" textAnchor="middle" fontSize="20" fill="#007bff" fontWeight="bold">✓</text>
        <text x="0" y="100" textAnchor="middle" fontSize="16" fill="#2c3e50" fontWeight="bold">Privacy First</text>
      </g>
      
      {/* Lock icon */}
      <g transform="translate(150, 150)">
        <rect x="-30" y="-20" width="60" height="40" rx="5" fill="url(#lockGrad)" opacity="0.4" />
        <rect x="-25" y="-15" width="50" height="30" rx="4" fill="#ffffff" />
        <path d="M -20 -30 Q -20 -40 0 -40 Q 20 -40 20 -30 L 20 -20 L -20 -20 Z" fill="#28a745" opacity="0.5" />
        <circle cx="0" cy="-5" r="8" fill="#28a745" opacity="0.3" />
        <text x="0" y="50" textAnchor="middle" fontSize="12" fill="#2c3e50">HIPAA-Safe</text>
      </g>
      
      {/* Eye icon - transparency */}
      <g transform="translate(450, 150)">
        <ellipse cx="0" cy="0" rx="40" ry="25" fill="url(#lockGrad)" opacity="0.3" />
        <ellipse cx="0" cy="0" rx="30" ry="20" fill="#ffffff" />
        <circle cx="0" cy="0" r="15" fill="#007bff" opacity="0.3" />
        <circle cx="0" cy="0" r="8" fill="#2c3e50" />
        <text x="0" y="50" textAnchor="middle" fontSize="12" fill="#2c3e50">Transparency</text>
      </g>
      
      {/* Encrypted data */}
      <g transform="translate(150, 400)">
        <rect x="-50" y="-40" width="100" height="80" rx="10" fill="#6c757d" opacity="0.2" />
        <rect x="-45" y="-35" width="90" height="70" rx="8" fill="#ffffff" />
        <text x="0" y="-15" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Health Data</text>
        <text x="-30" y="5" fontSize="10" fill="#6c757d" fontFamily="monospace">••••••••</text>
        <text x="-30" y="20" fontSize="10" fill="#6c757d" fontFamily="monospace">••••••••</text>
        <text x="-30" y="35" fontSize="10" fill="#6c757d" fontFamily="monospace">••••••••</text>
        <circle cx="0" cy="50" r="15" fill="#28a745" opacity="0.3" />
        <text x="0" y="57" textAnchor="middle" fontSize="12" fill="#28a745">🔒</text>
      </g>
      
      {/* Anonymized data */}
      <g transform="translate(450, 400)">
        <rect x="-50" y="-40" width="100" height="80" rx="10" fill="#28a745" opacity="0.2" />
        <rect x="-45" y="-35" width="90" height="70" rx="8" fill="#ffffff" />
        <text x="0" y="-15" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Anonymized</text>
        <circle cx="-25" cy="5" r="8" fill="#007bff" opacity="0.3" />
        <circle cx="0" cy="5" r="8" fill="#28a745" opacity="0.3" />
        <circle cx="25" cy="5" r="8" fill="#ffc107" opacity="0.3" />
        <text x="-25" y="25" textAnchor="middle" fontSize="8" fill="#6c757d">ID: ###</text>
        <text x="0" y="25" textAnchor="middle" fontSize="8" fill="#6c757d">ID: ###</text>
        <text x="25" y="25" textAnchor="middle" fontSize="8" fill="#6c757d">ID: ###</text>
        <text x="0" y="50" textAnchor="middle" fontSize="10" fill="#28a745" fontWeight="bold">Safe</text>
      </g>
      
      {/* No data sharing indicator */}
      <g transform="translate(300, 450)">
        <circle cx="0" cy="0" r="50" fill="#dc3545" opacity="0.1" />
        <circle cx="0" cy="0" r="40" fill="#ffffff" />
        <text x="0" y="-10" textAnchor="middle" fontSize="14" fill="#dc3545" fontWeight="bold">No Sale</text>
        <text x="0" y="5" textAnchor="middle" fontSize="14" fill="#dc3545" fontWeight="bold">No Share</text>
        <line x1="-30" y1="15" x2="30" y2="15" stroke="#dc3545" strokeWidth="2" />
      </g>
      
      {/* Protection rays */}
      <g transform="translate(300, 250)">
        <line x1="0" y1="-80" x2="0" y2="-120" stroke="#007bff" strokeWidth="3" opacity="0.3" />
        <line x1="-60" y1="-40" x2="-100" y2="-60" stroke="#007bff" strokeWidth="3" opacity="0.3" />
        <line x1="60" y1="-40" x2="100" y2="-60" stroke="#007bff" strokeWidth="3" opacity="0.3" />
        <line x1="-60" y1="40" x2="-100" y2="60" stroke="#007bff" strokeWidth="3" opacity="0.3" />
        <line x1="60" y1="40" x2="100" y2="60" stroke="#007bff" strokeWidth="3" opacity="0.3" />
        <line x1="0" y1="80" x2="0" y2="120" stroke="#007bff" strokeWidth="3" opacity="0.3" />
      </g>
      
      {/* Ad transparency badge */}
      <g transform="translate(300, 100)">
        <rect x="-60" y="-25" width="120" height="50" rx="10" fill="#007bff" opacity="0.2" />
        <rect x="-55" y="-20" width="110" height="40" rx="8" fill="#ffffff" />
        <text x="0" y="5" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Full Ad Transparency</text>
        <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#6c757d">See what funds what</text>
      </g>
    </svg>
  );
}

