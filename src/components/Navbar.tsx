import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Our Brands', to: '/brands' },
  { label: 'Vision', to: '/vision' },
  { label: 'Founder', to: '/founder' },
  { label: 'Updates', to: '/updates' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [activeCTA, setActiveCTA] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30">
      <Link
        to="/"
        className="flex items-center gap-3 font-headline-md text-headline-md font-extrabold tracking-tighter text-on-surface uppercase hover:text-secondary-fixed transition-colors duration-300"
      >
        <img
          src="/images/logo.png"
          alt="VC Sports & Lifestyle Logo"
          className="h-16 w-auto object-contain"
        />
        <span className="hidden sm:inline">VC SPORTS &amp; LIFE STYLE PVT. LTD.</span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-gutter font-label-mono text-label-mono uppercase">
        {navLinks.map(({ label, to }) => {
          const isActive = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={
                isActive
                  ? 'text-secondary-fixed border-b-2 border-secondary-fixed pb-1'
                  : 'text-on-surface-variant hover:text-secondary-fixed transition-colors duration-300'
              }
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 items-center font-label-mono text-label-mono uppercase">
        <button
          onClick={() => setActiveCTA(activeCTA === 'smartsportz' ? null : 'smartsportz')}
          className={`hidden md:block px-4 py-2 border transition-all duration-300 font-bold ${activeCTA === 'smartsportz'
              ? 'bg-secondary-fixed border-secondary-fixed text-black'
              : 'border-white/20 text-on-surface hover:bg-secondary-fixed hover:border-secondary-fixed hover:text-black'
            }`}
        >
          SMARTSPORTZ.IN
        </button>
        <button
          onClick={() => setActiveCTA(activeCTA === 'vibe-crew' ? null : 'vibe-crew')}
          className={`px-4 py-2 border transition-all duration-300 font-bold ${activeCTA === 'vibe-crew'
              ? 'bg-secondary-fixed border-secondary-fixed text-black'
              : 'border-white/20 text-on-surface hover:bg-secondary-fixed hover:border-secondary-fixed hover:text-black'
            }`}
        >
          VIBE CREW
        </button>
      </div>
    </nav>
  );
}
