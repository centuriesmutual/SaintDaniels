'use client';

export default function RewardLifecycleIllustration() {
  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="earnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#28a745', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#20c997', stopOpacity: 0.1 }} />
        </linearGradient>
        <linearGradient id="spendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0056b3', stopOpacity: 0.1 }} />
        </linearGradient>
        <linearGradient id="growGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffc107', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#fd7e14', stopOpacity: 0.1 }} />
        </linearGradient>
        <marker id="cycleArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#007bff" />
        </marker>
      </defs>
      
      {/* Background circles */}
      <circle cx="300" cy="300" r="250" fill="url(#earnGrad)" opacity="0.1" />
      
      {/* EARN section */}
      <g transform="translate(300, 100)">
        <circle cx="0" cy="0" r="80" fill="url(#earnGrad)" opacity="0.3" />
        <circle cx="0" cy="0" r="60" fill="#ffffff" />
        <rect x="-40" y="-20" width="80" height="15" rx="5" fill="#28a745" opacity="0.3" />
        <rect x="-40" y="0" width="60" height="15" rx="5" fill="#28a745" opacity="0.3" />
        <rect x="-40" y="20" width="70" height="15" rx="5" fill="#28a745" opacity="0.3" />
        <circle cx="0" cy="0" r="25" fill="#28a745" opacity="0.2" />
        <text x="0" y="8" textAnchor="middle" fontSize="20" fill="#28a745" fontWeight="bold">$</text>
        <text x="0" y="90" textAnchor="middle" fontSize="18" fill="#2c3e50" fontWeight="bold">EARN</text>
      </g>
      
      {/* SPEND section */}
      <g transform="translate(100, 400)">
        <circle cx="0" cy="0" r="80" fill="url(#spendGrad)" opacity="0.3" />
        <circle cx="0" cy="0" r="60" fill="#ffffff" />
        <rect x="-30" y="-25" width="60" height="50" rx="8" fill="#007bff" opacity="0.2" />
        <rect x="-20" y="-15" width="40" height="30" rx="5" fill="#ffffff" />
        <circle cx="0" cy="0" r="8" fill="#007bff" />
        <text x="0" y="90" textAnchor="middle" fontSize="18" fill="#2c3e50" fontWeight="bold">SPEND</text>
      </g>
      
      {/* GROW section */}
      <g transform="translate(500, 400)">
        <circle cx="0" cy="0" r="80" fill="url(#growGrad)" opacity="0.3" />
        <circle cx="0" cy="0" r="60" fill="#ffffff" />
        <path d="M -30 -20 L 0 -40 L 30 -20 L 20 10 L -20 10 Z" fill="#ffc107" opacity="0.3" />
        <circle cx="0" cy="0" r="20" fill="#ffc107" opacity="0.2" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fill="#ffc107" fontWeight="bold">↑</text>
        <text x="0" y="90" textAnchor="middle" fontSize="18" fill="#2c3e50" fontWeight="bold">GROW</text>
      </g>
      
      {/* Cycle arrows */}
      <path d="M 300 180 Q 200 300 100 400" stroke="#007bff" strokeWidth="5" fill="none" markerEnd="url(#cycleArrow)" opacity="0.5" />
      <path d="M 100 400 Q 300 450 500 400" stroke="#007bff" strokeWidth="5" fill="none" markerEnd="url(#cycleArrow)" opacity="0.5" />
      <path d="M 500 400 Q 400 300 300 180" stroke="#007bff" strokeWidth="5" fill="none" markerEnd="url(#cycleArrow)" opacity="0.5" />
      
      {/* Center wallet */}
      <g transform="translate(300, 300)">
        <rect x="-50" y="-40" width="100" height="80" rx="10" fill="#007bff" opacity="0.8" />
        <rect x="-45" y="-35" width="90" height="70" rx="8" fill="#ffffff" />
        <text x="0" y="-10" textAnchor="middle" fontSize="12" fill="#2c3e50" fontWeight="bold">Balance</text>
        <rect x="-35" y="5" width="70" height="20" rx="5" fill="#28a745" opacity="0.2" />
        <text x="0" y="20" textAnchor="middle" fontSize="16" fill="#28a745" fontWeight="bold">$240</text>
      </g>
      
      {/* Mobile phone indicator */}
      <g transform="translate(450, 200)">
        <rect x="0" y="0" width="60" height="100" rx="8" fill="#2c3e50" opacity="0.8" />
        <rect x="5" y="5" width="50" height="90" rx="6" fill="#ffffff" />
        <circle cx="30" cy="30" r="12" fill="#007bff" opacity="0.3" />
        <rect x="10" y="50" width="40" height="6" rx="3" fill="#6c757d" opacity="0.3" />
        <rect x="10" y="60" width="40" height="6" rx="3" fill="#6c757d" opacity="0.3" />
      </g>
    </svg>
  );
}

