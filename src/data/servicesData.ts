export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  problemSolved: string;
  deliverables: string[];
  processSteps: { step: string; title: string; description: string }[];
  keyTechnologies: string[];
  businessValue: string;
  iconName: string;
  relatedServiceSlugs: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'tech-strategy',
    slug: 'technology-strategy',
    number: '01',
    title: 'Technology Strategy',
    shortDescription: 'Aligning technical investments with enterprise business targets through pragmatic architecture roadmaps and modernization audits.',
    fullOverview: 'NovaTech provides comprehensive technology strategy advisory for organizations navigating technical transformation. We evaluate existing systems, identify modernization roadblocks, and craft actionable, phased blueprints that eliminate technical debt while accelerating business agility.',
    problemSolved: 'Legacy architectural debt, fragmented infrastructure investments, and misaligned engineering priorities that slow innovation and increase operational overhead.',
    deliverables: [
      '3-Year Enterprise Technology Architecture Roadmap',
      'Architecture Health, Security & Technical Debt Audit',
      'Cloud Migration & Infrastructure Modernization Plan',
      'API-First Integration Strategy & Governance Framework',
      'Vendor Assessment & Technical Due Diligence Matrix',
      'Engineering Operating Model & Delivery Optimization Plan'
    ],
    processSteps: [
      { step: '01', title: 'Landscape Discovery', description: 'Deep-dive audit into existing codebases, infrastructure dependencies, operational costs, and business goals.' },
      { step: '02', title: 'Target Architecture', description: 'Designing future-state modular architecture with clear trade-off analysis and risk mitigation.' },
      { step: '03', title: 'Roadmap & Sequencing', description: 'Prioritizing incremental initiatives to deliver immediate value without disrupting production operations.' },
      { step: '04', title: 'Governance & Alignment', description: 'Establishing clear architectural guardrails, engineering standards, and performance KPIs.' }
    ],
    keyTechnologies: ['Enterprise Architecture', 'Cloud Governance', 'TOGAF', 'Cost Optimization', 'Disaster Recovery', 'Security Frameworks'],
    businessValue: 'Mitigates millions in unneeded legacy maintenance while establishing scalable technological foundations for rapid commercial expansion.',
    iconName: 'Compass',
    relatedServiceSlugs: ['systems-integration', 'web-software-solutions']
  },
  {
    id: 'product-dev',
    slug: 'digital-product-development',
    number: '02',
    title: 'Digital Product Development',
    shortDescription: 'Engineering resilient, scalable digital products from conceptual prototypes through production-grade release.',
    fullOverview: 'We design and construct digital products engineered for long-term maintainability and exceptional user satisfaction. By coupling rigorous software engineering practices with human-centered product design, we turn complex technical requirements into intuitive platforms.',
    problemSolved: 'Slow development velocity, brittle user interfaces, and digital products that fail to deliver expected business outcomes due to poor architectural underpinnings.',
    deliverables: [
      'Comprehensive Design System & Component Library',
      'Full-Stack Web & Progressive Application Suites',
      'Automated End-to-End Testing Suites & CI/CD Pipelines',
      'Modular RESTful & GraphQL Service Endpoints',
      'Technical Product Documentation & Code Quality Reports',
      'Zero-Downtime Deployment & Observability Configuration'
    ],
    processSteps: [
      { step: '01', title: 'Product Definition', description: 'Mapping user journeys, defining core requirements, and establishing architectural criteria.' },
      { step: '02', title: 'Rapid Prototyping', description: 'Validating usability and technical feasibility through high-fidelity functional prototypes.' },
      { step: '03', title: 'Iterative Engineering', description: 'Building resilient components with automated test coverage, strict typing, and clean separation of concerns.' },
      { step: '04', title: 'Production Hardening', description: 'Stress-testing concurrency, security auditing, and deploying with automated rollback safeguards.' }
    ],
    keyTechnologies: ['React', 'TypeScript', 'Node.js', 'Go', 'GraphQL', 'Next.js', 'Docker', 'Kubernetes'],
    businessValue: 'Shortens time-to-market by 40% while ensuring products scale smoothly under heavy enterprise workloads.',
    iconName: 'Layers',
    relatedServiceSlugs: ['technology-strategy', 'web-software-solutions']
  },
  {
    id: 'software-solutions',
    slug: 'web-software-solutions',
    number: '03',
    title: 'Web and Software Solutions',
    shortDescription: 'Constructing robust web platforms, high-throughput portals, and custom software systems tailored to exact business workflows.',
    fullOverview: 'NovaTech constructs custom software systems that solve specialized operational bottlenecks. Rather than forcing your business into rigid generic software, we engineer purpose-built tools that fit directly into your operational fabric with high performance and bank-grade security.',
    problemSolved: 'Inefficiencies caused by off-the-shelf software limitations, unscalable monolithic apps, and insecure customer-facing interfaces.',
    deliverables: [
      'Bespoke Enterprise Web Portals & Dashboards',
      'High-Throughput Microservice Backends & APIs',
      'Real-Time Telemetry & Data Visualization Suites',
      'Role-Based Access Control (RBAC) & SSO Integration',
      'Multi-Tenant SaaS Infrastructure & Database Partitioning',
      'Comprehensive SLA & Maintenance Documentation'
    ],
    processSteps: [
      { step: '01', title: 'Workflow Mapping', description: 'Analyzing specific organizational processes, transaction patterns, and user personas.' },
      { step: '02', title: 'Interface & Logic Design', description: 'Crafting responsive, high-performance UI paired with clean domain-driven backend models.' },
      { step: '03', title: 'Engineered Construction', description: 'Developing modular, maintainable microservices with rigorous automated regression tests.' },
      { step: '04', title: 'Performance Tuning', description: 'Profiling database query plans, CDN caching, and edge distribution for sub-second latency.' }
    ],
    keyTechnologies: ['React', 'PostgreSQL', 'Redis', 'Python', 'AWS / Azure', 'Tailored Microservices', 'Kafka'],
    businessValue: 'Eliminates repetitive manual overhead and enables secure, self-service transactions for thousands of concurrent users.',
    iconName: 'Code',
    relatedServiceSlugs: ['systems-integration', 'digital-product-development']
  },
  {
    id: 'systems-integration',
    slug: 'systems-integration',
    number: '04',
    title: 'Systems Integration',
    shortDescription: 'Harmonizing distributed cloud environments, legacy databases, ERPs, and external APIs into a unified data ecosystem.',
    fullOverview: 'Disconnected systems create blind spots, delays, and data discrepancies. NovaTech unifies legacy software, cloud services, and third-party APIs into synchronized event-driven pipelines that deliver dependable data across your organization in real time.',
    problemSolved: 'Data silos, brittle point-to-point connections, slow batch syncs, and manual intervention required to keep disparate business tools in alignment.',
    deliverables: [
      'Event-Driven Messaging & Event Broker Architecture',
      'Secure Middleware & Custom API Gateway Layer',
      'Legacy-to-Cloud Bidirectional Data Connectors',
      'Automated Data Cleansing & Transformation Pipelines',
      'Centralized Audit Logging & Distributed Tracing System',
      'Fault-Tolerant Dead-Letter Queue & Retry Mechanisms'
    ],
    processSteps: [
      { step: '01', title: 'Ecosystem Topology', description: 'Documenting all internal and external data flows, API protocols, schemas, and security boundaries.' },
      { step: '02', title: 'Interface Abstraction', description: 'Designing standardized schemas and message formats to decouple producer and consumer systems.' },
      { step: '03', title: 'Pipeline Assembly', description: 'Deploying high-availability brokers, event workers, and robust data translation middleware.' },
      { step: '04', title: 'Observability & Cutover', description: 'Implementing end-to-end distributed tracing, metrics dashboards, and staged traffic cutovers.' }
    ],
    keyTechnologies: ['Apache Kafka', 'RabbitMQ', 'gRPC', 'REST APIs', 'OpenTelemetry', 'PostgreSQL', 'Terraform'],
    businessValue: 'Transforms disconnected legacy tools into an agile, real-time operating backbone with 99.99% message delivery reliability.',
    iconName: 'Cpu',
    relatedServiceSlugs: ['technology-strategy', 'web-software-solutions']
  }
];
