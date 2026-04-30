'use client';

export default function AdNetworkMarketplaceIllustration() {
  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="marketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 0.1 }} />
        </linearGradient>
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#28a745', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#20c997', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <circle cx="300" cy="300" r="280" fill="url(#marketGrad)" opacity="0.1" />
      
      {/* Central marketplace hub */}
      <g transform="translate(300, 300)">
        <circle cx="0" cy="0" r="100" fill="#007bff" opacity="0.2" />
        <circle cx="0" cy="0" r="80" fill="#ffffff" />
        <text x="0" y="-20" textAnchor="middle" fontSize="16" fill="#2c3e50" fontWeight="bold">Marketplace</text>
        <circle cx="0" cy="0" r="50" fill="#007bff" opacity="0.1" />
        <circle cx="-20" cy="10" r="8" fill="#007bff" opacity="0.6" />
        <circle cx="20" cy="10" r="8" fill="#007bff" opacity="0.6" />
        <circle cx="0" cy="25" r="8" fill="#007bff" opacity="0.6" />
        <text x="0" y="60" textAnchor="middle" fontSize="12" fill="#6c757d">Verified Brands</text>
      </g>
      
      {/* Brand 1 */}
      <g transform="translate(100, 150)">
        <rect x="-50" y="-40" width="100" height="80" rx="10" fill="url(#brandGrad)" opacity="0.4" />
        <rect x="-45" y="-35" width="90" height="70" rx="8" fill="#ffffff" />
        <text x="0" y="-10" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Health Brand</text>
        <rect x="-30" y="5" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <rect x="-30" y="25" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <circle cx="0" cy="50" r="15" fill="#28a745" opacity="0.2" />
        <text x="0" y="57" textAnchor="middle" fontSize="14" fill="#28a745" fontWeight="bold">$</text>
      </g>
      
      {/* Brand 2 */}
      <g transform="translate(500, 150)">
        <rect x="-50" y="-40" width="100" height="80" rx="10" fill="url(#brandGrad)" opacity="0.4" />
        <rect x="-45" y="-35" width="90" height="70" rx="8" fill="#ffffff" />
        <text x="0" y="-10" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Health Brand</text>
        <rect x="-30" y="5" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <rect x="-30" y="25" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <circle cx="0" cy="50" r="15" fill="#28a745" opacity="0.2" />
        <text x="0" y="57" textAnchor="middle" fontSize="14" fill="#28a745" fontWeight="bold">$</text>
      </g>
      
      {/* Brand 3 */}
      <g transform="translate(100, 450)">
        <rect x="-50" y="-40" width="100" height="80" rx="10" fill="url(#brandGrad)" opacity="0.4" />
        <rect x="-45" y="-35" width="90" height="70" rx="8" fill="#ffffff" />
        <text x="0" y="-10" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Health Brand</text>
        <rect x="-30" y="5" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <rect x="-30" y="25" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <circle cx="0" cy="50" r="15" fill="#28a745" opacity="0.2" />
        <text x="0" y="57" textAnchor="middle" fontSize="14" fill="#28a745" fontWeight="bold">$</text>
      </g>
      
      {/* Brand 4 */}
      <g transform="translate(500, 450)">
        <rect x="-50" y="-40" width="100" height="80" rx="10" fill="url(#brandGrad)" opacity="0.4" />
        <rect x="-45" y="-35" width="90" height="70" rx="8" fill="#ffffff" />
        <text x="0" y="-10" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Health Brand</text>
        <rect x="-30" y="5" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <rect x="-30" y="25" width="60" height="15" rx="3" fill="#28a745" opacity="0.3" />
        <circle cx="0" cy="50" r="15" fill="#28a745" opacity="0.2" />
        <text x="0" y="57" textAnchor="middle" fontSize="14" fill="#28a745" fontWeight="bold">$</text>
      </g>
      
      {/* Connection lines to marketplace */}
      <line x1="150" y1="150" x2="250" y2="280" stroke="#007bff" strokeWidth="3" opacity="0.4" />
      <line x1="450" y1="150" x2="350" y2="280" stroke="#007bff" strokeWidth="3" opacity="0.4" />
      <line x1="150" y1="450" x2="250" y2="320" stroke="#007bff" strokeWidth="3" opacity="0.4" />
      <line x1="450" y1="450" x2="350" y2="320" stroke="#007bff" strokeWidth="3" opacity="0.4" />
      
      {/* Compliance badge */}
      <g transform="translate(300, 150)">
        <circle cx="0" cy="0" r="40" fill="#ffc107" opacity="0.2" />
        <circle cx="0" cy="0" r="30" fill="#ffffff" />
        <path d="M -15 -10 L -5 0 L 15 -15" stroke="#ffc107" strokeWidth="3" fill="none" strokeLinecap="round" />
        <text x="0" y="50" textAnchor="middle" fontSize="11" fill="#6c757d">Compliance</text>
      </g>
      
      {/* Escrow wallet */}
      <g transform="translate(300, 500)">
        <rect x="-60" y="-30" width="120" height="60" rx="10" fill="#007bff" opacity="0.3" />
        <rect x="-55" y="-25" width="110" height="50" rx="8" fill="#ffffff" />
        <text x="0" y="-5" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Escrow</text>
        <text x="0" y="15" textAnchor="middle" fontSize="14" fill="#28a745" fontWeight="bold">Guaranteed</text>
      </g>
    </svg>
  );
}

