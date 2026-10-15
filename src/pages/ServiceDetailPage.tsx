import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Workflow, Shield, Compass, Layers, Code, Cpu } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container">
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            SERVICE NOT FOUND
          </div>
          <h1>Capability Specification Not Found</h1>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            The requested service area does not exist or has been relocated.
          </p>
          <Link to="/services" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Back to All Capabilities</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = SERVICES_DATA.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  const getServiceIcon = (name: string) => {
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
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      {/* Service Header / Hero */}
      <section className="section-padding bg-grid-pattern" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                color: 'var(--blue-light)',
                marginBottom: '1.5rem',
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Capabilities</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="eyebrow-badge">
                PRACTICE AREA {service.number}
              </div>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                SPECIFICATION SPEC-NT-{service.number}
              </span>
            </div>

            <h1 style={{ maxWidth: '900px', marginBottom: '1.5rem' }}>
              {service.title}
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '820px', lineHeight: 1.7 }}>
              {service.fullOverview}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            <div style={{ padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                PRIMARY FOCUS
              </span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '0.25rem' }}>
                Architecture & Engineering
              </div>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                ENGAGEMENT MODEL
              </span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--blue-electric)', marginTop: '0.25rem' }}>
                Sprint-Based / Squad
              </div>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                DELIVERY GUARANTEE
              </span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginTop: '0.25rem' }}>
                100% Code & IaC Handover
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Being Addressed & Business Value */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Problem Solved */}
            <div className="tech-card" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#F87171' }}>
                <AlertTriangle size={24} />
                <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--text-white)' }}>
                  Problem Being Addressed
                </h3>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {service.problemSolved}
              </p>
              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(7, 20, 38, 0.6)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #F87171' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Unresolved legacy architectural friction typically compounds exponentially, tripling maintenance costs within 24 months.
                </span>
              </div>
            </div>

            {/* Business Value */}
            <div className="tech-card" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: 'var(--blue-electric)' }}>
                <Shield size={24} />
                <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--text-white)' }}>
                  Expected Business Value
                </h3>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {service.businessValue}
              </p>
              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(7, 20, 38, 0.6)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--blue-electric)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Every solution is engineered for observable uptime, reduced infrastructure spend, and zero dependency lock-in.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Deliverables */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
              ENGAGEMENT ARTIFACTS
            </div>
            <h2>
              Structured Deliverables & <span className="gradient-text">Documentation</span>
            </h2>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem' }}>
              All deliverables include functional code, tests, architectural diagrams, and comprehensive runbooks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    color: 'var(--blue-electric)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.1rem',
                  }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-white)', marginBottom: '0.25rem' }}>
                    {item}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Artifact NT-DELIV-0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Roadmap */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
              <Workflow size={12} /> EXECUTION ROADMAP
            </div>
            <h2>
              Four-Phase Delivery <span className="gradient-text">Implementation Process</span>
            </h2>
            <p style={{ marginTop: '0.75rem', fontSize: '1.05rem' }}>
              A structured lifecycle designed to eliminate operational disruptions while building high-durability systems.
            </p>
          </div>

          <div className="approach-timeline">
            {service.processSteps.map((step) => (
              <div key={step.step} className="timeline-step-card">
                <div className="timeline-node-pin">
                  {step.step}
                </div>
                <h3 className="timeline-step-name">{step.title}</h3>
                <p className="timeline-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
          <div className="container">
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="eyebrow-badge" style={{ marginBottom: '0.75rem' }}>
                CROSS-DISCIPLINARY
              </div>
              <h2>Complementary Capabilities</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {relatedServices.map((rel) => (
                <div key={rel.id} className="capability-card tech-card">
                  <div>
                    <div className="capability-header">
                      <div className="capability-icon-wrap">
                        {getServiceIcon(rel.iconName)}
                      </div>
                      <span className="capability-index">0{rel.number}</span>
                    </div>
                    <h3 className="capability-title">{rel.title}</h3>
                    <p className="capability-desc">{rel.shortDescription}</p>
                  </div>
                  <Link to={`/services/${rel.slug}`} className="capability-link">
                    <span>View Service Roadmap</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <FinalCTA />
    </div>
  );
};
