import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Shield, Clock, Terminal } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selectedServices: [] as string[],
    timeline: '1-3 months',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const serviceOptions = [
    'Technology Strategy',
    'Digital Product Development',
    'Web & Software Solutions',
    'Systems Integration',
    'Architecture Audit / Code Review',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g., name@company.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your technical goals or challenge.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters of detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionId(`NT-REQ-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      selectedServices: [],
      timeline: '1-3 months',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      {/* Hero */}
      <section className="section-padding bg-grid-pattern" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '1.25rem' }}>
              <Terminal size={12} /> INITIATE DIALOGUE
            </div>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Discuss Your <span className="gradient-text">Technology Initiative</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Connect directly with our engineering directors. We evaluate technical feasibility, architectural trade-offs, and pragmatic deployment roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Info Column */}
            <div>
              <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
                DIRECT ACCESS
              </div>
              <h2 style={{ fontSize: '1.9rem', marginBottom: '1.25rem' }}>
                Senior Technical Counsel, Zero Intermediaries
              </h2>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                When you reach out to NovaTech, your project is reviewed directly by system architects and software engineers—not commission sales representatives.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue-electric)', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-white)', marginBottom: '0.2rem' }}>
                      Architecture & Scoping Inquiries
                    </h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--blue-light)', fontFamily: 'var(--font-mono)' }}>
                      architecture@novatech-solutions.example.com
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue-electric)', flexShrink: 0 }}>
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-white)', marginBottom: '0.2rem' }}>
                      Security & Vulnerability Disclosures
                    </h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--blue-light)', fontFamily: 'var(--font-mono)' }}>
                      security@novatech-solutions.example.com
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue-electric)', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-white)', marginBottom: '0.2rem' }}>
                      Response Protocol
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Initial technical appraisal returned within 1 business day under two-way NDA.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue-electric)', marginBottom: '0.4rem', fontSize: '0.88rem', fontWeight: 600 }}>
                  <Shield size={16} />
                  Confidentiality Assured
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                  All architectural audits and data schemas shared during consultation are protected under mutual enterprise confidentiality guidelines.
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="tech-card" style={{ padding: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '2px solid #34D399',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#34D399',
                      margin: '0 auto 1.5rem auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                    Consultation Request Registered
                  </h3>

                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Thank you, <strong style={{ color: 'var(--text-white)' }}>{formData.name}</strong>. Your technical brief has been transmitted to our engineering team.
                  </p>

                  <div
                    style={{
                      backgroundColor: 'rgba(7, 20, 38, 0.7)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      color: 'var(--blue-electric)',
                      marginBottom: '2rem',
                    }}
                  >
                    CONFIRMATION ID: {submissionId}
                  </div>

                  <button onClick={handleReset} className="btn btn-secondary">
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    Project Scoping Form
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Provide details on your current infrastructure or upcoming software objectives.
                  </p>

                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-required="true"
                    />
                    {errors.name && (
                      <span style={{ fontSize: '0.8rem', color: '#F87171', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email & Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Corporate Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="form-input"
                        placeholder="elena@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-required="true"
                      />
                      {errors.email && (
                        <span style={{ fontSize: '0.8rem', color: '#F87171', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-company" className="form-label">
                        Company / Organization <span style={{ color: 'var(--text-muted)' }}>(Optional)</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        className="form-input"
                        placeholder="Apex Technologies"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Service Interest Pills */}
                  <div className="form-group">
                    <label className="form-label">
                      Practice Areas of Interest
                    </label>
                    <div className="service-pills-selector">
                      {serviceOptions.map((opt) => {
                        const isSelected = formData.selectedServices.includes(opt);
                        return (
                          <button
                            type="button"
                            key={opt}
                            className={`service-pill-btn ${isSelected ? 'selected' : ''}`}
                            onClick={() => toggleService(opt)}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div className="form-group">
                    <label htmlFor="contact-timeline" className="form-label">
                      Expected Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      className="form-input"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="immediate" style={{ background: '#0B1F3A' }}>Immediate (Next 30 Days)</option>
                      <option value="1-3 months" style={{ background: '#0B1F3A' }}>1 to 3 Months</option>
                      <option value="3-6 months" style={{ background: '#0B1F3A' }}>3 to 6 Months</option>
                      <option value="exploratory" style={{ background: '#0B1F3A' }}>Exploratory / Architecture Roadmap</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Project Scope & Technical Context *
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Outline current systems, pain points (e.g. database locking, cloud migration, new product build), and target milestones..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-required="true"
                    />
                    {errors.message && (
                      <span style={{ fontSize: '0.8rem', color: '#F87171', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.95rem' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Transmitting Telemetry...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
