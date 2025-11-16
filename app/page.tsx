'use client';

import Navbar from '@/components/common/Navbar/Navbar';
import Hero from '@/components/common/Hero/Hero';
import AwakeningGrove from '@/components/worlds/AwakeningGrove/AwakeningGrove';
import TrialPeaks from '@/components/worlds/TrialPeaks/TrialPeaks';
import Projects from '@/components/common/Projects/Projects';
import FutureConstellarium from '@/components/worlds/FutureConstellarium/FutureConstellarium';
import ContactForm from '@/components/common/ContactForm/ContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AwakeningGrove />
        <TrialPeaks />
        <Projects />
        <FutureConstellarium />
        <ContactForm />
      </main>
    </>
  );
}
