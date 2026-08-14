'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-16 md:py-24 bg-[#050508] border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 md:px-12 relative z-10 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-zinc-800/80 border border-zinc-700 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          Get In Touch
        </div>
<h3 className="mt-10 text-4xl md:text-5xl lg:text-[5rem] font-black tracking-[-0.06em] text-zinc-200 leading-[0.8]">
  Let&apos;s connect.
</h3>
        <p className="mx-auto mt-8 max-w-3xl text-xl md:text-2xl text-zinc-300">
          Reach out for any inquiries, collaborations, or just to say hi.
        </p>

        <div className="mt-8 flex justify-center">
  <a
    href={profile.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-600 bg-transparent px-6 py-3 text-lg md:text-xl font-semibold text-white transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-900/60"
  >
    Contact Me <ArrowUpRight className="h-5 w-5" />
  </a>
</div>

        <p className="mt-10 text-lg md:text-2xl text-zinc-300">
          Or email <a href={`mailto:${profile.email}`} className="underline decoration-zinc-500 underline-offset-4 hover:text-white">{profile.email}</a>
        </p>

        <div className="mt-10 flex items-center justify-center gap-8 text-zinc-300">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-zinc-700 p-3 transition-colors hover:border-zinc-500 hover:text-white">
            <Github className="h-7 w-7" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-zinc-700 p-3 transition-colors hover:border-zinc-500 hover:text-white">
            <Linkedin className="h-7 w-7" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full border border-zinc-700 p-3 transition-colors hover:border-zinc-500 hover:text-white">
            <Mail className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
