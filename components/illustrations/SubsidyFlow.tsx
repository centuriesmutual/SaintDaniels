'use client';

export default function SubsidyFlowIllustration() {
  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 0.1 }} />
        </linearGradient>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#007bff" />
        </marker>
      </defs>
      
      {/* Background */}
      <circle cx="150" cy="150" r="100" fill="url(#flowGrad)" opacity="0.2" />
      <circle cx="450" cy="450" r="120" fill="url(#flowGrad)" opacity="0.15" />
      
      {/* Advertiser box */}
      <g transform="translate(50, 100)">
        <rect x="0" y="0" width="140" height="100" rx="10" fill="#007bff" opacity="0.8" />
        <rect x="5" y="5" width="130" height="90" rx="8" fill="#ffffff" />
        <text x="70" y="35" textAnchor="middle" fontSize="14" fill="#2c3e50" fontWeight="bold">Advertisers</text>
        <rect x="15" y="45" width="110" height="8" rx="4" fill="#007bff" opacity="0.3" />
        <rect x="15" y="58" width="90" height="8" rx="4" fill="#007bff" opacity="0.3" />
        <rect x="15" y="71" width="100" height="8" rx="4" fill="#007bff" opacity="0.3" />
      </g>
      
      {/* Ad Network */}
      <g transform="translate(230, 200)">
        <circle cx="70" cy="70" r="70" fill="#007bff" opacity="0.2" />
        <circle cx="70" cy="70" r="50" fill="#ffffff" />
        <text x="70" y="50" textAnchor="middle" fontSize="16" fill="#2c3e50" fontWeight="bold">Ad Network</text>
        <circle cx="50" cy="75" r="8" fill="#007bff" opacity="0.6" />
        <circle cx="70" cy="85" r="8" fill="#007bff" opacity="0.6" />
        <circle cx="90" cy="75" r="8" fill="#007bff" opacity="0.6" />
      </g>
      
      {/* Member */}
      <g transform="translate(450, 100)">
        <circle cx="50" cy="50" r="50" fill="#28a745" opacity="0.2" />
        <circle cx="50" cy="50" r="40" fill="#ffffff" />
        <circle cx="50" cy="40" r="15" fill="#007bff" opacity="0.3" />
        <rect x="35" y="60" width="30" height="20" rx="5" fill="#007bff" opacity="0.3" />
        <text x="50" y="90" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Member</text>
      </g>
      
      {/* Wallet */}
      <g transform="translate(450, 300)">
        <rect x="0" y="0" width="120" height="80" rx="10" fill="#007bff" opacity="0.8" />
        <rect x="5" y="5" width="110" height="70" rx="8" fill="#ffffff" />
        <text x="60" y="30" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Wallet</text>
        <rect x="15" y="40" width="90" height="25" rx="5" fill="#28a745" opacity="0.2" />
        <text x="60" y="58" textAnchor="middle" fontSize="16" fill="#28a745" fontWeight="bold">$240</text>
      </g>
      
      {/* Pharmacy */}
      <g transform="translate(50, 350)">
        <rect x="0" y="0" width="140" height="120" rx="10" fill="#ffc107" opacity="0.2" />
        <rect x="5" y="5" width="130" height="110" rx="8" fill="#ffffff" />
        <text x="70" y="30" textAnchor="middle" fontSize="14" fill="#2c3e50" fontWeight="bold">Pharmacy</text>
        <rect x="20" y="45" width="100" height="15" rx="3" fill="#ffc107" opacity="0.3" />
        <rect x="20" y="65" width="100" height="15" rx="3" fill="#ffc107" opacity="0.3" />
        <rect x="20" y="85" width="100" height="15" rx="3" fill="#ffc107" opacity="0.3" />
      </g>
      
      {/* Flow arrows */}
      <path d="M 190 150 L 230 200" stroke="#007bff" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
      <path d="M 300 270 L 450 150" stroke="#28a745" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
      <path d="M 500 200 L 500 300" stroke="#007bff" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
      <path d="M 450 380 L 190 410" stroke="#ffc107" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" opacity="0.6" />
      
      {/* Stats indicators */}
      <g transform="translate(200, 450)">
        <rect x="0" y="0" width="200" height="100" rx="10" fill="#ffffff" opacity="0.9" />
        <text x="100" y="25" textAnchor="middle" fontSize="24" fill="#007bff" fontWeight="bold">18%</text>
        <text x="100" y="45" textAnchor="middle" fontSize="12" fill="#6c757d">Network Rate</text>
        <text x="100" y="70" textAnchor="middle" fontSize="20" fill="#28a745" fontWeight="bold">1.2M SKUs</text>
      </g>
    </svg>
  );
}

