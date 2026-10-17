export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  degreeBadge: string;
  degreeFull: string;
  college: string;
  university: string;
  specialization: string;
  availability: string;
  email: string;
  github: string;
  githubUser: string;
  linkedin: string;
  linkedinUser: string;
  resume: string;
  avatar: string;
  lead: string;
  bio: string[];
}

export interface Fact {
  val: string;
  label: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
  link?: string;
  accent?: 'cyan' | 'violet' | 'green' | 'white';
}

export interface Project {
  id: string;
  num: string;
  title: string;
  titleHtml?: string;
  category: string;
  flag?: string;
  role: string;
  descriptionHtml: string;
  tags: string[];
  demo?: string;
  demoLabel?: string;
  source?: string;
  sourceLabel?: string;
  specs: ProjectSpec[];
  pipeline?: string[];
  isFeatured?: boolean;
}

export interface AlsoBuiltProject {
  id: string;
  num: string;
  badge: string;
  title: string;
  description: string;
  capabilities: string;
  source?: string;
}

export interface SkillCategory {
  title: string;
  skills: string;
}

export interface JobExperience {
  title: string;
  when: string;
  company: string;
  loc: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface EducationItem {
  years: string;
  degree: string;
  institution: string;
  courses: string[];
}

export interface PaletteItem {
  code: string;
  label: string;
  hint: string;
  href: string;
}

export const profile: Profile = {
  name: 'Rajesh Borkar',
  role: 'AI/ML ENGINEER',
  tagline: 'AI / ML ENGINEER.',
  location: 'Pune, India',
  degreeBadge: 'PUNE, INDIA // BE AI&DS (2026)',
  degreeFull: 'Bachelor of Engineering in Artificial Intelligence & Data Science',
  college: 'Shree Ramchandra College of Engineering (SRCOE)',
  university: 'Savitribai Phule Pune University (SPPU)',
  specialization: 'MACHINE LEARNING & RAG',
  availability: 'AVAILABLE FOR WORK',
  email: 'rajeshborkar04@gmail.com',
  github: 'https://github.com/raviraj12b',
  githubUser: '@raviraj12b',
  linkedin: 'https://www.linkedin.com/in/rajeshborkar01',
  linkedinUser: 'rajeshborkar01',
  resume: './Rajesh_Borkar_Resume_2026.pdf',
  avatar: './avatar.jpg',
  lead: 'Final-year engineering student building machine learning models, retrieval-augmented generation (RAG) systems, and data-driven applications. From data cleaning and model exploration to deployment.',
  bio: [
    'I’m Rajesh Borkar, an AI & Data Science engineering student in Pune, India. I focus on building real-world AI applications: inference APIs, document intelligence tools, and time-series forecasting systems.',
    'During my internships, I’ve worked on sales forecasting, environmental analytics, generative AI integrations, and responsive web interfaces. I am interested in the complete engineering cycle: inspecting data quality, selecting appropriate algorithms, evaluating edge-case failure modes, and building interfaces users can rely on.',
    'Currently seeking internships and entry-level AI/ML engineering roles where I can contribute to production-grade software and machine learning systems.',
  ],
};

export const tickerText =
  'MACHINE LEARNING ✦ RETRIEVAL PIPELINES (RAG) ✦ GENERATIVE AI ✦ TIME SERIES FORECASTING ✦ PYTHON & PYTORCH ✦ VECTOR SEARCH ✦ STREAMLIT & REACT';

export const facts: Fact[] = [
  { val: '06+', label: 'Selected Projects Built' },
  { val: 'RAG', label: 'Vector Intelligence' },
  { val: '02', label: 'ML Internships Completed' },
  { val: '100%', label: 'Open Source Repositories' },
];

export const manifestList = [
  { href: '#rag-project', num: '01', title: 'AI Document Intelligence', tag: 'RAG / VECTOR SEARCH' },
  { href: '#student-project', num: '02', title: 'Student Performance Predictor', tag: 'PREDICTIVE ML' },
  { href: '#sales-project', num: '03', title: 'Sales Forecasting Pipeline', tag: 'TIME SERIES' },
  { href: '#pdf-project', num: '04', title: 'AI PDF Summarizer', tag: 'STREAMLIT / LLM' },
  { href: '#aqi-project', num: '05', title: 'AQI Air Quality Forecasting', tag: 'ENVIRONMENTAL ML' },
  { href: '#tool-project', num: '06', title: 'Data Health Inspector', tag: 'DATA TOOLING' },
];

export const featuredProject: Project = {
  id: 'rag-project',
  num: '01',
  flag: 'FEATURED RAG SYSTEM',
  category: 'DOCUMENT INTELLIGENCE',
  title: 'AI Document Intelligence',
  titleHtml: 'AI Document<br>Intelligence',
  role: 'Retrieval-Augmented Generation / Vector Search',
  descriptionHtml:
    'A document question-answering application built around <b>retrieval-augmented generation (RAG)</b>. Parses uploaded documents, indexes vector embeddings, retrieves accurate context, and generates responses linked directly back to exact source passages.',
  tags: ['RAG', 'LLMs', 'Python', 'Vector Search', 'Embeddings', 'FastAPI', 'React'],
  demo: 'https://docuai-virid.vercel.app',
  demoLabel: 'Live Demo ↗',
  source: 'https://github.com/raviraj12b/ai-document-intelligence',
  sourceLabel: 'View Code ↗',
  specs: [
    { label: 'Architecture', value: 'Retrieval-Augmented Generation (RAG)' },
    { label: 'Vector Index', value: 'FAISS Semantic Index' },
    { label: 'LLM Backend', value: 'Groq Inference API' },
    { label: 'Application Stack', value: 'FastAPI + React.js' },
  ],
  isFeatured: true,
};

export const rowProjects: Project[] = [
  {
    id: 'student-project',
    num: '02',
    category: 'MACHINE LEARNING',
    flag: 'PREDICTIVE ML',
    title: 'Student Performance Predictor',
    role: 'Predictive ML / Regression Modeling',
    descriptionHtml:
      'A machine learning application built to predict student academic outcomes based on demographic and historical learning attributes, evaluating regression model metrics and feature importances with a deployed Flask web interface.',
    tags: ['Machine Learning', 'Scikit-learn', 'Python', 'Flask', 'Regression'],
    demo: 'https://student-performance-predictor-41op.onrender.com',
    demoLabel: 'Render App ↗',
    source: 'https://github.com/raviraj12b/student-performance-predictor',
    sourceLabel: 'GitHub Repo ↗',
    specs: [
      {
        label: 'Live Demo',
        value: 'Render App ↗',
        link: 'https://student-performance-predictor-41op.onrender.com',
        accent: 'cyan',
      },
      {
        label: 'Repository',
        value: 'GitHub Repo ↗',
        link: 'https://github.com/raviraj12b/student-performance-predictor',
        accent: 'violet',
      },
      { label: 'Domain', value: 'Education / ML' },
      { label: 'Modeling Pipeline', value: 'Scikit-learn Preprocessing & Regression' },
    ],
  },
  {
    id: 'sales-project',
    num: '03',
    category: 'ROSSMANN STORE SALES',
    flag: 'TIME SERIES',
    title: 'Sales Forecasting Pipeline',
    role: 'Time Series / Retail Analytics',
    descriptionHtml:
      'Rossmann sales forecasting project covering exploratory data analysis, feature engineering, baseline linear regression comparison, Random Forest optimization, and recursive multi-day forecasting evaluation with a seven-page Streamlit dashboard.',
    tags: ['Python', 'Pandas', 'Random Forest', 'Streamlit', 'Scikit-learn'],
    pipeline: ['Data Cleaning', 'Feature Prep', 'Random Forest', 'Recursive Predict'],
    source: 'https://github.com/raviraj12b/Sales_Forecasting',
    sourceLabel: 'View Repo ↗',
    specs: [
      {
        label: 'Code Repository',
        value: 'View Repo ↗',
        link: 'https://github.com/raviraj12b/Sales_Forecasting',
        accent: 'cyan',
      },
      { label: 'Model Type', value: 'Random Forest Regressor' },
      { label: 'Dashboard', value: 'Seven-Page Streamlit App' },
      { label: 'Key Insight', value: 'Recursive error accumulation analysis' },
    ],
  },
  {
    id: 'pdf-project',
    num: '04',
    category: 'STREAMLIT APP',
    flag: 'DOCUMENT PROCESSING',
    title: 'AI PDF Summarizer',
    role: 'Document Processing / Generative AI',
    descriptionHtml:
      'A Streamlit-powered document tool allowing users to upload PDF documents and quickly generate concise summaries, key points, and executive overviews using large language models, with PDF/TXT export options.',
    tags: ['Streamlit', 'Python', 'LLMs', 'PyPDF', 'Groq'],
    demo: 'https://smartpdfsummarizer.streamlit.app',
    demoLabel: 'Streamlit App ↗',
    source: 'https://github.com/raviraj12b/pdf_summarizer',
    sourceLabel: 'pdf_summarizer ↗',
    specs: [
      {
        label: 'Live Interface',
        value: 'Streamlit App ↗',
        link: 'https://smartpdfsummarizer.streamlit.app',
        accent: 'cyan',
      },
      {
        label: 'GitHub Code',
        value: 'pdf_summarizer ↗',
        link: 'https://github.com/raviraj12b/pdf_summarizer',
        accent: 'violet',
      },
      { label: 'Inference Provider', value: 'Groq LLM Engine' },
      { label: 'Output Formats', value: 'PDF & TXT Export' },
    ],
  },
  {
    id: 'aqi-project',
    num: '05',
    category: 'ENVIRONMENTAL ANALYTICS',
    flag: 'INTERNSHIP PROJECT',
    title: 'AQI Air Quality Forecasting',
    role: 'Environmental Analytics / Time Series',
    descriptionHtml:
      'An environmental analytics and air quality index (AQI) time-series forecasting project built during my machine learning internship, analyzing seasonal pollution trends and predicting future air quality metrics.',
    tags: ['Time Series', 'Data Analysis', 'Environment', 'Python', 'Pandas'],
    source: 'https://github.com/raviraj12b/AQI-Forecast-Environmental-Analytics',
    sourceLabel: 'View Repo ↗',
    specs: [
      {
        label: 'Repository',
        value: 'View Repo ↗',
        link: 'https://github.com/raviraj12b/AQI-Forecast-Environmental-Analytics',
        accent: 'cyan',
      },
      { label: 'Internship', value: 'Machine Learning Intern (Codtech)' },
      { label: 'Domain', value: 'Environmental Analytics' },
      { label: 'Analysis Type', value: 'Seasonal Trend Forecasting' },
    ],
  },
];

export const alsoBuiltProject: AlsoBuiltProject = {
  id: 'tool-project',
  num: '06',
  badge: '06 // DATA TOOLING',
  title: 'Data Health Inspector',
  description:
    'A Python utility for automatically analyzing missing values, summary statistics, feature skewness, zero-variance features, and IQR outliers before training ML pipelines.',
  capabilities:
    'Generates automated visual diagnostic reports (4-panel dashboard), detects high-correlation redundancies, and recommends data scaling transformations tailored for tabular models.',
  source: 'https://github.com/raviraj12b',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning',
    skills:
      'Python · Scikit-Learn · PyTorch · Pandas · NumPy · Feature Engineering · Regression · Classification · Random Forest',
  },
  {
    title: 'Generative AI & RAG',
    skills:
      'Large Language Models (LLMs) · Vector Databases · Document Chunking & Retrieval · Embeddings · LangChain · Prompt Tuning · FAISS · Groq',
  },
  {
    title: 'Development & Web',
    skills:
      'Streamlit · React.js · JavaScript · HTML5 · CSS3 · REST APIs · FastAPI · Flask · Data Dashboards',
  },
  {
    title: 'Tools & Environment',
    skills:
      'Git · GitHub · Linux Shell · Bash · Google Colab · VS Code · Vercel · Render',
  },
];

