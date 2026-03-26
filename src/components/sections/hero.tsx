'use client';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

const GridPattern = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div 
        className="absolute inset-0 bg-repeat"
        style={{
          '--grid-size': '32px',
          '--grid-color': 'rgba(255, 255, 255, 0.05)',
          backgroundImage: 'linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)',
          backgroundSize: 'var(--grid-size) var(--grid-size)',
          animation: 'keyframes-grid 20s linear infinite',
        } as React.CSSProperties}
      ></div>
    </div>
  );
};

const FloatingCharts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Bar Chart - Left floating */}
      <div className="absolute left-0 top-1/4 -translate-y-1/2 opacity-20 animate-float" style={{animationDelay: '0s', animationDuration: '6s'}}>
        <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="90" width="25" height="70" fill="rgba(255, 255, 255, 0.6)" rx="3" />
          <rect x="60" y="60" width="25" height="100" fill="rgba(255, 255, 255, 0.5)" rx="3" />
          <rect x="100" y="20" width="25" height="140" fill="rgba(255, 255, 255, 0.6)" rx="3" />
          <rect x="140" y="70" width="25" height="90" fill="rgba(255, 255, 255, 0.5)" rx="3" />
        
          </svg>
      </div>

      

      {/* Line Chart - Top right floating */}
      <div className="absolute right-1/4 top-0 opacity-20 animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}>
        <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="10,100 60,60 110,80 160,30 210,70" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="100" r="5" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="60" cy="60" r="5" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="110" cy="80" r="5" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="160" cy="30" r="5" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="210" cy="70" r="5" fill="rgba(255, 255, 255, 0.7)" />
        </svg>
      </div>

      {/* Area Chart - Bottom left */}
      <div className="absolute left-0 bottom-0 opacity-20 animate-float" style={{animationDelay: '3s', animationDuration: '9s'}}>
        <svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 120 L 60 80 L 110 100 L 160 40 L 210 70 L 210 160 L 10 160 Z" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Scatter Plot - Bottom center */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-20 animate-float" style={{animationDelay: '4s', animationDuration: '10s'}}>
        <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="150" r="6" fill="rgba(255, 255, 255, 0.6)" />
          <circle cx="60" cy="120" r="6" fill="rgba(255, 255, 255, 0.6)" />
          <circle cx="90" cy="100" r="6" fill="rgba(255, 255, 255, 0.6)" />
          <circle cx="120" cy="80" r="6" fill="rgba(255, 255, 255, 0.6)" />
          <circle cx="150" cy="60" r="6" fill="rgba(255, 255, 255, 0.6)" />
          <circle cx="170" cy="40" r="6" fill="rgba(255, 255, 255, 0.6)" />
          <circle cx="45" cy="140" r="5" fill="rgba(255, 255, 255, 0.5)" />
          <circle cx="135" cy="70" r="5" fill="rgba(255, 255, 255, 0.5)" />
        </svg>
      </div>

      {/* Doughnut Chart - Right floating */}
      <div className="absolute right-0 bottom-1/4 translate-y-1/2 opacity-20 animate-float" style={{animationDelay: '5s', animationDuration: '7s'}}>
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="70" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="4" fill="none" />
          <circle cx="90" cy="90" r="70" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="4" fill="none" strokeDasharray="109.96 219.91" strokeLinecap="round" transform="rotate(-90 90 90)" />
          <circle cx="90" cy="90" r="70" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="4" fill="none" strokeDasharray="109.96 219.91" strokeLinecap="round" transform="rotate(120 90 90)" />
          <circle cx="90" cy="90" r="45" fill="rgba(0, 0, 0, 0.3)" />
        </svg>
      </div>

      {/* Trend Line Chart - Top center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-20 animate-float" style={{animationDelay: '6s', animationDuration: '8s'}}>
        <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 100 Q 60 80 100 60 T 180 50 T 220 30" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polyline points="20,100 100,60 180,50 220,30" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
          <circle cx="20" cy="100" r="4" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="100" cy="60" r="4" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="180" cy="50" r="4" fill="rgba(255, 255, 255, 0.7)" />
          <circle cx="220" cy="30" r="4" fill="rgba(255, 255, 255, 0.7)" />
        </svg>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotlightStyle, setSpotlightStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setSpotlightStyle({
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 40%)`,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative w-full h-[80svh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <GridPattern />
        <FloatingCharts />
        <div className="absolute inset-0" style={spotlightStyle}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
          Laxmi Varshitha Juturu
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg md:text-2xl text-primary/80 font-semibold italic">
          Turning Data into Decisions, AI into Impact
        </p>
        <p className="mx-auto mt-4 max-w-[600px] text-base text-muted-foreground">
          Passionate about transforming complex data into actionable insights using Python, SQL, and visualization tools. Dedicated to leveraging data-driven strategies and AI to create impactful, real-world solutions.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
