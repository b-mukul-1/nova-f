import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, Cpu, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section bg-grid-pattern" aria-label="Hero Section">
      {/* Luminous Curved Planetary Horizon Backdrop */}
      <div className="hero-horizon-backdrop">
        <img
          src="/images/hero-horizon-arc.jpg"
          alt="Luminous curved planetary horizon with fine technological grid"
          className="hero-horizon-img"
          loading="eager"
        />
        <div className="hero-radial-glow" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content-wrapper">
          {/* Eyebrow Pill */}
          <div className="eyebrow-badge" style={{ marginBottom: '1.25rem' }}>
            ENGINEERING WHAT COMES NEXT
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Turn Complex Technology Into <span className="gradient-text">Real Business Progress.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-supporting-copy">
            Explore practical technology solutions designed around your goals, your workflows, and the way your business needs to grow.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}>
              <span>Discuss Your Project</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary" style={{ padding: '0.95rem 1.85rem', fontSize: '1rem' }}>
              <span>Explore Our Capabilities</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Metrics Floating Bar (Aligned with reference design) */}
          <div className="hero-metrics-bar">
            {/* Metric 1 */}
            <div className="metric-card">
              <div className="metric-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="metric-number">10+</div>
                <div className="metric-label">Years of Engineering Focus</div>
                <span className="metric-disclaimer">Practice Experience</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="metric-card">
              <div className="metric-icon-badge">
                <Cpu size={24} />
              </div>
              <div>
                <div className="metric-number">250+</div>
                <div className="metric-label">Solutions Architected</div>
                <span className="metric-disclaimer">Technical Engagements</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="metric-card">
              <div className="metric-icon-badge">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="metric-number">99.98%</div>
                <div className="metric-label">Target Architecture Uptime</div>
                <span className="metric-disclaimer">Benchmark Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
