import React from 'react';

export default function Contact() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 mb-12 relative" id="contact">
      <div className="p-10 md:p-16 rounded-[2.5rem] border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] shadow-[var(--shadow-premium-glass)] backdrop-blur-xl relative overflow-hidden group">
        
        {/* Subtle hover glow effect - optimized for dark mode */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent-glow)]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[var(--color-accent-glow)]/20 transition-colors duration-700" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--color-ink-primary)] mb-4">
              Ready to <span className="font-semibold">Scale?</span>
            </h2>
            <p className="text-lg text-[var(--color-ink-secondary)] max-w-md">
              Whether you need heavy-hitting system architecture or cinematic frontend execution, let's build something exceptional.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto">
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-ink-primary)] text-[var(--color-bg-premium)] font-bold hover:bg-[var(--color-ink-secondary)] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full md:w-auto"
            >
              Start a Conversation
            </a>
            
            <div className="flex items-center justify-center gap-6">
               <a href="https://linkedin.com/in/bvsr" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-glow)] transition-colors">
                 LinkedIn
               </a>
               {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-glow)] transition-colors">
                 X (Twitter)
               </a> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimalist Copyright */}
      <div className="mt-16 pb-8 text-center">
        <p className="text-xs text-[var(--color-ink-secondary)]/40 font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Badvel Venkata Srikanth Reddy. All rights reserved.
        </p>
      </div>
    </section>
  );
}