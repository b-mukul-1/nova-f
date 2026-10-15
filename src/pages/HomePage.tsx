import React from 'react';
import { Hero } from '../components/home/Hero';
import { NetworkShowcase } from '../components/home/NetworkShowcase';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { ApproachSection } from '../components/home/ApproachSection';
import { SplitFeatureSection } from '../components/home/SplitFeatureSection';
import { WhyNovaTech } from '../components/home/WhyNovaTech';
import { CaseStudyDemo } from '../components/home/CaseStudyDemo';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <NetworkShowcase />
      <CapabilitiesSection />
      <ApproachSection />
      <SplitFeatureSection />
      <WhyNovaTech />
      <CaseStudyDemo />
      <FAQSection />
      <FinalCTA />
    </>
  );
};
