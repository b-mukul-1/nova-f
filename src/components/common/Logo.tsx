import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  clickable?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'dark',
  clickable = true,
}) => {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 34;
  const textSize = size === 'sm' ? '1.05rem' : size === 'lg' ? '1.5rem' : '1.25rem';
  const subtextSize = size === 'sm' ? '0.55rem' : size === 'lg' ? '0.75rem' : '0.62rem';

  const logoContent = (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        userSelect: 'none',
      }}
    >
      {/* Precision Geometric SVG Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="logo-grad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Blueprint Framing */}
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="12"
          fill={variant === 'dark' ? '#071426' : '#FFFFFF'}
          stroke={variant === 'dark' ? '#243A55' : '#CBD5E1'}
          strokeWidth="1.5"
        />

        {/* Diagonal node lines */}
        <line x1="16" y1="48" x2="48" y2="16" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="16" y1="16" x2="48" y2="48" stroke="url(#logo-grad)" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="16" y1="16" x2="16" y2="48" stroke="url(#logo-grad)" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="48" y1="16" x2="48" y2="48" stroke="url(#logo-grad)" strokeWidth="4.5" strokeLinecap="round" />

        {/* Active System Nodes */}
        <circle cx="16" cy="16" r="4.5" fill="#38BDF8" filter="url(#logo-glow)" />
        <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
        <circle cx="48" cy="48" r="4.5" fill="#38BDF8" filter="url(#logo-glow)" />
        <circle cx="48" cy="48" r="2" fill="#FFFFFF" />
        <circle cx="32" cy="32" r="3" fill="#60A5FA" />
      </svg>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: textSize,
            letterSpacing: '-0.02em',
            color: variant === 'dark' ? '#FFFFFF' : '#0F172A',
          }}
        >
          NOVATECH
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: subtextSize,
            fontWeight: 600,
            letterSpacing: '0.22em',
            color: 'var(--blue-electric)',
            marginTop: '0.15rem',
            textTransform: 'uppercase',
          }}
        >
          SOLUTIONS
        </span>
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex' }}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
