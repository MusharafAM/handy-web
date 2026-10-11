import React from 'react';
import { WHY_POINTS } from '@/data/why-us';
import { Users, Cpu, TrendingUp } from 'lucide-react';

const iconMap = {
  Users: Users,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 overflow-hidden bg-brand-blue-950">
      {/* Ambient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue-600/15 blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading — dark variant */}
        <div className="mb-12 md:mb-16 text-center mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 bg-brand-teal-500/10 text-brand-teal-300 border border-brand-teal-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-400" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Why HandySof
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Our engineering philosophy centers on clarity, practical utility, and lasting technological value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {WHY_POINTS.map((point, index) => {
            const Icon = iconMap[point.iconName];
            return (
              <div
                key={point.title}
                className="glass-card rounded-2xl p-8 flex flex-col items-start hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal-500/15 text-brand-teal-400 flex items-center justify-center border border-brand-teal-500/20 group-hover:bg-brand-teal-500/25 transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold font-mono text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {point.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
