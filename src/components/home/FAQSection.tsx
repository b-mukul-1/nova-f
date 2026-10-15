import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you determine whether a system needs incremental refactoring or replacement?',
      a: 'We conduct an empirical technical discovery evaluating transaction bottlenecks, database lock contention, dependencies, and code maintainability. In the majority of enterprise settings, we implement the Strangler Fig pattern—incrementally migrating critical services while legacy systems continue to run safely—rather than high-risk, unproven total replacements.',
    },
    {
      q: 'How are scope, timelines, and deliverables structured?',
      a: 'Engagements begin with a structured architecture roadmap sprint where technical requirements, interface contracts, and acceptance criteria are documented. We sequence execution into two-week milestones with demonstrable code releases, transparent sprint backlogs, and explicit risk registries.',
    },
    {
      q: 'How does NovaTech collaborate with our in-house engineering squads?',
      a: 'We work directly alongside your internal team in shared Git repositories and CI/CD pipelines. We participate in daily standups, conduct pair programming on complex modules, document technical decisions via Architectural Decision Records (ADRs), and ensure your internal team thoroughly understands the code before delivery.',
    },
    {
      q: 'What testing and verification standards are applied across software deliverables?',
      a: 'Every deliverable includes automated unit, integration, and contract tests. We enforce strict static typing, vulnerability scans, linting rules, and repeatable Infrastructure-as-Code (Terraform / Docker) to ensure seamless environments across staging and production.',
    },
    {
      q: 'What handover and post-launch operational support is provided?',
      a: 'We deliver comprehensive system diagrams, operational runbooks, and distributed tracing setup. Depending on your operational requirements, we offer post-deployment monitoring support, scheduled architectural health audits, or complete operational handover to your engineering organization.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={12} /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2>
            Clarity On Our <span className="gradient-text">Engineering Engagements</span>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
            Practical details on scoping, collaboration models, code standards, and handover procedures.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span>{faq.q}</span>
                  <div className="faq-icon-wrapper">
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="faq-answer-panel"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
