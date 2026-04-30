'use client';

export default function PharmacySpendingIllustration() {
  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="pharmacyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffc107', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#fd7e14', stopOpacity: 0.1 }} />
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 0.2 }} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <circle cx="300" cy="300" r="280" fill="url(#pharmacyGrad)" opacity="0.1" />
      
      {/* Pharmacy building */}
      <g transform="translate(150, 200)">
        <rect x="0" y="0" width="200" height="250" rx="10" fill="#ffc107" opacity="0.2" />
        <rect x="10" y="10" width="180" height="230" rx="8" fill="#ffffff" />
        <rect x="20" y="20" width="160" height="40" rx="5" fill="#ffc107" opacity="0.3" />
        <text x="100" y="45" textAnchor="middle" fontSize="16" fill="#2c3e50" fontWeight="bold">PHARMACY</text>
        
        {/* Shelves */}
        <rect x="30" y="80" width="140" height="15" rx="3" fill="#6c757d" opacity="0.2" />
        <rect x="30" y="110" width="140" height="15" rx="3" fill="#6c757d" opacity="0.2" />
        <rect x="30" y="140" width="140" height="15" rx="3" fill="#6c757d" opacity="0.2" />
        
        {/* Products on shelves */}
        <rect x="40" y="75" width="25" height="25" rx="3" fill="#007bff" opacity="0.3" />
        <rect x="75" y="75" width="25" height="25" rx="3" fill="#28a745" opacity="0.3" />
        <rect x="110" y="75" width="25" height="25" rx="3" fill="#dc3545" opacity="0.3" />
        <rect x="145" y="75" width="25" height="25" rx="3" fill="#ffc107" opacity="0.3" />
        
        <rect x="40" y="105" width="25" height="25" rx="3" fill="#007bff" opacity="0.3" />
        <rect x="75" y="105" width="25" height="25" rx="3" fill="#28a745" opacity="0.3" />
        <rect x="110" y="105" width="25" height="25" rx="3" fill="#dc3545" opacity="0.3" />
        
        <rect x="40" y="135" width="25" height="25" rx="3" fill="#007bff" opacity="0.3" />
        <rect x="75" y="135" width="25" height="25" rx="3" fill="#28a745" opacity="0.3" />
        
        {/* Counter */}
        <rect x="20" y="200" width="160" height="30" rx="5" fill="#6c757d" opacity="0.3" />
        <circle cx="170" cy="215" r="8" fill="#007bff" opacity="0.5" />
      </g>
      
      {/* Mobile phone with virtual card */}
      <g transform="translate(400, 250)">
        <rect x="0" y="0" width="120" height="200" rx="15" fill="#2c3e50" />
        <rect x="5" y="5" width="110" height="190" rx="12" fill="#ffffff" />
        
        {/* Card display */}
        <rect x="15" y="30" width="90" height="60" rx="8" fill="url(#cardGrad)" />
        <rect x="20" y="35" width="80" height="50" rx="6" fill="#ffffff" />
        <rect x="25" y="40" width="70" height="8" rx="2" fill="#007bff" opacity="0.3" />
        <circle cx="85" cy="60" r="5" fill="#007bff" />
        <text x="25" y="75" fontSize="10" fill="#2c3e50">Virtual Card</text>
        <text x="25" y="88" fontSize="12" fill="#28a745" fontWeight="bold">$240.00</text>
        
        {/* App UI elements */}
        <rect x="20" y="110" width="80" height="8" rx="2" fill="#6c757d" opacity="0.3" />
        <rect x="20" y="125" width="60" height="8" rx="2" fill="#6c757d" opacity="0.3" />
        <circle cx="30" cy="150" r="15" fill="#007bff" opacity="0.2" />
        <text x="30" y="156" textAnchor="middle" fontSize="16" fill="#007bff">✓</text>
      </g>
      
      {/* Payment flow arrow */}
      <path d="M 350 275 Q 300 300 250 275" stroke="#28a745" strokeWidth="6" fill="none" opacity="0.6" markerEnd="url(#paymentArrow)" />
      <defs>
        <marker id="paymentArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#28a745" />
        </marker>
      </defs>
      
      {/* Receipt */}
      <g transform="translate(400, 100)">
        <rect x="0" y="0" width="150" height="120" rx="5" fill="#ffffff" />
        <rect x="5" y="5" width="140" height="110" rx="4" fill="#f8f9fa" />
        <text x="75" y="25" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Receipt</text>
        <line x1="10" y1="35" x2="140" y2="35" stroke="#6c757d" strokeWidth="1" opacity="0.3" />
        <text x="10" y="55" fontSize="10" fill="#6c757d">Prescription: $45.00</text>
        <text x="10" y="70" fontSize="10" fill="#6c757d">OTC Items: $15.00</text>
        <text x="10" y="85" fontSize="10" fill="#6c757d">Funded by: Brand A</text>
        <line x1="10" y1="95" x2="140" y2="95" stroke="#6c757d" strokeWidth="1" opacity="0.3" />
        <text x="10" y="110" fontSize="12" fill="#28a745" fontWeight="bold">Balance: $180.00</text>
      </g>
      
      {/* FSA/HSA indicator */}
      <g transform="translate(150, 100)">
        <rect x="-40" y="-25" width="80" height="50" rx="8" fill="#28a745" opacity="0.2" />
        <rect x="-35" y="-20" width="70" height="40" rx="6" fill="#ffffff" />
        <text x="0" y="5" textAnchor="middle" fontSize="11" fill="#2c3e50" fontWeight="bold">FSA/HSA</text>
        <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#6c757d">Stacking</text>
      </g>
      
      {/* Settlement indicator */}
      <g transform="translate(450, 450)">
        <circle cx="0" cy="0" r="50" fill="#28a745" opacity="0.2" />
        <circle cx="0" cy="0" r="35" fill="#ffffff" />
        <text x="0" y="-5" textAnchor="middle" fontSize="12" fill="#28a745" fontWeight="bold">Same-Day</text>
        <text x="0" y="10" textAnchor="middle" fontSize="12" fill="#28a745" fontWeight="bold">Settlement</text>
        <circle cx="0" cy="25" r="8" fill="#28a745" opacity="0.5" />
        <text x="0" y="29" textAnchor="middle" fontSize="12" fill="white">✓</text>
      </g>
    </svg>
  );
}

