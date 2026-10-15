import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';
import { Compass, Layers, Code, Cpu, ArrowRight } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass size={28} />;
      case 'Layers':
        return <Layers size={28} />;
      case 'Code':
        return <Code size={28} />;
      case 'Cpu':
        return <Cpu size={28} />;
      default:
        return <Layers size={28} />;
    }
  };

  return (
    <section className="section-padding section-light-contrast" id="capabilities" aria-label="Capabilities Section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div
            className="eyebrow-badge"
            style={{
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              borderColor: 'rgba(37, 99, 235, 0.3)',
              color: 'var(--blue-hover)',
              marginBottom: '1rem',
            }}
          >
            PRACTICE AREAS
          </div>
          <h2 style={{ color: 'var(--text-dark)' }}>
            Core Capabilities Built For <span style={{ color: 'var(--blue-hover)' }}>Enterprise Demands</span>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: 'var(--text-dark-muted)' }}>
            We bridge the gap between strategic business objectives and resilient engineering implementation. Each capability is modular and adaptable to your technical landscape.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="capabilities-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="capability-card tech-card">
              <div>
                <div className="capability-header">
                  <div className="capability-icon-wrap" style={{ backgroundColor: 'rgba(37, 99, 235, 0.08)', borderColor: 'rgba(37, 99, 235, 0.25)', color: 'var(--blue-hover)' }}>
                    {getIcon(service.iconName)}
                  </div>
                  <span className="capability-index" style={{ color: 'var(--text-dark-muted)' }}>
                    PHASE {service.number}
                  </span>
                </div>

                <h3 className="capability-title" style={{ color: 'var(--text-dark)' }}>
                  {service.title}
                </h3>
                <p className="capability-desc" style={{ color: 'var(--text-dark-muted)' }}>
                  {service.shortDescription}
                </p>

                <div className="capability-tags">
                  {service.keyTechnologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="capability-tag"
                      style={{
                        backgroundColor: '#E2E8F0',
                        color: '#1E293B',
                        borderColor: '#CBD5E1',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #E2E8F0' }}>
                <Link
                  to={`/services/${service.slug}`}
                  className="capability-link"
                  style={{ color: 'var(--blue-hover)' }}
                  aria-label={`View detailed breakdown for ${service.title}`}
                >
                  <span>Explore Deliverables & Scope</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Disclaimer Notice */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-dark-muted)' }}>
            * Service scopes represent standard architectural engagement models and are customized per enterprise environment.
          </span>
        </div>
      </div>
    </section>
  );
};
