import React from 'react';
import Button from '@/components/ui/Button';
import HeroGraphic from './HeroGraphic';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-brand-blue-950"
    >
      {/* Ambient glow orbs */}
      <div className="animate-orb absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-brand-teal-500/12 blur-[140px] pointer-events-none" />
      <div className="animate-orb-delayed absolute -bottom-48 -right-32 w-[600px] h-[600px] rounded-full bg-brand-blue-500/18 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] rounded-full bg-brand-blue-800/25 blur-[90px] pointer-events-none" />

      {/* Subtle white grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-teal-500/10 text-brand-teal-300 border border-brand-teal-500/20 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-teal-400 animate-pulse" />
              Software Development & Digital Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Building Software That{' '}
              <span className="gradient-text">Makes a Difference.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              HandySof creates modern, reliable and user-friendly digital solutions
              designed around real-world needs.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="teal"
                size="lg"
                asLink
                href="#services"
                icon={<ArrowRight className="w-4 h-4" />}
                className="group shadow-lg shadow-brand-teal-500/20"
              >
                Explore Our Services
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asLink
                href="#contact"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Contact Us
              </Button>
            </div>

            {/* Trust bar */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-8 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-400" />
                Custom Software Engineering
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-400" />
                Modern Web Applications
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-400" />
                Scalable Digital Solutions
              </span>
            </div>
          </div>

          {/* Right Column: Graphic */}
          <div className="lg:col-span-5 w-full flex justify-center animate-float">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