export const experienceList: JobExperience[] = [
  {
    title: 'Machine Learning Intern',
    when: 'INTERNSHIP (JUL – SEP 2026)',
    company: 'Codtech IT Solutions Private Limited',
    loc: 'Sales & Environmental Analytics · Remote',
    summary:
      'Worked on time-series forecasting projects including Rossmann sales prediction and Air Quality Index (AQI) environmental analytics.',
    bullets: [
      'Cleaned, transformed, and engineered temporal features for high-cardinality retail datasets. Built a Rossmann sales forecasting pipeline and seven-page Streamlit dashboard.',
      'Trained Random Forest models, audited features for leakage, and analyzed recursive multi-day forecasting error degradation vs frozen history.',
      'Built diagnostic notebooks, summary reports, and evaluation plots for retail sales and AQI environmental trends.',
    ],
    tags: ['Python & Pandas', 'Time Series Forecasting', 'Scikit-learn', 'Streamlit'],
  },
  {
    title: 'AI Engineer Intern',
    when: 'TWO-MONTH INTERNSHIP (DEC 2025 – JAN 2026)',
    company: 'TechGeekConnect Technologies LLP',
    loc: 'Techgeek Connect Technology · Pune',
    summary:
      'Collaborated on Python software development, generative AI application building, data science experiments, and frontend interface integration.',
    bullets: [
      'Developed Python scripts and generative AI workflows for processing text and structured data.',
      'Implemented React.js frontend components connected to backend data services and LLM inference APIs.',
      'Utilized Git, GitHub, Linux environment, and shell scripting in a team development workflow.',
    ],
    tags: ['Python & React.js', 'Generative AI', 'LLM Applications', 'Streamlit'],
  },
];

