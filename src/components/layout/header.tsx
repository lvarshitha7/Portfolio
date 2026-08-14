'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import MagneticButton from '@/components/ui/MagneticButton';

const navLinks = [
  { href: '#about', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#050508]/80 border-b border-orange-500/10 backdrop-blur-md' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group relative flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FF8A00]">
              {`${profile.firstName} ${profile.lastName}`
  .replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden bold md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[13px] font-medium tracking-wide text-zinc-400 hover:text-white transition-colors duration-300 relative py-2 group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF7A00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Resume / Contact Button */}
            <MagneticButton range={40} strength={0.3}>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-[13px] hover:bg-[#FF7A00] hover:text-white transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-[#FF7A00]/20"
              >
                <span>Resume</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold border border-zinc-800 px-4 py-2 rounded-full text-white bg-zinc-950/50"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#050508] pt-28 px-8 flex flex-col md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-6 text-left">
              {navLinks.map(({ href, label }, idx) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-zinc-400 hover:text-white transition-colors py-2 border-b border-zinc-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto mb-12 flex flex-col gap-4 text-zinc-500 text-sm">
              <p>Get in touch:</p>
              <a href={`mailto:${profile.email}`} className="text-white text-lg font-medium">
                {profile.email}
              </a>
              <div className="flex gap-4 mt-2">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">Github</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-white">LeetCode</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
