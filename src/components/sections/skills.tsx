import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, BrainCircuit, Component, BookOpen, Database, BarChart3, LineChart, PieChart, Cloud, GitBranch, Github, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Databases & Tools",
    icon: <Component className="h-8 w-8 text-primary" />,
    skills: [
      { name: "MySQL", icon: <Database className="h-4 w-4" /> },
      { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
      { name: "SQL Server (SSMS)", icon: <Database className="h-4 w-4" /> },
      { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
      { name: "Google Colab", icon: <Cloud className="h-4 w-4" /> },
      { name: "Jupyter Notebook", icon: <BookOpen className="h-4 w-4" /> }
    ],
  },
  {
    title: "Data Analysis & Libraries",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Pandas", icon: <BarChart3 className="h-4 w-4" /> },
      { name: "NumPy", icon: <Cpu className="h-4 w-4" /> },
      { name: "Matplotlib", icon: <LineChart className="h-4 w-4" /> },
      { name: "Seaborn", icon: <BarChart3 className="h-4 w-4" /> }
    ],
  },
  {
    title: "Data Visualization",
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Power BI", icon: <BarChart3 className="h-4 w-4" /> },
      { name: "Tableau", icon: <PieChart className="h-4 w-4" /> },
      { name: "Excel", icon: <BarChart3 className="h-4 w-4" /> }
    ],
  },
  {
    title: "Platforms & Version Control",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Git & GitHub", icon: <Github className="h-4 w-4" /> },
      { name: "Data Structures & Algorithms", icon: <BookOpen className="h-4 w-4" /> },
      { name: "DBMS", icon: <Database className="h-4 w-4" /> }
    ],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Python", icon: <Code className="h-4 w-4" /> },
      { name: "SQL", icon: <Database className="h-4 w-4" /> },
      { name: "Java", icon: <Code className="h-4 w-4" /> }
    ],
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-muted-foreground">
            My technical toolkit, constantly being refined and expanded.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-secondary/30 transition-all hover:bg-secondary/50 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={typeof skill === 'string' ? skill : skill.name} className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-code text-muted-foreground">
                      {typeof skill !== 'string' && <span className="text-primary">{skill.icon}</span>}
                      {typeof skill === 'string' ? skill : skill.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