export const educationList: EducationItem[] = [
  {
    years: '2023 — 2027',
    degree: 'Bachelor of Engineering in Artificial Intelligence & Data Science',
    institution:
      'Shree Ramchandra College of Engineering (SRCOE) / Savitribai Phule Pune University (SPPU), Pune, India',
    courses: [
      'Machine Learning',
      'Data Structures & Algorithms',
      'Database Systems (SQL)',
      'Deep Learning',
      'Generative AI & Retrieval Pipelines',
      'Data Analytics & Feature Engineering',
    ],
  },
];

export const paletteItems: PaletteItem[] = [
  { label: 'Top / Hero', hint: 'Section', href: '#top', code: '00' },
  { label: 'Selected Work', hint: 'Section', href: '#work', code: '01' },
  { label: 'AI Document Intelligence', hint: 'RAG System', href: '#rag-project', code: '01.1' },
  { label: 'Student Performance Predictor', hint: 'Machine Learning', href: '#student-project', code: '01.2' },
  { label: 'Sales Forecasting Pipeline', hint: 'Time Series', href: '#sales-project', code: '01.3' },
  { label: 'AI PDF Summarizer', hint: 'Streamlit App', href: '#pdf-project', code: '01.4' },
  { label: 'AQI Environmental Forecasting', hint: 'Internship Work', href: '#aqi-project', code: '01.5' },
  { label: 'Data Health Inspector', hint: 'Data Tooling', href: '#tool-project', code: '01.6' },
  { label: 'About & Tech Stack', hint: 'Section', href: '#about', code: '02' },
  { label: 'Experience Timeline', hint: 'Section', href: '#experience', code: '03' },
  { label: 'Academic Education', hint: 'Section', href: '#education', code: '04' },
  { label: 'Contact & Channels', hint: 'Section', href: '#contact', code: '05' },
  { label: 'Download Resume (PDF)', hint: 'Document', href: './Rajesh_Borkar_Resume_2026.pdf', code: 'RES' },
  { label: 'GitHub Profile (@raviraj12b)', hint: 'External Link', href: 'https://github.com/raviraj12b', code: 'EXT' },
  { label: 'LinkedIn Profile', hint: 'External Link', href: 'https://www.linkedin.com/in/rajeshborkar01', code: 'EXT' },
  { label: 'Send Email', hint: 'Mailto', href: 'mailto:rajeshborkar04@gmail.com', code: 'EXT' },
];

export const projects = [featuredProject, ...rowProjects];

