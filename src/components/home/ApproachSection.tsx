import React, { useState } from 'react';
import { Search, Compass, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ApproachSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      num: '01',
      name: 'Understand',
      subtitle: 'Discovery & System Decomposition',
      icon: Search,
      deliverables: ['Legacy Architecture Audit', 'Data Dependency Map', 'Constraints & Security Risk Log'],
      description: 'We scrutinize existing infrastructure, performance bottlenecks, and business KPIs before proposing changes. No assumptions; only empirical system analysis.',
    },
    {
      num: '02',
      name: 'Architect',
      subtitle: 'Modular Blueprint & Governance',
      icon: Compass,
      deliverables: ['System Boundary Schema', 'Cloud Infrastructure as Code', 'API Contract Definitions'],
      description: 'Engineering resilient technical topologies with decoupled domains. We balance latency, consistency, maintainability, and operational cost upfront.',
    },
    {
      num: '03',
      name: 'Deliver',
      subtitle: 'Rigorous Sprint Implementation',
      icon: CheckCircle2,
      deliverables: ['Automated CI/CD Pipelines', 'Strict Typing & Unit/E2E Coverage', 'Zero-Downtime Migration Cutover'],
      description: 'High-velocity, disciplined software engineering. Code is continuously integrated, automatically verified through comprehensive tests, and deployed via canary releases.',
    },
    {
      num: '04',
      name: 'Evolve',
      subtitle: 'Telemetry & Adaptive Scaling',
      icon: RefreshCw,
      deliverables: ['Real-Time Distributed Tracing', 'Automated Health Alerts', 'Iterative Performance Profiling'],
      description: 'Software is a living organism. We instrument rich telemetry, monitor production SLAs, and adapt architectures as concurrency and data volume surge.',
    },
  ];

  return (
    <section className="section-padding bg-grid-pattern" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem auto' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            ENGINEERING METHODOLOGY
          </div>
          <h2>
            Four Disciplined Stages <span className="gradient-text">From Audit to Evolution</span>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
            Technology success is not an accident—it is the direct outcome of systematic decomposition, transparent trade-off analysis, and disciplined delivery.
          </p>
        </div>

        {/* 4 Connected Timeline Cards */}
        <div className="approach-timeline">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.num}
                className="timeline-step-card"
                onClick={() => setActiveStage(idx)}
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--blue-electric)' : 'var(--border-default)',
                  boxShadow: isSelected ? '0 8px 30px rgba(56, 189, 248, 0.2)' : 'none',
                }}
              >
                <div
                  className="timeline-node-pin"
                  style={{
                    backgroundColor: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'var(--bg-primary)',
                    borderColor: isSelected ? 'var(--blue-electric)' : 'var(--border-default)',
                  }}
                >
                  {stage.num}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Icon size={18} color="var(--blue-electric)" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--blue-light)', textTransform: 'uppercase' }}>
                    STAGE {stage.num}
                  </span>
                </div>

                <h3 className="timeline-step-name">{stage.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>
                  {stage.subtitle}
                </p>
                <p className="timeline-step-desc">{stage.description}</p>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    KEY OUTPUTS:
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {stage.deliverables.map((item, dIdx) => (
                      <li key={dIdx} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--blue-electric)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Process Link */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <Link to="/about" className="btn btn-secondary">
            <span>Learn More About Our Engineering Principles</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
