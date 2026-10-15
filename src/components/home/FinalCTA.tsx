import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="section-padding final-cta-section" aria-label="Call to Action Section">
      {/* Radiant Atmospheric Curved Blue Arc */}
      <div className="final-cta-arc" />

      <div className="container final-cta-inner">
        <div className="eyebrow-badge" style={{ marginBottom: '1.25rem' }}>
          <Terminal size={12} /> INITIATE DIALOGUE
        </div>

        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
          Have a Technology Challenge <span className="gradient-text">Worth Solving?</span>
        </h2>

        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 2.5rem auto', lineHeight: 1.7 }}>
          Schedule an introductory architecture review with our senior engineering directors. We will analyze your system constraints and outline practical paths forward.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
            <MessageSquare size={18} />
            <span>Start a Conversation</span>
            <ArrowUpRight size={18} />
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ padding: '0.95rem 1.85rem', fontSize: '1rem' }}>
            <span>Review Capabilities First</span>
          </Link>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <span>Direct Senior Architect Access</span>
          <span>•</span>
          <span>No Obligation Feasibility Review</span>
          <span>•</span>
          <span>Strict NDA Protection</span>
        </div>
      </div>
    </section>
  );
};
