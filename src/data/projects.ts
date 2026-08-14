export interface CaseStudy {
  problem: string;
  solution: string;
  features: string[];
  architecture?: string;
  technology: string;
  contribution: string;
  challenges: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Software Engineering" | "DevOps & Cloud" | "Data Analytics";
  description: string;
  stack: string[];
  link: string;
  liveLink?: string;
  image?: string;
  featured: boolean;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "k8s-autoscaler",
    title: "K8s Cluster Autoscaler with AWS ASG",
    category: "DevOps & Cloud",
    description: "Designed a self-healing Kubernetes Cluster Autoscaler on AWS using Auto Scaling Groups, enabling dynamic node provisioning in response to real-time workload demand.",
    stack: ["Kubernetes", "AWS EC2", "Auto Scaling Groups", "Docker", "Node.js", "k6"],
    link: "https://github.com/lvarshitha7/Multi-Region-K8s-Deployment-on-AWS-main",
    image: "/k8s-cluster-autoscaler.png",
    featured: true,
    caseStudy: {
      problem: "Static Kubernetes clusters suffer from resource bottlenecks during traffic spikes and over-provisioning costs during idle periods. Standard auto-scaling solutions can have slow warm-up times, leading to dropped requests.",
      solution: "Implemented a self-healing Kubernetes Cluster Autoscaler coupled with AWS Auto Scaling Groups (ASG) and Horizontal Pod Autoscaler (HPA) to scale nodes and pods dynamically in response to traffic conditions.",
      features: [
        "Dynamic node provisioning based on pending pods and cluster resource request thresholds",
        "Horizontal Pod Autoscaling (HPA) targeting CPU and memory metrics to scale pods horizontally",
        "Load testing and traffic simulation scripts using k6 to stress-test cluster response profiles",
        "Self-healing node reclamation when scale-down thresholds are met, minimizing cloud spending"
      ],
      technology: "Kubernetes control plane, AWS EC2 instances, AWS Auto Scaling Groups, Docker containerization, Node.js scripts for metric collection, and k6 for performance load testing.",
      contribution: "Designed the AWS infrastructure parameters, set up custom IAM roles, configured the Cluster Autoscaler deployment manifest, and developed simulation load test suites using k6.",
      challenges: "Configuring the balance between HPA scale-up and ASG instance warm-up speeds. Resolved this by optimizing the Kubernetes scheduler configurations and using pre-warmed instance pools.",
      outcome: "Achieved zero-downtime scaling under simulated traffic spikes of up to 10,000 requests/sec. Node capacity expanded dynamically within 90 seconds of request spikes and scaled down gracefully post-peak."
    }
  },
  {
    id: "smartlytics",
    title: "Smartlytics – BI Platform",
    category: "Software Engineering",
    description: "Engineered a full-stack analytics platform that transforms raw CSV/Excel datasets into interactive dashboards, eliminating manual reporting effort and integrating Gemini AI for smart KPI summaries.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Chart.js"],
    link: "https://github.com/lvarshitha7/Smartlytics", // Fallback github link
    liveLink: "https://smartlytics.vercel.app/", // Placeholder
    image: "/smartlytics.png",
    featured: true,
    caseStudy: {
      problem: "Non-technical business users frequently struggle to convert raw Excel or CSV files into readable visualizations, relying on slow, manual reporting cycles that delay data-driven decisions.",
      solution: "Created a full-stack dashboard builder that ingests spreadsheet files, parses columns, stores clean states in MongoDB, and presents charts. Integrated Google Gemini AI to auto-interpret data and write narrative digests.",
      features: [
        "Dynamic drag-and-drop CSV/Excel file parser and clean database ingestion",
        "Interactive charts (Bar, Line, Pie, Radar) built on a responsive canvas",
        "Gemini AI integration that analyzes uploaded datasets and drafts descriptive insights",
        "Custom sharing links to export dashboard cards into standalone reports"
      ],
      technology: "React.js for modular UI, Express/Node.js backend for server routes, MongoDB for document storage, Gemini API (Google AI SDK) for analytics summaries, and Tailwind CSS for styles.",
      contribution: "Built the entire React charting dashboard, integrated the Gemini AI insight prompts, designed database schemas in MongoDB, and handled file upload buffering.",
      challenges: "Handling large CSV files with messy headers. Implemented robust client-side validation and backend parsing middleware to normalize dates and numeric values prior to ingestion.",
      outcome: "Successfully reduced the time required to build and interpret business reports by an estimated 60%. Users can upload a dataset and receive automated chart layout suggestions within 5 seconds."
    }
  },
  {
    id: "roast-resume",
    title: "Roast Resume – AI Resume Reviewer",
    category: "Software Engineering",
    description: "Engineered a full-stack MERN application that accepts resume uploads, performs real-time AI analysis using Gemini, and generates structured feedback on ATS score, formatting, and content quality.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "PDF-parse"],
    link: "https://github.com/lvarshitha7/Roast-Resume",
    liveLink: "https://roast-resume.netlify.app/",
    image: "/roast-resume.png",
    featured: true,
    caseStudy: {
      problem: "Job seekers often face rejection from automated Applicant Tracking Systems (ATS) due to poor resume formatting, missing keywords, or weak description bullets, with no clear feedback on why they were rejected.",
      solution: "Developed an AI resume analyzer that dissects PDF text content, evaluates it against standard professional criteria, and uses Gemini AI to give granular formatting, content, and ATS score feedback.",
      features: [
        "Secure PDF document uploading, extraction, and string mapping on the server",
        "Granular assessment engine scoring ATS matching, action verb usage, and grammar structure",
        "AI-driven suggestion block detailing exact improvements for specific roles",
        "Progress tracking dashboard to save history and compare scores over time"
      ],
      technology: "MERN Stack (MongoDB, Express, React, Node) combined with the Gemini API for intelligence and PDF-parse for reliable text extraction.",
      contribution: "Implemented the React user interface, designed custom prompts for structured JSON responses from Gemini, set up security headers for uploads, and deployed to production.",
      challenges: "Extracting readable structured text from complex, multi-column resume PDFs. Resolved this by building a custom text-cleansing pipeline on the backend before running AI prompts.",
      outcome: "Engineered a highly responsive web tool that returns a detailed resume report card within 6 seconds. Deployed to production, serving real-time reviews with zero memory leaks."
    }
  },
  {
    id: "churn-analysis",
    title: "Customer Churn Analysis",
    category: "Data Analytics",
    description: "Analyzed customer churn data using SQL Server (SSMS) for extraction and Python for exploratory analysis, building interactive Power BI dashboards to drive data-driven retention strategies.",
    stack: ["Python", "SQL Server (SSMS)", "Power BI", "Pandas", "Matplotlib"],
    link: "https://github.com/lvarshitha7/Churn_Analysis.git",
    image: "/churn_analysis.png",
    featured: false,
    caseStudy: {
      problem: "A telecom provider encountered rising customer cancellation rates, with no visual representation of key indicators showing why, when, or which demographic segments were churning.",
      solution: "Aggregated database churn records, performed cleansing and exploratory analysis in Python, and designed a multi-page Power BI dashboard connecting demographic risk factors to contract terms.",
      features: [
        "SQL extraction scripts featuring complex JOINs and aggregations to structure churn states",
        "Exploratory Data Analysis (EDA) in Google Colab evaluating correlation matrices and outliers",
        "Interactive Power BI reports showcasing churn by contract length, payment method, and tenure",
        "Data-driven predictive indicators highlight high-risk customers for retention campaigns"
      ],
      technology: "SQL Server (SSMS) for database storage and queries, Pandas/Numpy/Matplotlib for data preparation, and Power BI Desktop for dashboard visualization.",
      contribution: "Wrote clean database query scripts, handled data cleaning tasks in Python, and designed the visual layout and user interactions in the Power BI dashboard.",
      challenges: "Handling missing variables and skewed demographic metrics in raw business tables. Utilized imputation techniques in Python to guarantee stable visualization logic.",
      outcome: "Mapped key churn drivers (e.g., month-to-month contracts and fiber optic users having 2.5x higher churn). The dashboard helps direct retention campaigns, targeting high-risk segments to lower churn."
    }
  },
  {
    id: "netflix-growth",
    title: "Explosive Growth of Netflix",
    category: "Data Analytics",
    description: "Developed an interactive Tableau dashboard analyzing 7000+ Netflix movies and TV shows, identifying content distribution trends, genre popularity, and geographic growth patterns.",
    stack: ["PostgreSQL", "Tableau", "Excel"],
    link: "https://github.com/lvarshitha7/Netflix_data_analysis.git",
    image: "/netflix_data_analysis.jpg",
    featured: false,
    caseStudy: {
      problem: "Netflix releases thousands of shows yearly, but streaming data is vast and complex. There is value in tracing their library's evolution, regional distribution, and content ratios to understand programming strategies.",
      solution: "Imported 7000+ title entries into PostgreSQL, executed SQL schemas to structure data, and built an interactive Tableau dashboard exploring content volume growth, rating trends, and regional content distribution.",
      features: [
        "PostgreSQL tables structuring global Netflix content distributions",
        "Tableau maps showcasing production volume across continents and countries",
        "Interactive charts contrasting Movies vs TV Shows growth patterns",
        "Dynamic content category, rating, and launch-year filters"
      ],
      technology: "PostgreSQL database engine, Excel for initial cleanup, and Tableau Public for publishing the interactive maps and dashboards.",
      contribution: "Designed database architecture, executed analytical queries to find top genres, and created the interactive user dashboard in Tableau.",
      challenges: "Standardizing country listings for co-productions. Managed this in Excel and SQL by parsing CSV values into separate clean geographic markers.",
      outcome: "Delivered a clean, interactive dashboard visualizing how Netflix shifted focus to international releases and TV shows. Shared with academic peers to demonstrate database reporting capabilities."
    }
  },
  {
    id: "ev-dashboard",
    title: "Electric Vehicle Market Insights",
    category: "Data Analytics",
    description: "Developed an interactive Tableau dashboard analyzing 150K+ electric vehicle records across manufacturers, model years, and states to visualize key industry KPIs.",
    stack: ["Tableau", "Excel", "Data Visualization"],
    link: "https://github.com/lvarshitha7/EV-Data-Analysis.git",
    image: "/ev_vehicles.jpeg",
    featured: false,
    caseStudy: {
      problem: "The rapid expansion of the Electric Vehicle (EV) market leaves manufacturers and researchers with millions of raw state registration lines, missing a unified macro-view of brand dominance and battery range trends.",
      solution: "Cleaned a dataset of 150,000+ EV registration lines in Excel, created relational mapping files, and configured a Tableau dashboard highlighting brand distribution, BEV vs PHEV splits, and range growth.",
      features: [
        "Registration density maps displaying EV distribution by state and county",
        "Bar and line charts showing EV growth over the last decade",
        "KPI cards highlighting total registrations, BEV/PHEV count, and average range",
        "Interactive filters allowing users to drill down by specific manufacturers (Tesla, Nissan, etc.)"
      ],
      technology: "Tableau for dashboard delivery and Excel for data verification, cleansing, and pivot tables.",
      contribution: "Cleaned the raw registry data, established KPI formulas, built the visual components in Tableau, and formatted worksheets for maximum visual clarity.",
      challenges: "Representing high-density geographic coordinates without performance lag. Solved this by grouping data at the state/county level to optimize Tableau's rendering times.",
      outcome: "Created a production-ready dashboard mapping manufacturer dominance (such as Tesla's market share curve) and range evolution. Deployed on Tableau Public for industry research."
    }
  }
];
