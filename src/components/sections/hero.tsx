'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';
import MagneticButton from '@/components/ui/MagneticButton';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up motion values for 3D card tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for cursor movement
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { damping: 25, stiffness: 200 });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { damping: 25, stiffness: 200 });

  // Floating offset for visual depth
  const translateZ = 50;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Normalize coordinates from -0.5 to 0.5
    const normalizedX = (e.clientX - left) / width - 0.5;
    const normalizedY = (e.clientY - top) / height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center bg-[#050508] overflow-hidden pt-28 pb-16"
    >
      {/* Background radial soft light grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f15_1px,transparent_1px),linear-gradient(to_bottom,#0f0f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      {/* Decorative blurred blob */}
      <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#FF7A00]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-[#E85D04]/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Info Column - Left */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Indicator */}
          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-wide mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {profile.availability}
          </motion.div> */}

          {/* Headline Name */}
          <div className="overflow-hidden">
            <motion.a
              href="#hero"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(2.2rem,3.2vw,3.4rem)] sm:text-[clamp(2.5rem,3.4vw,3.9rem)] md:text-[clamp(2.9rem,3.8vw,4.4rem)] font-bold tracking-[-0.06em] text-white leading-[0.9] font-sans max-w-[10.5ch] mb-3 transition-colors duration-300 hover:text-[#FF8A00]"
            >
              <span className="block"> I’m</span>
              <span className="block">Laxmi Varshitha</span>
              <span className="block">Juturu</span>
            </motion.a>
          </div>

          {/* Core statement */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-zinc-100 max-w-xl mb-4 leading-snug"
          >
            <span>Building with code. <span className="text-[#FF7A00] font-semibold">Thinking with data.</span></span>
          </motion.h3>

          {/* Short paragraph summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base text-zinc-400 max-w-xl mb-7 leading-relaxed"
          >
            <span className="block">Computer Science undergraduate focused on software development and data-driven problem solving.</span>
            </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center mb-8"
          >
            <MagneticButton range={40} strength={0.25}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FF7A00] text-white font-bold text-sm hover:bg-[#E85D04] transition-all duration-300 shadow-lg shadow-[#FF7A00]/20 hover:shadow-[#FF7A00]/40"
              >
                View My Work
              </a>
            </MagneticButton>
            
            <MagneticButton range={40} strength={0.25}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900 text-zinc-200 font-semibold text-sm transition-all duration-300 hover:border-zinc-700"
              >
                Get In Touch
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social connections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 text-zinc-500 text-sm font-medium"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
              data-cursor-text="github"
            >
              <Github className="h-4 w-4" />
              <span>Github</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
              data-cursor-text="linkedin"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
              data-cursor-text="email"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
              data-cursor-text="leetcode"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>LeetCode</span>
            </a>
          </motion.div>

        </div>

        {/* 3D Photo Column - Right */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              perspective: 1000,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] group cursor-pointer"
            data-cursor-text="hello"
          >
            <motion.div
              style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: 'preserve-3d',
              }}
              className="w-full h-full rounded-2xl border border-zinc-800 bg-zinc-950 p-3 shadow-2xl relative overflow-hidden"
            >
              {/* Internal framing element */}
              <div 
                style={{ transform: `translateZ(${translateZ}px)` }}
                className="w-full h-full rounded-xl overflow-hidden relative border border-[#FF7A00]/10"
              >
                <Image
                  src="/varshitha_podium.jpeg"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 300px, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-115 group-hover:grayscale-0"
                  priority
                />
                
                {/* Subtle vignette layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Info Overlay at the bottom */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#FF7A00] mb-1">
                    
                  </p>
                  <p className="text-base font-bold text-white font-sans">
                    Laxmi Varshitha J.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none opacity-40">
        <span className="text-[10px] tracking-widest uppercase font-semibold text-zinc-500">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce text-zinc-400" />
      </div>
    </section>
  );
}
