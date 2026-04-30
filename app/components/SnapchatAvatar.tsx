'use client';

import React from 'react';
import { FaSnapchatGhost } from 'react-icons/fa';

interface SnapchatAvatarProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function SnapchatAvatar({ size = 'medium', className = '' }: SnapchatAvatarProps) {
  const dimension = size === 'large' ? 96 : size === 'small' ? 32 : 64;

  return (
    <div
      className={`snapchat-avatar d-flex align-items-center justify-content-center ${className}`}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FFFC00 0%, #F8E61B 100%)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <FaSnapchatGhost size={dimension * 0.55} color="#1a1a1a" />
    </div>
  );
}
