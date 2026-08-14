'use client';

import React from 'react';
import { profile } from '@/data/profile';
import { ArrowUp } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full border-t border-zinc-900/60 bg-[#050508] px-6 py-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="max-w-xs text-base leading-7 text-zinc-300">
              Full Stack developer crafting
              <br />
              clean & modern products.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#home" className="text-base text-zinc-300 transition-colors hover:text-white">
              Portfolio
            </a>
            <a href="#about" className="text-base text-zinc-300 transition-colors hover:text-white">
              About
            </a>
            <a href="#projects" className="text-base text-zinc-300 transition-colors hover:text-white">
              Projects
            </a>
            <a href="#activities" className="text-base text-zinc-300 transition-colors hover:text-white">
              Activities
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a href={`mailto:${profile.email}`} className="text-base text-zinc-300 transition-colors hover:text-white">
              Gmail
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-base text-zinc-300 transition-colors hover:text-white">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-base text-zinc-300 transition-colors hover:text-white">
              GitHub
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {profile.instagram && (
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-base text-zinc-300 transition-colors hover:text-white">
                Instagram
              </a>
            )}
            <a href="#contact" className="text-base text-zinc-300 transition-colors hover:text-white">
              Contact me
            </a>
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
  <h2 className="whitespace-nowrap text-center text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-[#FF7A00]/40">
  {profile.firstName + " " + "J"}
</h2>
</div>

        
      </div>
    </footer>
  );
}