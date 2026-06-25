// ============================================================
// All portfolio content lives here. Edit this file to update
// copy, links, or data — no need to touch components.
// ============================================================

export const profile = {
  name: "Pratyay Roy",
  role: "Full Stack Software Developer",
  location: "Kolkata, West Bengal, India",
  phone: "8240596130",
  email: "roypratyay.2@gmail.com",
  github: "https://github.com/Hercules0032",
  githubHandle: "Hercules0032",
  linkedin: "https://linkedin.com/in/pratyay-roy-008894270",
  leetcode: "https://leetcode.com/u/Hercules0032",
  quote:
    "An error message isn't a wall blocking your progress. It is a precise roadmap telling you exactly what to fix next.",
  status: "Open to full-time Software Developer roles",
  resumeUrl: "/resume.pdf",
};

export const education = {
  institution: "Techno India University",
  degree: "B.Tech, Computer Science & Engineering (AI/ML)",
  location: "Kolkata, West Bengal",
  start: "June 2022",
  end: "May 2026",
  cgpa: "7.6 / 10 (till 7th semester)",
  coursework: [
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Data Structures & Algorithms",
  ],
};

export type SkillGroup = {
  label: string;
  code: string; // short legend code, blueprint-component-style
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    code: "LANG",
    items: ["Java (Core, Java 21)", "PHP", "Python", "SQL", "TypeScript"],
  },
  {
    label: "Frontend",
    code: "FE",
    items: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript (ES6+)",
      "AJAX",
      "jQuery",
    ],
  },
  {
    label: "Frameworks & Libraries",
    code: "FW",
    items: [
      "Laravel 12",
      "Inertia.js",
      "FastAPI",
      "NumPy",
      "Pandas",
      "OpenCV",
      "MediaPipe",
      "EasyOCR",
      "PyAutoGUI",
      "Matplotlib",
    ],
  },
  {
    label: "Backend & Data",
    code: "BE",
    items: [
      "MySQL",
      "PostgreSQL",
      "Eloquent ORM",
      "Sanctum",
      "Pydantic",
      "HTTP Middleware",
    ],
  },
  {
    label: "Cloud, DevOps & Tools",
    code: "OPS",
    items: ["Microsoft Azure (AZ-900)", "Git", "GitHub", "Postman", "Docker"],
  },
  {
    label: "Core Concepts",
    code: "CS",
    items: [
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Data Structures & Algorithms",
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  type: string;
  date: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    org: "InAmigos Foundation",
    type: "Contract",
    date: "May 1 – May 15, 2026",
    bullets: [
      "Executed a rapid 15-day delivery sprint — codebase auditing, frontend refactoring, and automated production deployment.",
      "Architected and deployed a multi-page web platform using React and Netlify, with modular components and an optimized build pipeline.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  date: string;
  stack: string[];
  bullets: string[];
  link?: string;
  linkLabel?: string;
  placeholderLink?: boolean;
  pinned?: boolean; // shown on the pinned projects board
};

export const projects: Project[] = [
  {
    id: "meditrack",
    name: "MediTrack",
    tagline: "Hospital & Clinic Management System",
    date: "June 2026",
    stack: ["PHP", "Laravel 13", "Sanctum", "MySQL", "Blade", "Tailwind CSS"],
    bullets: [
      "Architected a role-based Hospital Management System in Laravel 13 with Sanctum — 3 role-specific dashboards across 6 Eloquent models and a full REST API with end-to-end CRUD coverage over 5+ resource endpoints.",
      "Integrated the openFDA Drug Label API into the prescription workflow for real-time lookup across 100K+ indexed drug records; automated Mailable notifications on appointment confirmation and prescription dispatch, cutting manual communication overhead by 100%.",
      "Enforced 3-layer role middleware with custom server-side validation and a bilingual (EN/BN) i18n system; built a patient medical-report upload pipeline supporting PDF/JPG/PNG with persistent MySQL storage.",
    ],
    link: "https://github.com/Hercules0032/meditrack",
    linkLabel: "View source",
    pinned: true,
  },
  {
    id: "tempo",
    name: "Tempo",
    tagline: "Disposable Temporary Email",
    date: "Feb 2026",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Bootstrap",
      "React-Bootstrap",
      "mail.tm API",
      "JavaScript",
    ],
    bullets: [
      "A privacy-focused, frontend-only web app that gives users an instant throwaway email inbox — no registration required.",
      "Auto-generates a mailbox on load, copies the address in one click, and live-polls for incoming mail, rendering full HTML emails in a clean reader.",
      "Integrates the key-less mail.tm API entirely client-side — with auto-refresh, message deletion, refresh-safe persistence via localStorage, and an animated aurora/glassmorphism dark UI.",
    ],
    link: "https://github.com/Hercules0032/tempo",
    linkLabel: "View source",
    pinned: true,
  },
  {
    id: "hercules",
    name: "Hercules",
    tagline: "Gesture-Controlled Virtual Mouse",
    date: "Dec 2025",
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI", "MySQL"],
    bullets: [
      "A real-time, touchless HCI system that controls the mouse, clicks, system volume, and the web browser purely through hand gestures captured by a webcam.",
      "Index-finger tracking drives a smoothed virtual cursor via a recursive low-pass filter; a thumb–index pinch handles clicks and volume; an open palm launches the browser.",
      "Gesture detection is scale-invariant — measured relative to palm size — and debounced with time-based cooldowns, while every action is logged to a MySQL audit table with graceful fallback if the DB is offline.",
    ],
    link: "https://github.com/Hercules0032/gesture-controlled-virtual-mouse",
    linkLabel: "View source",
    pinned: true,
  },
  {
    id: "nutriscan",
    name: "NutriScan",
    tagline: "Health Data Processing Platform",
    date: "October 2025",
    stack: ["Python", "FastAPI", "PostgreSQL", "EasyOCR", "React", "Pydantic"],
    bullets: [
      "Designed a normalized SQL relational schema with Pydantic-driven validation and optimized indexing — cutting health-trend data retrieval time by 25% across 50+ medical test formats.",
      "Built a React frontend integrating FastAPI's auto-generated OpenAPI endpoints to deliver real-time health-trend visualizations and streamline API responses.",
    ],
    link: "https://github.com/Hercules0032",
    linkLabel: "View source",
    pinned: true,
  },
  {
    id: "voice-vision-assistant",
    name: "Live Multimodal Assistant",
    tagline: "Real-time Voice & Vision AI Assistant",
    date: "2026",
    stack: ["FastAPI", "Gemini Live API", "WebSockets", "AudioWorklet", "React"],
    bullets: [
      "Built a production-ready real-time multimodal assistant on a dual-WebSocket proxy architecture, streaming low-latency audio and video between client and the Gemini Live API.",
      "Implemented AudioWorklet-based audio capture and processing for smooth, interruption-tolerant voice conversations in the browser.",
      "Shipped a webcam-integrated frontend so the assistant can see and respond to live visual context alongside speech, in real time.",
    ],
    placeholderLink: true,
    linkLabel: "Add repo link",
  },
];

// Live Deployments — links out to your hosted apps (Vercel / Netlify / Render).
// `mode: "iframe"` embeds a live preview; `mode: "screenshot"` shows a static
// placeholder card with a link out. Fill in `url` and flip `configured: true`
// once each project is actually deployed.
export type Deployment = {
  projectId: string; // must match a Project.id above
  platform: "Vercel" | "Netlify" | "Render";
  url: string;
  mode: "iframe" | "screenshot";
  configured: boolean;
};

export const deployments: Deployment[] = [
  {
    projectId: "tempo",
    platform: "Vercel",
    url: "https://tempo-pi-two.vercel.app/",
    mode: "iframe",
    configured: true,
  },
];

export const certifications = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    file: "/Microsoft Azure.png",
  },
  {
    name: "Cybersecurity",
    issuer: "Campus Technology, Times of India Group",
    file: "/CybersecurityCampus Technology, Times of India Group.jpeg",
  },
  {
    name: "TCS iON Career Edge",
    issuer: "Tata Consultancy Services",
    file: "/TCS ION.pdf",
  },
  {
    name: "Technothon IoT Exposition 2025",
    issuer: "Technothon",
    file: "/technothon iot exposition.jpg",
  },
  {
    name: "Technothon AI Unleashed",
    issuer: "Technothon",
    file: "/technothon AI Unleashed.pdf",
  },
  {
    name: "All India NCAT (AINCAT)",
    issuer: "AINCAT",
    file: "/AINCAT.pdf",
  },
];

