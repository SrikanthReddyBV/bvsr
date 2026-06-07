import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'Krutrim',
      location: 'Bengaluru, Karnataka · On-site',
      roles: [
        {
          title: 'SDE II',
          period: 'Jan 2026 - Present',
          description: 'Driving AI-powered solutions and enterprise platform architecture.',
          achievements: [
            'Developed standalone modules for Krutrim Cloud Document Intelligence and Bhashik.',
            'Architected the integration of "Kruti", an advanced AI-powered solution, directly into Ola Electric products and workflows.'
          ],
          skills: ['AI Integrations', 'Document Intelligence', 'React', 'Node.js']
        },
        {
          title: 'SDE I',
          period: 'May 2025 - Jan 2026',
          description: 'Bridged geospatial technologies with core application environments.',
          achievements: [
            'Extensively implemented and managed Ola Maps architecture across both Krutrim and broader Ola Electric platforms.'
          ],
          skills: ['Ola Maps', 'Geospatial Apps', 'JavaScript', 'TypeScript']
        }
      ]
    },
    {
      company: 'Ola Electric',
      location: 'Bengaluru, Karnataka · On-site',
      roles: [
        {
          title: 'SDE I',
          period: 'Dec 2021 - Apr 2025',
          description: 'Architected multiple high-impact internal platforms, complex data visualizations, and customer-facing features at massive scale.',
          achievements: [
            'Led the critical migration from Google Maps to Ola Maps within the Ola Electric companion application.',
            'Engineered an appointment management system, directly streamlining service center scheduling and reducing physical congestion.',
            'Designed and developed multiple internal business monitoring dashboards from scratch, specializing in interactive charts and real-time data visualization.',
            'Built dynamic TCO and EMI calculators with interactive graphical interfaces to drive sales conversion.',
            'Developed a standalone chatbot system to heavily automate and resolve high-volume customer queries.'
          ],
          skills: ['Data Visualization', 'Dashboard Development', 'React', 'Mapping Systems']
        }
      ]
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 mb-32 relative" id="experience">
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-ink-primary)] mb-16 text-center">
        Career <span className="font-semibold">Trajectory.</span>
      </h2>

      <div className="relative">
        {/* Subtle glowing timeline track */}
        <div className="absolute left-[27px] md:left-[39px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-ink-primary)] via-[var(--color-border-glass)] to-transparent"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10 group">
              
              {/* Timeline Node */}
              <div className="relative z-10 flex flex-col items-center mt-1">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] shadow-[var(--shadow-premium-glass)] backdrop-blur-md flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-ink-primary)] group-hover:bg-[var(--color-accent-glow)] transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 pb-4">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--color-ink-primary)] tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-secondary)] font-medium mt-1">
                    {exp.location}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {exp.roles.map((role, roleIndex) => (
                    <div 
                      key={roleIndex} 
                      className="p-6 md:p-8 rounded-2xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] shadow-[var(--shadow-premium-glass)] backdrop-blur-sm transition-all duration-400 hover:shadow-[var(--shadow-soft-elevation)] hover:bg-[var(--color-ink-primary)]/5"
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h4 className="text-lg font-semibold text-[var(--color-ink-primary)]">
                          {role.title}
                        </h4>
                        <span className="text-xs font-mono tracking-widest text-[var(--color-ink-secondary)] uppercase bg-[var(--color-bg-premium)] px-3 py-1 rounded-full border border-[var(--color-border-glass)] shadow-inner">
                          {role.period}
                        </span>
                      </div>
                      
                      {/* High-level description */}
                      <p className="text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed mb-6 font-medium">
                        {role.description}
                      </p>

                      {/* Execution Details */}
                      <ul className="flex flex-col gap-3 mb-6">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-ink-secondary)] leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-glow)] opacity-80 shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-glass)]">
                        {role.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 text-xs font-semibold tracking-wide rounded-md bg-[var(--color-ink-primary)]/10 text-[var(--color-ink-primary)]">
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}