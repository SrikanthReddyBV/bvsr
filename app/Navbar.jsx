import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] shadow-[var(--shadow-premium-glass)] backdrop-blur-xl w-full max-w-2xl transition-all duration-400 hover:shadow-[var(--shadow-soft-elevation)]">
        
        {/* Logo / Monogram */}
        <Link href="/" className="text-lg font-bold tracking-tighter text-[var(--color-ink-primary)] hover:text-[var(--color-accent-glow)] transition-colors">
          B V S R
        </Link>

        {/* Clear, Standard Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {['Expertise', 'Experience', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Button - Updated for Dark Mode Contrast */}
        <button className="hidden md:block px-5 py-2 text-sm font-semibold rounded-full bg-[var(--color-ink-primary)] text-[var(--color-bg-premium)] hover:bg-[var(--color-ink-secondary)] hover:scale-105 transition-all duration-300 shadow-md">
          View Resume
        </button>
      </nav>
    </div>
  );
}