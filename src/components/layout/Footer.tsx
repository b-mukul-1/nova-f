import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowUpRight, ShieldCheck, Terminal, Globe } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {

  return (
    <footer className="site-footer">
      {/* Background Watermark Typography */}
      <div className="watermark-banner" aria-hidden="true">
        NOVATECH
      </div>

      <div className="container">
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Logo size="md" variant="dark" />
            <p className="footer-desc">
              Engineering what comes next. Turn complex technology into real business progress through enterprise architecture, digital product development, and systems integration.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              <span className="eyebrow-badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
                <Terminal size={12} /> System Status: Operational
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-nav-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About NovaTech</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services & Capabilities</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact & Consultation</Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Services Columns */}
          <div>
            <h4 className="footer-nav-title">Capabilities</h4>
            <ul className="footer-links-list">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="footer-link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="footer-nav-title">Consultation</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Ready to evaluate an enterprise technology challenge or roadmap your system architecture?
            </p>
            <Link to="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'space-between' }}>
              <span>Start Dialogue</span>
              <ArrowUpRight size={16} />
            </Link>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={14} color="var(--blue-electric)" />
              <span>Enterprise Confidentiality</span>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div style={{
          backgroundColor: 'rgba(16, 38, 66, 0.4)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          marginBottom: '2.5rem',
          position: 'relative',
          zIndex: 2,
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--blue-light)' }}>Project Notice:</strong> NovaTech Solutions website is an enterprise technical design showcase. Service categories, architectural models, and demonstration studies are representative structural examples intended to show capabilities. No factual business claims or real client data are asserted.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {CURRENT_YEAR} NovaTech Solutions. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Privacy & Legal Notice
            </Link>
            <span style={{ color: 'var(--border-default)' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <Globe size={14} />
              <span>Global Enterprise Standards</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
