export interface ExperienceEntry {
  type: "work" | "education" | "leadership" | "milestone";
  title: string;
  subtitle: string;
  organization: string;
  location?: string;
  period: string;
  points: string[];
  link?: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  date?: string;
  link?: string;
  description?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    type: "work",
    title: "Data Structures & Algorithms Mentor",
    subtitle: "Technical Mentor",
    organization: "Smart Interviews",
    location: "Hyderabad, India",
    period: "Jan 2026 – Present",
    points: [
      "Mentoring junior computer science engineering students in advanced Data Structures & Algorithms and Java programming.",
      "Conducting problem-solving sessions focusing on time and space complexity, dynamic programming, and graph algorithms.",
      "Guiding students on coding interview strategies, logic building, and debugging techniques."
    ]
  },
  {
    type: "leadership",
    title: "Task Force Lead",
    subtitle: "Student Developers Community (SDC)",
    organization: "Sreenidhi Institute of Science & Technology",
    location: "Hyderabad, India",
    period: "2024 – Present",
    points: [
      "Facilitated technical requirements across cross-functional developer teams and coordinated sprint deliverables using Agile practices.",
      "Organized and hosted hackathons, coding contests, and technical workshops for 300+ students.",
      "Mentored junior contributors on git workflows, collaboration, and building open-source projects."
    ]
  },
  {
    type: "leadership",
    title: "NSS Volunteer",
    subtitle: "Social Action & Community Lead",
    organization: "National Service Scheme (NSS) SNIST Cell",
    location: "Hyderabad, India",
    period: "2023 – Present",
    points: [
      "Conceptualized and executed 16+ community outreach events focused on health awareness, social development, and digital literacy.",
      "Led volunteer logistics and communications, coordinating with local communities and college administrations."
    ]
  }
];

export const certifications: CertificationEntry[] = [
  {
    title: "Smart Coder (Gold)",
    issuer: "Smart Interviews",
    date: "2026",
    link: "https://smartinterviews.in/certificate/b75c7bdc",
    description: "Certified for strong proficiency in Data Structures and Algorithms, advanced problem solving, and Java programming. Demonstrated top-tier reasoning in coding assessments."
  },
  {
    title: "Data Analytics Virtual Experience",
    issuer: "Deloitte (via Forage)",
    date: "2025",
    link: "https://drive.google.com/drive/u/0/my-drive",
    description: "Built interactive Tableau and Excel dashboards, performing data visualization, mapping regional indicators, and presenting data-driven insights."
  }
];
