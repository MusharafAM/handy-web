import React from 'react';

const STATS = [
  { value: '50+', label: 'Projects Delivered', desc: 'Across web, software & platforms' },
  { value: '30+', label: 'Clients Served', desc: 'Businesses, startups & organizations' },
  { value: '5+',  label: 'Years Building', desc: 'Practical digital solutions' },
  { value: '15+', label: 'Technologies', desc: 'Modern stack, battle-tested tools' },
];

export default function StatsSection() {
  return (
    <section className="relative bg-white border-b border-slate-100">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="group px-6 py-10 sm:py-12 text-center hover:bg-brand-blue-50/40 transition-colors duration-200"
            >
              <div className="text-4xl sm:text-5xl font-bold text-brand-blue-900 tracking-tight group-hover:text-brand-blue-700 transition-colors duration-200">
                {stat.value}
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-700">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 leading-relaxed">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue-300/40 to-transparent" />
    </section>
  );
}
