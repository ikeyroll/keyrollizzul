import { Project, Experience, SkillCategory, Station } from './types';

const bullet = (lines: string[]) => lines.map(line => `• ${line}`).join('\n');

export const MY_NAME = "Khairol 'Izzul Firdaus bin Khairol Hisam";
export const MY_ROLE = "Tech Project Coordinator & Junior PM";
export const MY_LOCATION = "Petaling Jaya, Selangor, Malaysia";

export const PROJECTS: Project[] = [
  {
    id: 'mphs-sticker',
    title: 'MPHS OKU Sticker Application System',
    role: 'Project Manager & System Developer',
    shortDescription: 'Web platform that digitizes OKU parking sticker applications for Majlis Perbandaran Hulu Selangor.',
    fullDescription: `COLLABORATION: Worked directly with Majlis Perbandaran Hulu Selangor officers to digitize their OKU sticker workflow.

DESCRIPTION: Led the design and build of an online portal that replaces paper forms and manual email processing. Applicants log in, submit forms, upload documents, and track status without calling the council. Officers review, approve, or reject requests inside an admin dashboard, while reporting views highlight applicant distribution by mukim across Hulu Selangor.

FEATURES:
• Applicant portal with authentication, structured forms, and document uploads
• Real-time status tracking for transparency
• Officer dashboard for review, approval, rejection, and audit history
• Reporting module to visualize applications by mukim and spot bottlenecks
• Boundary validation using Hulu Selangor GIS (GeoJSON) so only in-district addresses can submit
• Deployment, task planning, coordination, UAT support, and go-live guidance handled end-to-end

TOOLS & TECHNOLOGIES: TypeScript, Next.js, PostgreSQL, REST APIs, Tailwind CSS, Leaflet/Mapbox with GeoJSON validation, Git & GitHub, RustDesk for secure server access and deployment.`,
    tags: ['Government', 'Web Apps', 'Next.js', 'TypeScript', 'PostgreSQL', 'GIS', 'Leaflet', 'TailwindCSS', 'REST APIs'],
    category: 'Government'
  },
  {
    id: 'smart-ac',
    title: 'SmartAC Vehicle Training Unit',
    role: 'IT Project Manager, System & AI Developer',
    shortDescription: 'A collabration with Politeknik Ungku Omar to make a physical and digital approach toward learning car AC.',
    fullDescription: `PROBLEM STATEMENT: TVET students struggle to grasp the complete flow, troubleshooting steps, and components of car air conditioning systems. Training directly on real vehicles is expensive and risky because repeated mistakes can damage the AC unit.

DESCRIPTION: SmartAC is a dedicated physical training unit that lets students practice automotive AC servicing without touching a real car. It combines hardware instrumentation with guided digital content so learners can see, explore, and repeat procedures safely at a much lower cost.

ROLE & COLLABORATION: Served as IT project manager plus system and AI developer, working closely with Politeknik Ungku Omar (Ipoh, Perak). Met clients to capture needs, scoped the work, coordinated build timelines, assigned tasks to developers/designers, and followed through until deployment.

LEARNING PLATFORM & AI: Designed a supporting web platform that renders the SmartAC unit as a 3D model to visualize refrigerant flow, and added AR overlays so students can inspect components interactively. Built an AI feature that reads classroom facial expressions so educators know when learners are confused, engaged, or comfortable.

IMPACT: SmartAC has been deployed to 11+ Kolej Vokasional campuses across Malaysia, helping instructors deliver consistent AC maintenance training while reducing equipment risk.

TOOLS & TECHNOLOGIES: React, Next.js, Firebase, Node.js, Python backend, Unity (3D/AR), Blender (3D assets), Arduino-class microcontrollers & sensors, OpenCV for emotion detection, Git/GitHub, and a managed cloud hosting platform for deployment.`,
    tags: ['IoT', 'AR', 'AI', 'Government', 'Education', '3D Modeling', 'React', 'Next.js', 'Firebase', 'Unity', 'Node.js', 'Python'],
    category: 'IoT & Hardware'
  },
  {
    id: 'eduzen',
    title: 'EduZen: AI Learning Companion',
    role: 'Team Leader & Lead Developer',
    shortDescription: 'AI-powered study companion that turns student materials into summaries, quizzes, and guided tutoring sessions.',
    fullDescription: `DESCRIPTION: EduZen tackles SDG-aligned education gaps by helping students transform their own notes, PDFs, and images into smarter study aids. The web app cleans uploaded content, extracts text via OCR, and generates summaries, key points, quizzes, and a conversational tutor.

ROLE: Led the team across multiple hackathons, owning product direction and the full-stack implementation. Coordinated UX decisions to keep the interface accessible for non-technical students and parents.

FEATURES:
• Upload notes/PDFs/images for text extraction and cleanup
• AI-generated summaries, key points, and quizzes
• Tutor-style chatbot for follow-up questions
• Screen sharing plus interactive explanations for live-style sessions
• Simple UI/UX for inclusive adoption

ACHIEVEMENTS:
• Varsity Challenge 2025 – Champion
• Google Kitahack 2025 – Top 10 out of 600+ participants

TOOLS & TECHNOLOGIES: Next.js & React frontend, Node.js backend, Firebase Auth & Storage, Google Vision OCR, Gemini models for summarization and quiz generation, Tailwind CSS, Git/GitHub, Netlify hosting.`,
    tags: ['AI', 'Education', 'Next.js', 'React', 'Node.js', 'Firebase', 'OCR', 'Gemini', 'TailwindCSS'],
    category: 'AI & Data'
  },
  {
    id: 'eco-air',
    title: 'EcoAirDive: Real-Time Temp & CO/CO₂ Monitoring System',
    role: 'System Designer & Developer',
    shortDescription: 'Environmental monitoring system built as a final-year project to track indoor temperature, CO, and CO₂ levels.',
    fullDescription: `CONTEXT: Final Year Project focused on improving air-quality visibility for classrooms, labs, and indoor facilities where comfort and safety depend on ventilation.

RESPONSIBILITIES:
• Designed the end-to-end architecture collecting sensor readings and pushing them to a central service
• Defined sensor placement, sampling intervals, and alert thresholds to keep spaces within safe ranges
• Built a mobile-friendly dashboard with interactive charts so staff can view live readings and historical trends
• Structured the data pipeline so the same design can scale from a single unit to multiple rooms or sites

TOOLS & TECHNOLOGIES: Gas and temperature sensors, ESP32 microcontroller with Arduino-style C firmware, WiFi comms to a Node.js backend, time-series database logging, mobile dashboard built with Flutter (plus charting package), Git & GitHub for version control.`,
    tags: ['IoT', 'Sensors', 'Dashboard', 'Node.js', 'Python', 'Embedded'],
    category: 'IoT & Hardware'
  },
  {
    id: 'abg-support',
    title: 'Intelligent Web Application for ABG Decision Support',
    role: 'Researcher, ML Engineer & Full Stack Developer',
    shortDescription: 'Clinical decision support prototype that interprets arterial blood gas (ABG) results and suggests safe treatment steps.',
    fullDescription: `CONTEXT: Master Idea proposal focused on helping medical officers, house officers, medical assistants, and nurses interpret ABG readings quickly and consistently at the point of care.

DESCRIPTION: Connects ABG analyser outputs to a secure web interface where clinicians can review values, acid-base status, and machine-learning-derived interpretations. The ML engine classifies underlying disturbances and proposes next actions using predefined clinical rules plus trained models.

PLANNED FEATURES:
• Secure login and role-based access for clinical staff
• Structured ABG result display highlighting respiratory/metabolic acidosis or alkalosis
• ML model that flags unusual patterns and classifies disturbances
• Recommendation panel reminding users of safety checks and possible interventions
• Audit trail so specialists can review decisions and model behaviour

GOAL: Improve consistency and speed when ABG analysers are moved closer to wards/emergency areas instead of central labs.

TOOLS & TECHNOLOGIES: Python for preprocessing, Pandas for analysis, scikit-learn with gradient boosting, Next.js frontend, Python REST backend, PostgreSQL for de-identified cases with RBAC, deployed to secure cloud/hospital infrastructure.`,
    tags: ['AI', 'Healthcare', 'Decision Support'],
    category: 'AI & Data'
  },
  {
    id: 'vendor-pos',
    title: 'Vendor POS & Ordering System',
    role: 'Product Designer & Full Stack Developer',
    shortDescription: 'Web-based POS prototype that shows small F&B vendors how to digitise ordering without expensive hardware.',
    fullDescription: `DESCRIPTION: Built a working proof-of-concept to demo POS workflows to stalls, cafes, and kiosks. Vendors log in to manage menu items, pricing, and availability, while staff use a simple POS screen to create and manage orders. Order states (new/in-progress/completed) are separated, and basic daily summaries highlight total sales plus item breakdowns.

FEATURES:
• Vendor login to update menus, prices, and availability
• Simple POS interface for creating and managing orders
• Order status board with New/In-Progress/Completed columns
• Daily sales summary with totals and item-level metrics
• Mobile-friendly UI so it runs on tablets or phones instead of large POS terminals

GOAL: Give vendors a clear picture of how digital ordering reduces mistakes, speeds up service, and simplifies end-of-day reconciliation.

TOOLS & TECHNOLOGIES: React + Next.js frontend, Tailwind CSS for responsive UI, RESTful backend API, cloud database for menu + transactions, Git/GitHub, deployed on Vercel/cloud platform.`,
    tags: ['Web Apps', 'POS', 'Next.js', 'React', 'TailwindCSS', 'F&B'],
    category: 'Web Apps'
  },
];

