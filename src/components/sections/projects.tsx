'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { InteractiveCard } from '../interactive-card';

const projects = [
  {
    featured: true,
    title: 'Customer Churn Analysis',
    description: "Analyzed customer churn data using SQL Server Management Studio (SSMS) for extraction and processing. Performed data cleaning and exploratory data analysis (EDA) using Python in Google Colab. Built interactive Power BI dashboards to visualize churn trends, customer segments, and key performance metrics, deriving actionable insights to support data-driven retention strategies.",
    stack: ['Python', 'SQL Server (SSMS)', 'Google Colab', 'Power BI'],
    link: 'https://github.com/lvarshitha7/Churn_Analysis.git',
    image: '/churn_analysis.png',
  },
  {
    featured: true,
    title: 'Explosive Growth of Netflix',
    description: "Developed an interactive Tableau dashboard analyzing 7000+ Netflix movies and TV shows, identifying trends in content distribution, genre popularity, and yearly growth. Visualized key insights including Movies vs TV Shows split, rating distribution, and country-wise content using dynamic charts. Performed data cleaning in Excel for accurate analysis.",
    stack: ['PostgreSQL', 'Tableau', 'Excel'],
    link: 'https://github.com/lvarshitha7/Netflix_data_analysis.git',
    image: '/netflix_data_analysis.jpg',
  },
  {
    featured: true,
    title: 'Electric Vehicle Data Analysis Dashboard',
    description: "Developed an interactive Tableau dashboard analyzing 150K+ electric vehicle records across manufacturers, model years, and states. Visualized key KPIs including total vehicles, BEV vs PHEV distribution, and average electric range using dynamic charts and geographic maps.",
    stack: ['Tableau', 'Excel'],
    link: 'https://github.com/lvarshitha7/EV-Data-Analysis.git',
    image: '/ev_vehicles.jpeg',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <InteractiveCard className="bg-secondary/30 overflow-hidden p-6">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Image Section - Left Side */}
        {project.image && (
          <div className="relative w-full lg:w-[450px] h-48 lg:h-56 flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        )}
        
        {/* Content Section - Right Side */}
        <div className="flex flex-col w-full gap-4">
          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-base leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-sm font-semibold">Tech Stack:</span>
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-code">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Button */}
          <div className="pt-4">
            <Button asChild variant="outline" size="lg">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </InteractiveCard>
  );
};


export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
            <p className="mt-4 text-muted-foreground">
              A selection of projects where I've applied my skills to build practical solutions.
            </p>
        </div>

        <div className="mt-12 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
