'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Award, ExternalLink, Calendar } from 'lucide-react';
import { experiences, certifications } from '@/data/experience';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position within this section to animate timeline drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="h-4 w-4" />;
      case 'education':
        return <GraduationCap className="h-4 w-4" />;
      case 'leadership':
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="relative w-full py-24 md:py-32 bg-[#050508] border-t border-zinc-900"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#FF7A00] mb-2 font-mono">03. Journey</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
              Timeline &amp; Credentials
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs md:text-right font-medium">
            Academic achievements, community initiatives, and mentorship roles.
          </p>
        </div>

        {/* Two-Column Layout: Timeline (Left) & Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Timeline (Col Span 7) */}
          <div className="lg:col-span-7 relative pl-8 md:pl-10">
            
            {/* Drawing SVG Line */}
            <div className="absolute left-3.5 md:left-4 top-2 bottom-2 w-[2px] bg-zinc-900">
              <motion.div 
                className="w-full h-full bg-gradient-to-b from-[#FF7A00] to-[#E85D04] origin-top"
                style={{ scaleY }}
              />
            </div>

            {/* Timeline Nodes */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Point Dot with pulsing halo on hover */}
                  <div className="absolute -left-[2.15rem] md:-left-[2.25rem] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-800 bg-[#050508] text-zinc-500 group-hover:text-[#FF8A00] group-hover:border-[#FF7A00]/50 transition-colors duration-300">
                    {getIcon(exp.type)}
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 group-hover:border-zinc-800/80 transition-colors duration-300 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-xs font-semibold text-zinc-400 mt-0.5">
                          {exp.subtitle}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs text-[#FF8A00]/90 font-mono bg-[#FF7A00]/5 border border-[#FF7A00]/10 px-2.5 py-1 rounded-full self-start sm:self-center">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Organization Subline */}
                    

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 pt-2">
                      {exp.points.map((pt, pIdx) => (
                        <li 
                          key={pIdx} 
                          className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]/60 mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Certifications & Credentials (Col Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2.5 border-b border-zinc-900 pb-4 mb-6">
              <Award className="h-5 w-5 text-[#FF7A00]" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="group relative p-6 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:border-[#FF7A00]/20 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-[#FF7A00] font-mono tracking-widest uppercase block mb-0.5">
                          {cert.issuer}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                          {cert.title}
                        </h4>
                      </div>
                      {cert.link && (
                        <MagneticButton range={20} strength={0.3}>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-white transition-colors"
                            aria-label={`View ${cert.title}`}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </MagneticButton>
                      )}
                    </div>

                    {cert.description && (
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans pt-1">
                        {cert.description}
                      </p>
                    )}

                    {cert.date && (
                      <span className="inline-block text-[10px] text-zinc-500 font-mono bg-zinc-900/60 border border-zinc-900 px-2 py-0.5 rounded">
                        Issued {cert.date}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Call To Action Panel */}
            <div className="p-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/10 text-center space-y-4 pt-8">
              <p className="text-xs text-zinc-500 font-medium max-w-xs mx-auto leading-relaxed">
                Looking for the complete technical resume document including academic grades, electives, and certifications?
              </p>
              <MagneticButton range={30} strength={0.2}>
                <a
                  href="https://smartinterviews.in/certificate/b75c7bdc" // Replace with direct link or cert
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#FF7A00] hover:text-white transition-all duration-300"
                >
                  <span>Download Full Resume PDF</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </MagneticButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
