'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldAlert, Award, HelpingHand, Terminal } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const activities = [
  {
    id: 1,
    title: 'BIZ-TECH SUMMIT',
    subtitle: 'Datum Decoders Pitching Event',
    image: '/activity_1.jpeg',
    link: 'https://www.linkedin.com/posts/lvarshitha7_biztechsummit-datumdecoders-pitching-activity-7310650466973974529-wOpZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_78zoBtVj-SLRAn7PRM9qG_eSPv1mfFR8',
    desc: 'Pitched data-driven products and business models during the Biz-Tech Summit, bridging data science with business analytics.'
  },
  {
    id: 2,
    title: 'Megathon at IIIT HYD',
    subtitle: 'Megathon Hackathon Experience',
    image: '/activity_3.jpeg',
    link: 'https://www.linkedin.com/posts/lvarshitha7_megathon-iiithyderabad-hackathonexperience-activity-7387128918849343489-TXqI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_78zoBtVj-SLRAn7PRM9qG_eSPv1mfFR8',
    desc: 'Participated in the IIIT Hyderabad Megathon, collaborating under tight deadlines to prototype software solutions.'
  },
  {
    id: 3,
    title: 'NSS Social Outreach',
    subtitle: '16+ Community Welfare Programs',
    image: '/activity_4.jpeg',
    link: 'https://www.linkedin.com/in/lvarshitha7/recent-activity/all/',
    desc: 'Conceptualized events regarding health, digital literacy, and civic awareness as an active NSS SNIST volunteer.'
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="relative w-full py-16 md:py-24 bg-[#050508] border-t border-zinc-900">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* <p className="text-xs uppercase font-bold tracking-widest text-[#FF7A00] mb-2 font-mono">05. Community</p> */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase font-sans">
              Leadership &amp; Activities
            </h2>
          </div>
          
        </div>

        {/* Gallery / Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <motion.a
              key={act.id}
              href={act.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col h-full rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-all duration-300 overflow-hidden"
              data-cursor-text="open"
            >
              
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Accent link icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-zinc-800 text-zinc-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Card Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[9px] font-bold text-[#FF7A00] font-mono tracking-widest uppercase block mb-1">
                    {act.subtitle}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                    {act.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans mt-2 line-clamp-3">
                    {act.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors duration-300 font-mono">
                  <span>View Post</span>
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
