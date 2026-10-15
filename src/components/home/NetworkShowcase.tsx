import React, { useState } from 'react';
import { Network, Database, Server, Shield, Radio, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NetworkShowcase: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      id: 0,
      title: 'Distributed Core Fabric',
      metric: '0.4ms Latency',
      desc: 'High-throughput backbone routing data with sub-millisecond propagation and automated failover.',
      icon: Server,
    },
    {
      id: 1,
      title: 'Decoupled API Gateways',
      metric: '50K+ req/sec',
      desc: 'Secure ingress handling token verification, rate limiting, and unified schema validation.',
      icon: Network,
    },
    {
      id: 2,
      title: 'Fault-Tolerant Persistence',
      metric: '99.999% Durability',
      desc: 'Multi-region synchronous replication with instant point-in-time recovery and zero data loss.',
      icon: Database,
    },
    {
      id: 3,
      title: 'Zero-Trust Telemetry',
      metric: 'Real-Time Audit',
      desc: 'Continuous behavioral verification and encrypted message digests across all node edges.',
      icon: Shield,
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-darkest)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            <Radio size={12} /> CONNECTED INFRASTRUCTURE
          </div>
          <h2>
            Building Systems That Scale <span className="gradient-text">Across Complex Enterprises</span>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
            From high-throughput event meshes to resilient core software, we engineer architectures designed to operate reliably under relentless production demand.
          </p>
        </div>

        {/* Visual & Interactive Layout */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--border-default)',
            background: 'radial-gradient(ellipse at center, rgba(16, 38, 66, 0.5) 0%, rgba(4, 13, 26, 0.95) 100%)',
          }}
        >
          {/* Wireframe Geodesic Sphere Visual Asset */}
          <div style={{ position: 'relative', width: '100%', maxHeight: '540px', overflow: 'hidden' }}>
            <img
              src="/images/hero-network-sphere.jpg"
              alt="Holographic wireframe geodesic sphere representing connected enterprise infrastructure"
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'contrast(1.15) brightness(0.95)',
                display: 'block',
              }}
              loading="lazy"
            />
            {/* Gradient overlays to merge smoothly */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, var(--bg-darkest) 0%, transparent 20%, transparent 80%, var(--bg-darkest) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Interactive Technical Node Cards Overlay */}
          <div
            style={{
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              borderTop: '1px solid var(--border-subtle)',
              backgroundColor: 'rgba(7, 20, 38, 0.95)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'rgba(56, 189, 248, 0.12)' : 'rgba(16, 38, 66, 0.4)',
                    border: `1px solid ${isSelected ? 'var(--blue-electric)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    transition: 'all var(--transition-normal)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isSelected ? 'var(--blue-electric)' : 'rgba(59, 130, 246, 0.2)',
                          color: isSelected ? '#040D1A' : 'var(--blue-electric)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-white)' }}>
                        {node.title}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(56, 189, 248, 0.15)',
                        color: 'var(--blue-electric)',
                      }}
                    >
                      {node.metric}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Link to capabilities */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/services" className="btn btn-secondary">
            <span>Explore Complete Architectural Capabilities</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
