'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, X, Code2, Cpu, BarChart } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'All' | 'Software Engineering' | 'DevOps & Cloud' | 'Data Analytics'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Software Engineering' | 'DevOps & Cloud' | 'Data Analytics')[] = [
    'All',
    'Software Engineering',
    'DevOps & Cloud',
    'Data Analytics',
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Return icons based on project category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Software Engineering':
        return <Code2 className="h-4 w-4" />;
      case 'DevOps & Cloud':
        return <Cpu className="h-4 w-4" />;
      case 'Data Analytics':
      default:
        return <BarChart className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="relative w-full py-16 md:py-24 bg-[#050508] border-t border-zinc-900">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            {/* <p className="text-xs uppercase font-bold tracking-widest text-[#FF7A00] mb-2 font-mono">02. Engineering</p> */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
              My Projects
            </h2>
          </div>
          
          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/20'
                    : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
                data-cursor-text="view"
              >
                <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 flex flex-col hover:border-[#FF7A00]/30 transition-colors duration-400 overflow-hidden relative shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_12px_30px_rgba(255,122,0,0.08)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/0 via-[#FF7A00]/0 to-[#FF7A00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-zinc-900 bg-zinc-950 flex items-center justify-center">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 text-zinc-700 group-hover:text-zinc-500 transition-colors">
                        <Code2 className="h-12 w-12 stroke-[1.5]" />
                        <span className="text-xs font-semibold tracking-wider uppercase font-mono">Dev Project</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-zinc-800 text-[10px] uppercase font-bold tracking-widest text-zinc-300">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A00] transition-colors duration-300 mb-4 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 font-mono text-[10px] border border-zinc-800/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                        <a
                          href={project.liveLink ?? project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/10 px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF8A00] transition-all duration-300 hover:bg-[#FF7A00]/20 hover:text-white"
                        >
                          View Project
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition-all duration-300 hover:border-zinc-500 hover:text-white"
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Full Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex justify-center items-start pt-12 md:pt-20 pb-12 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-full max-w-4xl rounded-3xl border border-zinc-800 bg-[#08080c] shadow-2xl relative overflow-hidden"
            >
              
              {/* Header Close Bar */}
              <div className="sticky top-0 bg-[#08080c]/80 backdrop-blur-md border-b border-zinc-900 z-10 py-5 px-6 md:px-10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#FF7A00] font-mono mb-0.5">
                    {selectedProject.category}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close Case Study"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Inner Scroll Content */}
              <div className="p-6 md:p-10 space-y-12">
                
                {/* Split Banner Info */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-900">
                  <div className="md:col-span-8 space-y-4">
                    <h3 className="text-lg font-bold text-zinc-300">Overview</h3>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="md:col-span-4 space-y-4">
                    <h3 className="text-lg font-bold text-zinc-300">Project Details</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-zinc-500 font-mono block">Tech Stack</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedProject.stack.map(tech => (
                            <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 font-mono text-[10px]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <span className="text-[10px] uppercase font-semibold text-zinc-500 font-mono block">Source Code</span>
                        <a 
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#FF7A00] hover:text-[#FF8A00] font-bold mt-1"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>github.com/lvarshitha7</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Details Blocks */}
                <div className="space-y-10">
                  
                  {/* Problem & Solution Column split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 p-5 rounded-2xl border border-zinc-900 bg-zinc-950/20">
                      <h4 className="text-base font-bold text-rose-400 font-sans uppercase tracking-wider">The Challenge</h4>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>

                    <div className="space-y-3 p-5 rounded-2xl border border-zinc-900 bg-zinc-950/20">
                      <h4 className="text-base font-bold text-emerald-400 font-sans uppercase tracking-wider">The Solution</h4>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-zinc-200">Key Features &amp; Implementations</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.caseStudy.features.map((feat, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-3 p-4 rounded-xl border border-zinc-900/50 bg-zinc-950/50 text-xs md:text-sm text-zinc-400 leading-relaxed"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-mono font-bold">
                            {idx + 1}
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contributions & Tech Detail */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-6 space-y-3">
                      <h4 className="text-base font-bold text-zinc-200">Technical Implementation</h4>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.caseStudy.technology}
                      </p>
                    </div>
                    
                    <div className="md:col-span-6 space-y-3">
                      <h4 className="text-base font-bold text-zinc-200">My Contributions</h4>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.caseStudy.contribution}
                      </p>
                    </div>
                  </div>

                  {/* Obstacles / Hard Parts & Impact Outcomes */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-zinc-900">
                    <div className="md:col-span-6 space-y-3">
                      <h4 className="text-base font-bold text-zinc-200">Challenges &amp; Learning curve</h4>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.caseStudy.challenges}
                      </p>
                    </div>
                    
                    <div className="md:col-span-6 space-y-3">
                      <h4 className="text-base font-bold text-[#FF7A00]">Outcomes &amp; Metrics</h4>
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                        {selectedProject.caseStudy.outcome}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer Buttons */}
                <div className="pt-8 border-t border-zinc-900 flex justify-end gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Close Case Study
                  </button>
                  
                  <MagneticButton range={30} strength={0.25}>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FF7A00] text-white font-bold text-xs hover:bg-[#E85D04] transition-all duration-300"
                    >
                      <span>View Code on Github</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </MagneticButton>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
