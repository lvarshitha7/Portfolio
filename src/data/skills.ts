export interface Skill {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases" | "DevOps & Cloud" | "Tools & Platforms";
  level?: string;
}

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python", "C", "SQL"]
  },
  {
    title: "Web & Backend",
    skills: ["React.js", "Node.js", "Express.js", "REST APIs", "GraphQL", "Tailwind CSS", "HTML5", "CSS3","bcrypt", "JWT"]
  },
  {
    title: "AI & Data",
 skills: [
    "Data Analytics",
    "Microsoft Excel",
    "Data Visualization",
    "AI Agents"
  ] },
  {
    title: "Databases & Infra",
    skills: ["MongoDB", "MySQL",  "Docker", "Kubernetes", "AWS (EC2, ASG)", ]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Tableau", "Power BI"]
  }
];
