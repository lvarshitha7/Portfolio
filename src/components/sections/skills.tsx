'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-16 md:py-24 bg-[#050508] border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10">
        <div className="rounded-[28px] border border-zinc-800 bg-[#0b0d12]/80 p-6 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Technical Skills
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-3">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.04em] text-white leading-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-sm font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#FF8A00]/60 hover:bg-zinc-800 hover:text-[#FFB36B] hover:shadow-[0_0_0_1px_rgba(255,122,0,0.18),0_0_18px_rgba(255,122,0,0.12)] hover:[text-shadow:0_0_12px_rgba(255,122,0,0.35)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
