import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/layout/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Laxmi Varshitha Juturu | Portfolio',
  description:
    'Professional portfolio of Laxmi Varshitha Juturu, a Computer Science Engineering student, Software Developer, and DSA Mentor specializing in Full-Stack development, Cloud DevOps, and AI integrations.',
  keywords: [
    'Laxmi Varshitha Juturu', 
    'Varshitha Juturu',
    'Portfolio', 
    'Software Engineer', 
    'Full-Stack Developer', 
    'DevOps', 
    'Kubernetes AWS',
    'Java DSA Mentor', 
    'Computer Science Student'
  ],
  openGraph: {
    title: 'Laxmi Varshitha Juturu | Portfolio',
    description: 'Professional portfolio of Laxmi Varshitha Juturu, a Computer Science Engineering student, Software Developer, and DSA Mentor.',
    url: 'https://siddharthaportfolio.netlify.app/', // Primary ref or own domain
    siteName: 'Laxmi Varshitha Juturu Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laxmi Varshitha Juturu | Portfolio',
    description: 'Professional portfolio of Laxmi Varshitha Juturu, a Computer Science Engineering student, Software Developer, and DSA Mentor.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${outfit.variable} font-sans bg-[#050508] text-[#f4f4f7] antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
