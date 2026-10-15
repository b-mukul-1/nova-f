import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, ShieldCheck, Terminal, Award, GitBranch, Zap, Layers } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      {/* Hero */}
      <section className="section-padding bg-grid-pattern" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1.25rem' }}>
              ABOUT NOVATECH SOLUTIONS
            </div>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Engineering Systems Built for <span className="gradient-text">Enduring Enterprise Impact</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              NovaTech Solutions was founded on a singular premise: that enterprise software should be architected with the exactness of critical infrastructure, unencumbered by transient tech fads.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy & Visual */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div className="split-feature-grid">
            <div>
              <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
                <Terminal size={12} /> CORE MANIFESTO
              </div>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Disciplined Architecture Over Fleeting Trends
              </h2>
              <p style={{ marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Modern enterprise technology landscapes are burdened by bloated dependencies, premature abstraction, and technical debt accumulated from rushed iterations.
              </p>
              <p style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                We believe in lean codebases, explicit system interfaces, and strict boundary contracts. Every software component we engineer is designed to be easily read, tested, debugged, and maintained by engineers five years down the line.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--blue-electric)', marginBottom: '0.25rem' }}>
                    Zero-Debt
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Continuous refactoring and automated static verification in every sprint.
                  </div>
                </div>

                <div style={{ padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.25rem' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Ownership transparency: All repositories and IaC scripts belong to you.
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Asset */}
            <div className="feature-visual-panel">
              <img
                src="/images/tech-engineering.jpg"
                alt="Digital product engineering blueprint and high performance computing architecture"
                className="feature-visual-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={12} /> HOW WE OPERATE
            </div>
            <h2>
              The Engineering Principles <span className="gradient-text">Guiding Every Line of Code</span>
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
              These core axioms dictate our architecture reviews, code pull requests, and client collaborations.
            </p>
          </div>

          <div className="pillars-grid">
            {[
              {
                icon: Cpu,
                title: 'Empirical Decision Making',
                desc: 'We measure throughput, latency, concurrency, and memory footprint before making architectural claims. Benchmark data supersedes opinion.',
              },
              {
                icon: Layers,
                title: 'Domain Isolation',
                desc: 'Microservices and domain logic are partitioned around real business boundaries, preventing cascading data corruption and tight coupling.',
              },
              {
                icon: Zap,
                title: 'High-Velocity Automation',
                desc: 'Testing, static analysis, container building, and deployment rollbacks are 100% automated to eliminate human operational error.',
              },
              {
                icon: GitBranch,
                title: 'Pragmatic Modularity',
                desc: 'We avoid over-engineering. Code begins simple and refactors gracefully only when verified complexity requires deeper abstraction.',
              },
              {
                icon: Award,
                title: 'Security as Baseline',
                desc: 'Zero-trust architecture, automated dependency vulnerability patching, and encrypted payloads at rest and in transit are non-negotiable.',
              },
              {
                icon: Terminal,
                title: 'Total Handover Readiness',
                desc: 'Clear diagrams, API documentation, runbooks, and telemetry dashboards ensure internal teams thrive after engagement completion.',
              },
            ].map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div key={idx} className="tech-card">
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
                  <h3 style={{ fontSize: '1.18rem', marginBottom: '0.65rem' }}>{principle.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {principle.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Process Overview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
              ENGAGEMENT CADENCE
            </div>
            <h2>
              Transparent, Bi-Weekly <span className="gradient-text">Sprint Delivery</span>
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', marginBottom: '3rem' }}>
              No dark periods. Every two weeks brings demonstrable working code, updated architectural documentation, and transparent sprint retrospectives.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
              {[
                {
                  step: '01',
                  name: 'Sprint Planning & Contract Agreement',
                  desc: 'Clear acceptance criteria, user stories, and API contract interfaces agreed upon before sprint kickoff.',
                },
                {
                  step: '02',
                  name: 'Continuous Integration & Peer Review',
                  desc: 'All branches require automated test passing and dual-engineer code approval prior to merge.',
                },
                {
                  step: '03',
                  name: 'Staging Deployment & Verification',
                  desc: 'Automated deployment to ephemeral test environments mimicking production load and latency characteristics.',
                },
                {
                  step: '04',
                  name: 'Sprint Demonstration & Knowledge Sync',
                  desc: 'Live functional demonstration with enterprise stakeholders followed by architecture log updates.',
                },
              ].map((cadence) => (
                <div
                  key={cadence.step}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--blue-electric)',
                      padding: '0.35rem 0.65rem',
                      background: 'rgba(56, 189, 248, 0.1)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {cadence.step}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-white)', marginBottom: '0.35rem' }}>
                      {cadence.name}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {cadence.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Discuss Working Together</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};
