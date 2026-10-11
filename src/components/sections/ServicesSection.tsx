import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/data/services';
import { Globe, Code2, Layers, ShieldCheck, Check, ArrowRight } from 'lucide-react';

const iconMap = {
  Globe: Globe,
  Code: Code2,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Services"
          title="What We Do"
          subtitle="We craft digital solutions engineered for reliability, performance, and everyday usability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-teal-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Hover gradient accent top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-teal-400 to-brand-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="w-13 h-13 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mb-6 group-hover:bg-brand-teal-50 group-hover:text-brand-teal-600 border border-brand-blue-100 group-hover:border-brand-teal-200 transition-all duration-200 group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-blue-900 group-hover:text-brand-teal-700 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="space-y-2 mb-5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-600 group-hover:text-brand-teal-600 transition-colors"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500">
            Have a custom requirement?{' '}
            <a
              href="#contact"
              className="text-brand-blue-600 font-semibold hover:text-brand-teal-600 underline underline-offset-4 transition-colors"
            >
              Discuss your project with us &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
