import React from 'react';
import { Target, Wrench, GitFork, Users, FileCode2 } from 'lucide-react';

export const WhyNovaTech: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Clear Problem Definition',
      desc: 'We invest upfront time isolating core operational constraints rather than rushing to patch superficial symptoms with ephemeral code.',
    },
    {
      icon: Wrench,
      title: 'Fit-for-Purpose Solutions',
      desc: 'We never force trendy frameworks onto legacy infrastructure. Every stack choice is vetted against performance, security, and team capability.',
    },
    {
      icon: GitFork,
      title: 'Maintainable Implementation',
      desc: 'We build systems with high automated test coverage, strict typing, and clean abstractions that your in-house engineering team can own with confidence.',
    },
    {
      icon: Users,
      title: 'Transparent Collaboration',
      desc: 'Direct pair-programming, open Git repositories, unvarnished progress metrics, and regular sprint reviews without commercial posturing.',
    },
    {
      icon: FileCode2,
      title: 'Thoughtful Technical Decisions',
      desc: 'Every design choice is captured in Architectural Decision Records (ADRs) so future teams understand exact rationale, constraints, and trade-offs.',
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            ENGINEERING PRINCIPLES
          </div>
          <h2>
            Why Organizations Trust <span className="gradient-text">Our Architectural Approach</span>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
            Pragmatic engineering focused on durability and business outcomes, without hype or opaque consulting layers.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  <Icon size={22} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