// Chronological journey — mixes education, hackathons, experience and
// projects using only dates confirmed on the resume (plus the two
// hackathon milestones added below).
export type LogEntry = {
  date: string;
  sort: number; // YYYYMM for ordering
  title: string;
  detail: string;
};

export const journey: LogEntry[] = [
  {
    date: "JUN 2022",
    sort: 202206,
    title: "Started B.Tech, CSE (AI/ML)",
    detail: "Techno India University, Kolkata",
  },
  {
    date: "APR 2025",
    sort: 202504,
    title: "Built an IoT intruder-detection system",
    detail:
      "Technothon — IoT Exposition. A LiDAR + ESP32-CAM rig for home intrusion detection, with a C++ firmware and an Android Studio companion app.",
  },
  {
    date: "OCT 2025",
    sort: 202510,
    title: "Shipped NutriScan",
    detail:
      "FastAPI + React health-data platform — showcased at Technothon: AI Unleashed.",
  },
  {
    date: "MAY 2026",
    sort: 202605,
    title: "Frontend Developer, InAmigos Foundation",
    detail: "15-day contract sprint — React, Netlify",
  },
  {
    date: "MAY 2026",
    sort: 202605,
    title: "Graduated B.Tech, CSE (AI/ML)",
    detail: "CGPA 7.6 / 10 (till 7th semester)",
  },
  {
    date: "JUN 2026",
    sort: 202606,
    title: "Architected MediTrack",
    detail: "Laravel 13 hospital management system",
  },
].sort((a, b) => a.sort - b.sort);

// Stats pulled directly from resume bullets, used as dimension-line callouts.
export const stats = [
  { value: "100K+", label: "drug records indexed (MediTrack)" },
  { value: "25%", label: "faster data retrieval (NutriScan)" },
  { value: "5+", label: "REST endpoints, full CRUD (MediTrack)" },
  { value: "15", label: "day delivery sprint (InAmigos)" },
];
