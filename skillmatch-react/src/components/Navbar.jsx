import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '#hero', label: 'Beranda' },
  { href: '#features', label: 'Fitur' },
  { href: '#how-it-works', label: 'Cara Kerja' },
  { href: '#jobs', label: 'Lowongan' },
];

export default function Navbar({ onOpenSignup }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const headerRef = useRef(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 20);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (isMenuOpen && !headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', closeOnOutsideClick);
    return () => document.removeEventListener('click', closeOnOutsideClick);
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const openSignup = () => {
    setIsMenuOpen(false);
    onOpenSignup();
  };

  return (
    <header
      className={`site-header${isScrolled ? ' scrolled' : ''}`}
      id="navbar"
      ref={headerRef}
    >
      <div className="container header-container">
        <a href="#hero" className="brand-logo" aria-label="SkillMatch Home">
          <span className="logo-icon-wrapper">
            <svg
              className="logo-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="brand-name">
            Skill<span className="brand-highlight">Match</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi Utama">
          <ul className="nav-list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-action">
          <button
            type="button"
            className="btn btn-primary btn-sm open-modal-btn"
            id="nav-cta-btn"
            onClick={openSignup}
          >
            Mulai Sekarang
          </button>
        </div>

        <button
          type="button"
          className={`hamburger-btn${isMenuOpen ? ' is-active' : ''}`}
          id="hamburger-toggle"
          aria-label="Buka Menu Navigasi"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`mobile-drawer${isMenuOpen ? ' open' : ''}`} id="mobile-drawer">
        <nav className="mobile-nav" aria-label="Navigasi Mobile">
          <ul className="mobile-nav-list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-cta-wrap">
            <button
              type="button"
              className="btn btn-primary btn-full open-modal-btn"
              onClick={openSignup}
            >
              Mulai Sekarang
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
