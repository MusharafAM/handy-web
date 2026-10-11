import React from 'react';

const TECHNOLOGIES = [
  'React', 'Next.js', 'TypeScript', 'Python', 'Django',
  'Node.js', 'PostgreSQL', 'REST APIs', 'Tailwind CSS', 'Docker',
  'React Native', 'Redis', 'AWS', 'Git & CI/CD', 'GraphQL',
];

// Duplicate for seamless loop
const TICKER_ITEMS = [...TECHNOLOGIES, ...TECHNOLOGIES];

export default function TechStackSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
          Technologies We Work With
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue-900">
          Our Engineering Stack
        </h2>
        <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
          We build with modern, proven tools that scale from startup to enterprise.
        </p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-50/60 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-50/60 to-transparent" />

        <div className="flex animate-ticker whitespace-nowrap gap-3">
          {TICKER_ITEMS.map((tech, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center px-5 py-2.5 rounded-full text-sm font-medium bg-white text-brand-blue-800 border border-slate-200 shadow-xs hover:border-brand-teal-400 hover:text-brand-teal-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
