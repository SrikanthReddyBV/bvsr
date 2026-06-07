import React from 'react';

export default function Arsenal() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 mb-32 relative" id="expertise">
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-ink-primary)] mb-16 text-center">
        Engineering <span className="font-semibold">Arsenal.</span>
      </h2>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[240px]">
        
        {/* The Core / Frontend (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 rounded-3xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] p-8 relative overflow-hidden group hover:border-[var(--color-ink-secondary)] transition-colors duration-500 flex flex-col justify-end">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[var(--color-ink-primary)] mb-2">Cinematic Interfaces</h3>
            <p className="text-[var(--color-ink-secondary)] max-w-md">
              Next.js 16 and React 19. Building hardware-accelerated, uncompromised user experiences that feel physical and fluid.
            </p>
          </div>
        </div>

        {/* AI & Logic */}
        <div className="rounded-3xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] p-8 relative overflow-hidden group hover:border-[var(--color-accent-glow)]/50 transition-colors duration-500 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-full bg-[var(--color-accent-glow)]/10 flex items-center justify-center mb-4">
             <span className="text-[var(--color-accent-glow)] font-bold">AI</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-ink-primary)] mb-2">Intelligent Pipelines</h3>
            <p className="text-sm text-[var(--color-ink-secondary)]">
              Integrating and orchestrating enterprise AI logic without blocking the main thread.
            </p>
          </div>
        </div>

        {/* Backend & Scale (Spans 2 columns on desktop, placed on bottom row) */}
        <div className="md:col-span-3 rounded-3xl border border-[var(--color-border-glass)] bg-gradient-to-r from-[var(--color-surface-glass)] to-transparent p-8 relative overflow-hidden group hover:border-[var(--color-ink-secondary)] transition-colors duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-[var(--color-ink-primary)] mb-2">Heavy Traffic & State</h3>
            <p className="text-[var(--color-ink-secondary)] max-w-2xl">
              When the glossy frontend gets hit with thousands of concurrent users, the architecture holds. Utilizing Redis caching layers, optimized DB queries, and robust cloud infrastructure to ensure sub-100ms response times.
            </p>
          </div>
          
          {/* Abstract Database / Stack Graphic */}
          <div className="flex flex-col gap-2 w-full md:w-48 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            {[1, 2, 3].map((layer) => (
              <div key={layer} className="h-4 w-full rounded border border-[var(--color-ink-secondary)]/30 bg-[var(--color-ink-primary)]/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]"></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}