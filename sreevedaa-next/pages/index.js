import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import ServicesSection from '../components/ServicesSection';
import ConditionsSection from '../components/ConditionsSection';
import BenefitsSection from '../components/BenefitsSection';
import SpecialTherapies from '../components/SpecialTherapies';
import TestimonialsSection from '../components/TestimonialsSection';
// import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import ScrollAnimator from '../components/ScrollAnimator';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Sree Vedaa Sujok &amp; Acupuncture Therapy Centre | Natural Healing Visakhapatnam</title>
      </Head>

      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ConditionsSection />
      <BenefitsSection />
      <SpecialTherapies />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <ContactSection />
      <Footer />
      <FloatingWidgets />
    </>
  );
}
