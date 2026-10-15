import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { Compass, Layers, Code, Cpu, ArrowRight, CheckCircle2, Server, BarChart3, ShieldCheck } from 'lucide-react';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const ServicesPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass size={32} />;
      case 'Layers':
        return <Layers size={32} />;
      case 'Code':
        return <Code size={32} />;
      case 'Cpu':
        return <Cpu size={32} />;
      default:
        return <Layers size={32} />;
    }
  };

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      {/* Services Hero */}
      <section className="section-padding bg-grid-pattern" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1.25rem' }}>
              SERVICES & PRACTICE AREAS
            </div>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Engineered Capabilities for <span className="gradient-text">Complex Digital Ecosystems</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              From high-level architectural strategy through production software construction and systems integration, we build dependable digital foundations tailored to your operational scale.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="tech-card"
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.3fr',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--blue-electric)',
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--blue-light)' }}>
                        PRACTICE {service.number}
                      </span>
                      <h2 style={{ fontSize: '1.85rem', margin: 0 }}>{service.title}</h2>
                    </div>
                  </div>

                  <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.65 }}>
                    {service.fullOverview}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <strong style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-white)', display: 'block', marginBottom: '0.65rem' }}>
                      PROBLEM ADDRESSED:
                    </strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                      {service.problemSolved}
                    </p>
                  </div>

                  <Link to={`/services/${service.slug}`} className="btn btn-primary">
                    <span>View Full Specification & Deliverables</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Right Column: Typical Deliverables & Tech */}
                <div
                  style={{
                    backgroundColor: 'rgba(7, 20, 38, 0.65)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-white)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={18} color="var(--blue-electric)" />
                    Typical Engagement Deliverables
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                    {service.deliverables.slice(0, 4).map((del, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--blue-electric)', marginTop: '0.45rem', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem' }}>
                      KEY TECHNOLOGIES & STANDARDS:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {service.keyTechnologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            padding: '0.25rem 0.65rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'rgba(30, 52, 79, 0.5)',
                            border: '1px solid var(--border-subtle)',
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--blue-light)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Use Cases */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
              PRACTICAL USE CASES
            </div>
            <h2>
              Where NovaTech Delivers <span className="gradient-text">Immediate Impact</span>
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
              Common business situations where organizations bring us in to resolve architectural gridlock.
            </p>
          </div>

          <div className="pillars-grid">
            {[
              {
                icon: Server,
                title: 'Legacy Monolith Decomposition',
                desc: 'Transitioning brittle, high-risk monolithic systems into manageable microservices without taking down live revenue operations.',
              },
              {
                icon: BarChart3,
                title: 'High-Concurrency Scaling',
                desc: 'Eliminating database write-lock contention and memory leaks when sudden traffic bursts threaten platform stability.',
              },
              {
                icon: ShieldCheck,
                title: 'API & Multi-System Synchronization',
                desc: 'Constructing secure event brokers to sync ERPs, third-party logistics APIs, and customer portals in real time.',
              },
            ].map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div key={i} className="tech-card">
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--blue-electric)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{uc.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {uc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ on Services */}
      <FAQSection />

      {/* CTA */}
      <FinalCTA />
    </div>
  );
};
