import { Project, Experience, SkillCategory, Station } from './types';

export const MY_NAME = "Khairol 'Izzul Firdaus bin Khairol Hisam";
export const MY_ROLE = "Tech Project Coordinator & Junior PM";
export const MY_LOCATION = "Petaling Jaya, Selangor, Malaysia";

export const PROJECTS: Project[] = [
  {
    id: 'mphs-sticker',
    title: 'e-Stiker OKU MPHS',
    role: 'Project Manager & Developer',
    shortDescription: 'Online OKU sticker application system for Majlis Perbandaran Hulu Selangor.',
    fullDescription: 'PROBLEM: Manual application process was slow and required physical visits.\n\nROLE: Managed the entire SDLC, client liaison with MPHS officers, and led development.\n\nTECH: PHP, MySQL, Bootstrap.\n\nOUTCOME: Reduced processing time by 60% and eliminated need for physical queues.',
    tags: ['PHP', 'MySQL', 'Government'],
    category: 'Government'
  },
  {
    id: 'smart-ac',
    title: 'SmartAC Vehicle Training Unit',
    role: 'Project Manager & Developer',
    shortDescription: 'AR and IoT based training unit for TVET automotive air conditioning.',
    fullDescription: 'PROBLEM: Politeknik students lacked interactive visualizations for internal AC components.\n\nROLE: Coordinated hardware assembly and software integration.\n\nTECH: IoT (ESP32), Unity (AR), C++.\n\nOUTCOME: Deployed to 3 polytechnics, improving student engagement scores.',
    tags: ['IoT', 'AR', 'Education'],
    category: 'IoT & Hardware'
  },
  {
    id: 'eduzen',
    title: 'EduZen Learning Assistant',
    role: 'Product & Project Lead',
    shortDescription: 'AI app that generates notes, summaries and quizzes from study material.',
    fullDescription: 'PROBLEM: Students struggle to condense vast amounts of lecture material.\n\nROLE: Product strategy, roadmap planning, and AI prompt engineering supervision.\n\nTECH: React, OpenAI API, Firebase.\n\nOUTCOME: 500+ pilot users within first month of beta launch.',
    tags: ['AI', 'React', 'SaaS'],
    category: 'AI & Data'
  },
  {
    id: 'eco-air',
    title: 'EcoAirDrive Monitor',
    role: 'Developer',
    shortDescription: 'Real-time temperature and CO/CO2 monitoring system.',
    fullDescription: 'PROBLEM: Lack of affordable environmental monitoring for logistics.\n\nROLE: Firmware development and dashboard creation.\n\nTECH: IoT, MQTT, Dashboarding.\n\nOUTCOME: Prototype accepted for further funding.',
    tags: ['IoT', 'Hardware'],
    category: 'IoT & Hardware'
  },
  {
    id: 'emotion-rec',
    title: 'Emotion Recognition System',
    role: 'AI Developer',
    shortDescription: 'Facial emotion detection using TensorFlow and OpenCV.',
    fullDescription: 'PROBLEM: Need for non-intrusive feedback in user testing.\n\nROLE: Model training and implementation.\n\nTECH: Python, TensorFlow, OpenCV.\n\nOUTCOME: 85% accuracy on test datasets.',
    tags: ['AI', 'Python'],
    category: 'AI & Data'
  },
  {
    id: 'sme-inv',
    title: 'SME Inventory System',
    role: 'Full Stack Dev',
    shortDescription: 'Custom inventory management for local Malaysian SMEs.',
    fullDescription: 'PROBLEM: Excel sheets were prone to error and data loss.\n\nROLE: Full stack development and deployment.\n\nTECH: Laravel, Vue.js.\n\nOUTCOME: Streamlined stock tracking for 3 local businesses.',
    tags: ['Web App', 'Business'],
    category: 'Web Apps'
  }
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
      'AR Development'
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
    id: 'soft',
    title: 'Soft Skills',
    skills: [
      'Leadership',
      'Public Speaking',
      'Technical Writing',
      'Mentoring',
      'Problem Solving',
      'Critical Thinking',
      'Team Collaboration',
      'Time Management',
      'Adaptability',
      'Creativity'
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'cofounder',
    role: 'Co-founder & Project Manager',
    company: 'Software Solutions Startup',
    period: '2022 - Present',
    description: 'Leading a small team of 5 to deliver custom software solutions for government and SME clients.'
  },
  {
    id: 'freelance',
    role: 'Freelance Developer & Coordinator',
    company: 'Self-employed',
    period: '2020 - 2022',
    description: 'Managed timelines and deliverables for various web development projects.'
  },
  {
    id: 'intern',
    role: 'QA Intern',
    company: 'Razer Inc.',
    period: '2019',
    description: 'Conducted rigorous software and hardware testing protocols.'
  },
  {
    id: 'shopee',
    role: 'Desk Administrator',
    company: 'ShopeeFood',
    period: '2021',
    description: 'Managed logistical operations and driver support tickets.'
  }
];

export const JOURNEY_STATIONS: Station[] = [
  {
    id: 'school',
    title: 'School & Robotics',
    subtitle: 'The Beginning',
    year: '2018',
    points: ['Tokoh Pelajar Lelaki 2018', 'World Robot Olympiad 2nd Runner Up'],
    iconType: 'school'
  },
  {
    id: 'matric',
    title: 'Matriculation',
    subtitle: 'Foundation',
    year: '2019',
    points: ['KMPK', 'President of Peer Assisted Learning (PAL)'],
    iconType: 'users'
  },
  {
    id: 'uni',
    title: 'UTM Life',
    subtitle: 'Bachelor of Computer Science',
    year: '2020 - 2023',
    points: ['Software Engineering Major', 'President JKM KDOJ', 'Deans List'],
    iconType: 'school'
  },
  {
    id: 'projects',
    title: 'Real World Projects',
    subtitle: 'Getting Hands Dirty',
    year: '2022 - 2023',
    points: ['Deployed e-Stiker MPHS', 'Built SmartAC for Politeknik'],
    iconType: 'code'
  },
  {
    id: 'ai',
    title: 'AI & Innovation',
    subtitle: 'Pushing Boundaries',
    year: '2023 - Present',
    points: ['ZIVA Project', 'Varsity Challenge Finalist', 'Deriv Chatbot'],
    iconType: 'rocket'
  },
  {
    id: 'future',
    title: 'Next Step',
    subtitle: 'Open to Opportunities',
    year: 'Now',
    points: ['Looking for Junior PM roles', 'Ready to lead tech teams'],
    iconType: 'award'
  }
];
