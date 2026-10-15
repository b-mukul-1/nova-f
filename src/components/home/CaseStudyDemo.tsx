import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, AlertCircle, Workflow } from 'lucide-react';

export const CaseStudyDemo: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
          <div className="case-study-badge" style={{ marginBottom: '1rem' }}>
            <AlertCircle size={14} /> FICTIONAL DEMONSTRATION ARCHITECTURE
          </div>
          <h2>
            Demonstration Case Study: <span className="gradient-text">Project Nexus</span>
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.05rem' }}>
            A representative structural breakdown illustrating how NovaTech approaches complex legacy refactoring and distributed messaging challenges.
          </p>
        </div>

        {/* Case Study Split Card */}
        <div className="case-study-container">
          <div className="case-study-split">
            {/* Left Column: Visual Asset */}
            <div className="case-study-image-wrap">
              <img
                src="/images/case-study-nexus.jpg"
                alt="Digital operations command center screens displaying global telemetry and data routing"
                className="case-study-image"
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(7, 20, 38, 0.9)',
                  border: '1px solid var(--border-electric)',
                  color: 'var(--blue-electric)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Workflow size={12} /> ARCHITECTURAL PROTOTYPE
              </div>
            </div>

            {/* Right Column: Case Analysis */}
            <div className="case-study-content">
              {/* Challenge */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--blue-electric)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  01. The Architectural Challenge
                </span>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-primary)', marginTop: '0.35rem', lineHeight: 1.6 }}>
                  A high-concurrency enterprise system suffered from severe queue congestion and database write-lock contention during peak load. Monolithic batch synchronization delayed operational decisions by hours and introduced cascading failure risks.
                </p>
              </div>

              {/* Approach */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--blue-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  02. NovaTech Engineering Approach
                </span>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.6 }}>
                  Conducted transaction isolation profiling, isolated mission-critical workflows into decoupled domain microservices, and transitioned synchronous REST calls into an idempotent, partition-key routed Kafka event backbone.
                </p>
              </div>

              {/* Solution Concept */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  03. Target Solution Concept
                </span>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.6 }}>
                  Implemented multi-region read replicas with CQRS (Command Query Responsibility Segregation), backed by distributed dead-letter queues and automated circuit breakers that maintain uptime even during downstream outages.
                </p>
              </div>

              {/* Value & Lessons */}
              <div style={{ marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  04. Lessons & Intended Value
                </span>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.6 }}>
                  Validates that proactive architectural decoupling eliminates bottleneck cascades, reduces compute costs through elastic scaling, and gives product teams independent deployment velocity.
                </p>
              </div>

              {/* Target Benchmark Grid */}
              <div className="case-study-metrics">
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--blue-electric)' }}>
                    &lt; 50ms
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Target Message Latency
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-white)' }}>
                    Zero Data Loss
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Idempotent Event Pipeline
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="btn btn-secondary" style={{ width: 'fit-content' }}>
                  <span>Discuss a Similar Challenge</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
