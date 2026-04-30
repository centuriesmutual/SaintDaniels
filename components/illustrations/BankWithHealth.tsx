'use client';

export default function BankWithHealthIllustration() {
  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="walletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 0.1 }} />
        </linearGradient>
        <linearGradient id="dollarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#28a745', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: '#20c997', stopOpacity: 0.2 }} />
        </linearGradient>
      </defs>
      
      {/* Background circles */}
      <circle cx="100" cy="100" r="80" fill="url(#walletGrad)" opacity="0.3" />
      <circle cx="500" cy="500" r="100" fill="url(#dollarGrad)" opacity="0.2" />
      
      {/* Wallet illustration */}
      <g transform="translate(200, 150)">
        <rect x="0" y="0" width="200" height="120" rx="15" fill="#007bff" opacity="0.8" />
        <rect x="10" y="10" width="180" height="100" rx="10" fill="#ffffff" />
        <rect x="20" y="20" width="160" height="30" rx="5" fill="#007bff" opacity="0.2" />
        <circle cx="180" cy="50" r="8" fill="#007bff" />
        <rect x="20" y="60" width="160" height="40" rx="5" fill="#f8f9fa" />
        <text x="100" y="85" textAnchor="middle" fontSize="14" fill="#6c757d" fontWeight="bold">$240</text>
      </g>
      
      {/* Dollar signs flowing */}
      <g transform="translate(100, 300)">
        <circle cx="0" cy="0" r="30" fill="#28a745" opacity="0.6" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">$</text>
      </g>
      <g transform="translate(450, 250)">
        <circle cx="0" cy="0" r="25" fill="#28a745" opacity="0.5" />
        <text x="0" y="7" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">$</text>
      </g>
      <g transform="translate(350, 450)">
        <circle cx="0" cy="0" r="28" fill="#28a745" opacity="0.55" />
        <text x="0" y="8" textAnchor="middle" fontSize="22" fill="white" fontWeight="bold">$</text>
      </g>
      
      {/* Mobile phone */}
      <g transform="translate(250, 400)">
        <rect x="0" y="0" width="100" height="180" rx="20" fill="#2c3e50" />
        <rect x="8" y="8" width="84" height="164" rx="12" fill="#ffffff" />
        <rect x="15" y="20" width="70" height="50" rx="5" fill="#007bff" opacity="0.3" />
        <circle cx="50" cy="100" r="20" fill="#007bff" opacity="0.2" />
        <rect x="20" y="130" width="60" height="8" rx="4" fill="#6c757d" opacity="0.3" />
        <rect x="20" y="145" width="60" height="8" rx="4" fill="#6c757d" opacity="0.3" />
      </g>
      
      {/* Connection lines */}
      <path d="M 300 250 Q 200 300 100 300" stroke="#007bff" strokeWidth="3" fill="none" opacity="0.3" strokeDasharray="5,5" />
      <path d="M 300 250 Q 400 200 450 250" stroke="#007bff" strokeWidth="3" fill="none" opacity="0.3" strokeDasharray="5,5" />
      <path d="M 300 250 Q 350 350 350 450" stroke="#007bff" strokeWidth="3" fill="none" opacity="0.3" strokeDasharray="5,5" />
    </svg>
  );
}