export const SKILLS: SkillCategory[] = [
  {
    id: 'project',
    title: 'Project Management',
    skills: [
      'Agile/Scrum',
      'Product Management',
      'Team Leadership',
      'Stakeholder Communication',
      'Project Planning & Estimation',
      'Requirement Gathering',
      'Risk Management',
      'Documentation',
      'UAT Coordination',
      'Client Communication'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI/ML & Data Science',
    skills: [
      'Keras',
      'OpenCV',
      'TensorFlow/PyTorch',
      'Scikit-learn',
      'NLP (NLTK, spaCy)',
      'Computer Vision',
      'Deep Learning',
      'Machine Learning',
      'N8N',
      'Ai Agent',
      'Neural Networks',
      'Data Analysis',
      'Pandas/NumPy'
    ]
  },
  {
    id: 'tech',
    title: 'Technical',
    skills: [
      'HTML/CSS/JavaScript',
      'TypeScript',
      'React/Next.js',
      'Node.js',
      'Python',
      'C/C#/C++',
      'Java',
      'PHP',
      'SQL/NoSQL',
      'RESTful APIs',
      'GraphQL',
      'WebSockets',
      'Microservices',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'AWS/GCP/Azure'
    ]
  },
  {
    id: 'test-auto',
    title: 'Test Automation',
    skills: [
      'Selenium (Web Testing)',
      'Appium (Mobile Testing)',
      'Test Automation Frameworks',
      'Cross-browser Testing',
      'Mobile Testing',
      'UI/UX Testing',
      'Test Planning',
      'Test Case Design',
      'Bug Reporting',
      'CI/CD Integration'
    ]
  },
  {
    id: 'xr',
    title: 'XR Development',
    skills: [
      'Unity 3D',
      'Unreal Engine',
      'ARKit/ARCore',
      'WebXR',
      'Three.js',
      'A-Frame',
      '3D Modeling (Basics)',
      'VR Development',
      'AR Development',
      'MR Development'
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      'Git/GitHub',
      'Jira',
      'Trello',
      'Notion',
      'Canva',
      'Figma',
      'VS Code',
      'Postman',
      'Docker',
      'Kubernetes',
      'Microsoft 365',
      'Google Workspace'
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Platforms',
    skills: [
      'Laravel',
      '.NET',
      'Frappe',
      'React',
      'Vue.js',
      'Angular',
      'Node.js',
      'Spring Boot',
      'Flask',
      'Express.js',
      'Next.js',
      'Flutter'
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'cofounder',
    role: 'Co-founder / Project Manager',
    company: 'Software Solutions Startup',
    period: 'Sep 2025 - Present',
    description: bullet([
      'Co-founded a small software team serving SMEs and council clients',
      'Scoped workstreams, budgets, and schedules with business stakeholders',
      'Led the team delivering the project from discovery to launch',
      'Monitored progress, cleared blockers, and kept client communication clear',
      'Coordinated documentation, deployment, and post-release support activities'
    ])
  },
  {
    id: 'freelance',
    role: 'Freelance Software Developer',
    company: 'Various clients',
    period: 'Jan 2023 - Aug 2025',
    description: bullet([
      'Delivered websites, landing pages, and lightweight systems for SME clients',
      'Managed projects such as the SmartAC Vehicle Training Unit with Politeknik partners',
      'Captured requirements, mapped user flows, and translated them into build tasks',
      'Produced concise documentation, user guides, and demo scripts for non-technical audiences',
      'Communicated trade-offs and risks early so clients could make informed decisions'
    ])
  },
  {
    id: 'intern',
    role: 'Quality Assurance Intern',
    company: 'Razer Inc',
    period: 'Oct 2024 - Feb 2025',
    description: bullet([
      'Tested new website features across major browsers and devices',
      'Built and executed Selenium regression suites for critical user flows',
      'Logged bugs with clear reproduction steps and re-tested after fixes',
      'Participated in code reviews, stand-ups, and CI pipelines to learn team practices'
    ])
  },
  {
    id: 'tutor',
    role: 'Part Time Tuition Teacher',
    company: 'PT Intelek CG',
    period: 'Oct 2022 - Jun 2024',
    description: bullet([
      'Taught Mathematics and Additional Mathematics to upper-secondary students',
      'Covered Science, Biology, Chemistry, and Physics classes when relief was needed',
      'Prepared lesson plans, revision notes, and practice sets before exam seasons',
      'Broke complex topics into clear steps to help students grasp fundamentals'
    ])
  },
  {
    id: 'shopee',
    role: 'Desk Administrator',
    company: 'ShopeeFood',
    period: 'Aug 2021 - Oct 2021',
    description: bullet([
      'Maintained ShopeeFood rider onboarding data and account records in Excel',
      'Processed account creation requests and ensured documents met compliance checks',
      'Supported rider support lines by resolving account, payment, and access issues',
      'Coordinated with operations teams to keep daily dispatch data accurate'
    ])
  },
  {
    id: 'volunteer',
    role: 'PPV Admin Volunteer',
    company: 'Global Doctor Hospital',
    period: 'May 2021 - Aug 2021',
    description: bullet([
      'Registered and verified vaccine recipients in MySejahtera at KLCC HCO-B',
      'Guided visitors through forms, queue numbers, and screening counters',
      'Helped floor managers monitor capacity, waiting times, and documentation'
    ])
  }
];

export const JOURNEY_STATIONS: Station[] = [
  {
    id: 'school',
    title: 'School & Robotics',
    subtitle: 'The Beginning',
    year: '2014 - 2019',
    points: ['School Life (SPM)','Tokoh Pelajar Lelaki 2018', 'World Robot Olympiad'],
    iconType: 'school'
  },
  {
    id: 'matric',
    title: 'Matriculation',
    subtitle: 'Foundation',
    year: '2020 - 2021',
    points: ['KMPK', 'Lockdown (Covid-19)', 'President of Peer Assisted Learning (PAL)'],
    iconType: 'users'
  },
  {
    id: 'uni',
    title: 'UTM Life',
    subtitle: 'Bachelor of Computer Science',
    year: '2021 - 2025',
    points: ['Degree Life (JB Style)', 'President JKM KDOJ', 'Program Management'],
    iconType: 'school'
  },
  {
    id: 'ai',
    title: 'AI & Innovation',
    subtitle: 'Pushing Boundaries',
    year: '2023 - 2025',
    points: ['Hackathon', 'Conference', 'Exhibtions'],
    iconType: 'rocket'
  },
  {
    id: 'projects',
    title: 'Real World Projects',
    subtitle: 'Getting Hands Dirty',
    year: '2023 - Current',
    points: ['Freelance Work', 'Founded Software Solutions Startup', 'Work with Big name such as MPHS, Politeknik and Razer'],
    iconType: 'code'
  },
  {
    id: 'future',
    title: 'Next Step',
    subtitle: 'Open to Opportunities',
    year: 'Now',
    points: ['Aspiring Project Manager with a technical background', 'Ready to grow in project and product roles'],
    iconType: 'award'
  }
];
