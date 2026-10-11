import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Target, Layers, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Practical Solutions',
      description:
        'We focus on solving actual real-world problems with direct, effective software architecture rather than unnecessary complexity.',
      icon: Target,
      accent: 'text-brand-teal-600',
      bg: 'bg-brand-teal-50',
      border: 'border-brand-teal-200/50',
    },
    {
      title: 'Simple & Scalable',
      description:
        'Every line of code and database structure is crafted for clarity, maintainability, and seamless future growth.',
      icon: Layers,
      accent: 'text-brand-blue-600',
      bg: 'bg-brand-blue-50',
      border: 'border-brand-blue-200/50',
    },
    {
      title: 'Client & User Centric',
      description:
        'We work closely with clients to truly understand user needs, delivering tools that make daily operations smoother.',
      icon: HeartHandshake,
      accent: 'text-brand-teal-600',
      bg: 'bg-brand-teal-50',
      border: 'border-brand-teal-200/50',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Us"
          title="Who We Are"
        />

        {/* Core Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-relaxed">
            HandySof is a software development team passionate about turning ideas
            into practical digital solutions. We build software that is simple,
            scalable, and built around the needs of our users and clients.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-brand-teal-400/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Subtle top gradient line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`w-12 h-12 rounded-xl ${pillar.bg} ${pillar.accent} flex items-center justify-center mb-5 border ${pillar.border} group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-blue-900 mb-2 group-hover:text-brand-blue-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
