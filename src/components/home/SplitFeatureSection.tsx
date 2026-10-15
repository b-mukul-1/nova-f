import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Cpu } from 'lucide-react';

export const SplitFeatureSection: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div className="split-feature-grid">
          {/* Left Column: Architectural Visual */}
          <div className="feature-visual-panel">
            <img
              src="/images/systems-architecture.jpg"
              alt="Modular technical architecture diagram showing microservices, API layer, and data persistence"
              className="feature-visual-img"
              loading="lazy"
            />
            {/* Live Telemetry Overlay */}
            <div className="feature-telemetry-badge">
              <div className="telemetry-item">
                <span className="telemetry-label">Ingress Routing</span>
                <span className="telemetry-val" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34D399' }} />
                  Operational
                </span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-label">Event Bus Latency</span>
                <span className="telemetry-val">0.24ms</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-label">Resilience Tier</span>
                <span className="telemetry-val">Zero-Loss</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content Narrative */}
          <div>
            <div className="eyebrow-badge" style={{ marginBottom: '1.25rem' }}>
              <Cpu size={12} /> MODULAR ARCHITECTURE
            </div>

            <h2 style={{ marginBottom: '1.25rem' }}>
              Architected for Agility, <span className="gradient-text">Engineered for Reliability</span>
            </h2>

            <p style={{ marginBottom: '1.75rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Complex enterprise ecosystems require more than just quick code fixes. We engineer modular, domain-driven architectures that isolate system boundaries, minimize single points of failure, and allow specialized engineering squads to release features with complete confidence.
            </p>

            {/* Architectural Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.25rem' }}>
              {[
                {
                  title: 'Decoupled Boundary Contracts',
                  desc: 'Clean OpenAPI and gRPC interfaces prevent breaking changes across dependent downstream services.',
                },
                {
                  title: 'Asynchronous Event-Driven Backbone',
                  desc: 'Kafka and message brokers buffer traffic spikes gracefully while maintaining eventual consistency.',
                },
                {
                  title: 'Unified Distributed Telemetry',
                  desc: 'Full visibility with OpenTelemetry tracing across all cloud boundaries and legacy subsystems.',
                },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(56, 189, 248, 0.15)',
                      color: 'var(--blue-electric)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.2rem',
                    }}
                  >
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.02rem', color: 'var(--text-white)', marginBottom: '0.2rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Discuss Your System Architecture</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
