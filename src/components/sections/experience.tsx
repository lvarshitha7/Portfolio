import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Award } from 'lucide-react';
import { InteractiveCard } from '../interactive-card';

const experiences = [
  {
    role: 'DSA Mentor',
    company: 'Smart Interviews',
    period: 'Jan 2026 – Present',
    description: 'Mentoring junior students in Data Structures and Algorithms through structured problem-solving sessions. Guiding students on coding approaches, time complexity analysis, and interview-oriented problem solving.',
  }
];

const certifications = [
  {
    title: 'Smart Coder (Gold)',
    issuer: 'Smart Interviews',
    date: '',
    link: 'https://smartinterviews.in/certificate/b75c7bdc',
  },
  {
    title: 'Deloitte Data Analytics Virtual Program',
    issuer: 'Deloitte',
    description: 'Built dashboards using Tableau and Excel for data-driven insights.',
    link: 'https://drive.google.com/drive/u/0/my-drive',
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience &amp; Certifications
            </h2>
             <p className="mt-4 text-muted-foreground">My professional journey and qualifications.</p>
        </div>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-semibold">
              <Briefcase className="h-7 w-7 text-primary" />
              Experience
            </h3>
            <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-border">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[2.1rem] top-[0.4rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
                  </div>
                  <p className="font-semibold">{exp.role}</p>
                  <p className="text-sm font-medium text-muted-foreground">{exp.company} - <span className="italic">{exp.period}</span></p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-semibold">
              <Award className="h-7 w-7 text-primary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <InteractiveCard key={index} className="bg-secondary/30">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {cert.title}
                        </a>
                      ) : (
                        cert.title
                      )}
                    </CardTitle>
                    <CardDescription>
                      {cert.issuer} {cert.date && `• ${cert.date}`}
                    </CardDescription>
                  </CardHeader>
                   {cert.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </CardContent>
                  )}
                </InteractiveCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
