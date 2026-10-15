import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Lock, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      {/* Hero */}
      <section className="section-padding bg-grid-pattern" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <Link
              to="/"
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
              <span>Return to Homepage</span>
            </Link>

            <div className="eyebrow-badge" style={{ marginBottom: '1.25rem' }}>
              LEGAL DOCUMENTATION
            </div>

            <h1 style={{ marginBottom: '1.25rem' }}>
              Privacy Policy & <span className="gradient-text">Data Governance</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Standard operational procedures regarding technical telemetry, client correspondence, and enterprise data security.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            {/* Required Placeholder Alert */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                marginBottom: '3rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
              }}
            >
              <ShieldAlert size={24} color="#FBBF24" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FBBF24', marginBottom: '0.4rem' }}>
                  Compliance Notice: Structural Legal Placeholder
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                  This privacy policy is a structured placeholder designed for architectural demonstration purposes. Before production deployment by NovaTech Solutions or any operating entity, this policy must be reviewed, customized, and ratified by certified legal counsel to align with applicable territorial laws (including GDPR, CCPA, and statutory regulations).
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="tech-card" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lock size={18} color="var(--blue-electric)" />
                  1. Information We Collect
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  We collect information strictly necessary to provide engineering consultations and enterprise software evaluations. This includes contact information submitted through our project scoping forms (name, business email, organization name, project specifications) and basic technical access telemetry (IP addresses, user agent strings, and request timestamps) to protect server integrity.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} color="var(--blue-electric)" />
                  2. Use of Collected Data
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Information submitted to NovaTech Solutions is utilized exclusively to:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <li>Assess enterprise software architecture requirements and draft project roadmaps.</li>
                  <li>Schedule technical consultations between prospective clients and engineering directors.</li>
                  <li>Maintain application security, detect malicious ingress attempts, and audit infrastructure health.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  3. Non-Disclosure & Confidentiality
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  We treat all system architecture blueprints, proprietary code samples, and business constraints disclosed during technical discovery under strict mutual non-disclosure obligations. We never sell, monetize, or distribute client technical records to third-party data brokers or advertising networks.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  4. Data Security & Storage Controls
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  All data in transit is encrypted using TLS 1.3 cryptographic protocols. Stored data is maintained within hardened multi-region cloud databases featuring role-based access control (RBAC), multi-factor authentication, and continuous automated vulnerability scanning.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  5. Designated Privacy Contacts
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  For inquiries regarding data protection policies, request for record erasure, or enterprise audit compliance questions, direct correspondence to:
                </p>
                <div style={{ marginTop: '0.75rem', padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--blue-light)' }}>
                  <div>NovaTech Solutions Compliance & Data Governance</div>
                  <div>Email: privacy@novatech-solutions.example.com</div>
                  <div>Reference Protocol: NT-SEC-PRIV-2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
