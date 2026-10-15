import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Mark */}
        <Logo size="md" variant="dark" />

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/contact" className="btn btn-primary nav-cta-btn">
            <span>Discuss a Project</span>
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-drawer-header">
          <Logo size="sm" variant="dark" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: 'var(--text-white)', padding: '0.25rem' }}
          >
            <X size={22} />
          </button>
        </div>

        <nav aria-label="Mobile Navigation">
          <ul className="mobile-nav-links">
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                <span>Home</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>01</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                <span>About</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>02</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                <span>Services</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>03</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                <span>Contact</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>04</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="btn btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span>Discuss a Project</span>
            <ArrowUpRight size={16} />
          </Link>
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Engineering What Comes Next
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
