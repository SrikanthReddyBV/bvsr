import React from 'react';
import Navbar from './Navbar';
import Arsenal from './components/Arsenal';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col pt-20 overflow-hidden">

      {/* Subtle background glow effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--color-accent-glow)]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl w-full mx-auto flex flex-col gap-6 px-6 md:px-16 pt-12 pb-32">
        <ScrollReveal delay={0.1} y={20}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] shadow-[var(--shadow-premium-glass)] backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-glow)] animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium text-[var(--color-ink-secondary)] tracking-widest uppercase">
              Badvel Venkata Srikanth Reddy • SDE II
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[var(--color-ink-primary)] leading-[1.05]">
            Architecting <br className="hidden md:block" />
            <span className="font-semibold">Digital Scale.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-xl text-[var(--color-ink-secondary)] max-w-2xl leading-relaxed mt-2">
            I build high-performance applications that bridge the gap between glossy, cutting-edge frontends and heavy, scalable backend architectures.
          </p>
        </ScrollReveal>
      </section>

      {/* The Bento Box Arsenal */}
      <ScrollReveal delay={0.1}>
        <Arsenal />
      </ScrollReveal>

      {/* Career Trajectory */}
      <ScrollReveal delay={0.1}>
        <Experience />
      </ScrollReveal>

      {/* Premium Footer */}
      <ScrollReveal delay={0.1}>
        <Contact />
      </ScrollReveal>

    </main>
  );
}