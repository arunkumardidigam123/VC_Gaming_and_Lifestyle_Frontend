import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-stack-xl px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-lowest border-t border-surface-variant">
      <div className="flex flex-col gap-stack-sm">
        <span className="font-headline-md text-headline-md font-bold text-secondary-fixed uppercase">
          VC SPORTS  &amp; LIFESTYLE PVT. LTD.
        </span>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
          © 2026 VC SPORTS  &amp; LIFESTYLE PVT. LTD., 3rd FLOOR, GAMMA BLOCK, SIGMA TECH PARK, VARTHURU KODI, BENGALURU. ALL RIGHTS RESERVED.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-4 font-label-mono text-label-mono uppercase">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-secondary-fixed"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-secondary-fixed"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-on-surface-variant hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-secondary-fixed"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-on-surface-variant hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-secondary-fixed"
        >
          Terms of Service
        </a>
        <Link
          to="/contact"
          className="text-on-surface-variant hover:text-secondary-fixed transition-colors focus:outline-none focus:ring-1 focus:ring-secondary-fixed"
        >
          Contact HQ
        </Link>
      </div>
    </footer>
  );
}
