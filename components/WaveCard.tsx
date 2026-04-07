'use client';

import { useState, memo } from 'react';

interface WaveCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  tags: string[];
}

const WaveCard = memo(function WaveCard({
  title,
  description,
  icon,
  gradient,
  tags,
}: WaveCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: hovered
          ? gradient
          : 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 50%, #f1f3f5 100%)',
        boxShadow: hovered
          ? '0 24px 56px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.1)'
          : '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.45s cubic-bezier(.4,0,.2,1)',
        border: hovered ? 'none' : '1px solid rgba(0,0,0,0.06)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Accent bar at top ────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: gradient,
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* ── Animated Wave Background ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: gradient,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Wave SVGs - rendered conditionally to stop animations when not hovered */}
        {hovered && (
          <>
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{ height: '120%' }}
            >
              <path
                fill="rgba(255,255,255,0.12)"
                d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  values="
                    M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                  "
                />
              </path>
            </svg>

            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{ height: '100%' }}
            >
              <path
                fill="rgba(255,255,255,0.08)"
                d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="6s"
                  repeatCount="indefinite"
                  values="
                    M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,192C672,192,768,224,864,234.7C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                  "
                />
              </path>
            </svg>

            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{ height: '80%' }}
            >
              <path
                fill="rgba(255,255,255,0.15)"
                d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,240C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="4s"
                  repeatCount="indefinite"
                  values="
                    M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,240C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,240C672,235,768,245,864,261.3C960,277,1056,299,1152,293.3C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                    M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,240C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                  "
                />
              </path>
            </svg>
          </>
        )}
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 p-8 flex flex-col items-center">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-all duration-400"
          style={{
            background: hovered
              ? 'rgba(255,255,255,0.18)'
              : 'linear-gradient(135deg, rgba(15,15,15,0.04) 0%, rgba(15,15,15,0.08) 100%)',
            border: hovered
              ? '1.5px solid rgba(255,255,255,0.3)'
              : '1px solid rgba(15,15,15,0.08)',
            transform: hovered ? 'rotate(-5deg) scale(1.08)' : 'scale(1)',
            transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
          }}
        >
          <div
            className="transition-colors duration-400"
            style={{ color: hovered ? '#ffffff' : '#0F0F0F' }}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold mb-2 text-center transition-colors duration-400"
          style={{
            color: hovered ? '#ffffff' : '#0F0F0F',
            fontFamily: 'var(--font-syne)',
            letterSpacing: '-0.02em',
            textShadow: hovered ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-center leading-relaxed mb-5 transition-colors duration-400"
          style={{
            color: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(15,15,15,0.55)',
            fontFamily: 'var(--font-body)',
            textShadow: hovered ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div
          className="flex gap-5 mt-auto pt-5 w-full"
          style={{
            borderTop: hovered
              ? '1px solid rgba(255,255,255,0.15)'
              : '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold tracking-widest pb-1 transition-all duration-400 flex-1 text-center"
              style={{
                color: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(15,15,15,0.45)',
                borderBottom: `2px solid ${hovered ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.08)'}`,
                fontFamily: 'var(--font-syne)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default WaveCard;
