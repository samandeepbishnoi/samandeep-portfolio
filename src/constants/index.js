import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  python,
  nextjs,
  careercoach,
  cartly,
  memories,
  emotion,
  vidchat,
  truefeedback,
  jpmc,
  solsphere,
  vercel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Frontend Engineering",
    icon: web, 
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "AI/ML Integration",
    icon: mobile, 
  },
  {
    title: "Full-Stack Web Apps",
    icon: creator, 
  },
];

const technologies = [
  // 🔷 Frontend Core
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript (ES6+)", icon: javascript },
  { name: "TypeScript", icon: typescript },

  // ⚛️ Frontend Frameworks & Styling
  { name: "React.js", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },

  // 🧠 Backend & APIs
  { name: "Node.js", icon: nodejs },

  // (Text-only skill groupings are shown elsewhere; icons here are the ones we have)

  // 🛢️ Databases
  { name: "MongoDB", icon: mongodb },

  // 🤖 AI/ML
  { name: "Python", icon: python },


  // 🧰 Dev Tools
  { name: "Git & GitHub", icon: git },
  { name: "Docker", icon: docker },
];



const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Solsphere.AI (GRC Startup)",
  icon: solsphere,
    iconBg: "#0C1E3B",
    date: "June 2025 – Aug 2025",
    points: [
      "Designed and implemented a risk assessment and management module, enabling automated compliance reports and real-time status tracking for internal stakeholders.",
      "Developed backend validation logic for key GRC workflows (promotion, termination, and role-change events), preventing invalid access states and improving policy enforcement accuracy.",
      "Debugged and tested production-grade backend services with extensive data validation, improving system stability and reducing runtime issues.",
    ],
    link: "",
  },
  {
    title: "Open Source Contribution",
    company_name: "Vercel/commerce",
  icon: vercel,
    iconBg: "#111827",
    date: "June 2025",
    points: [
      "Identified and addressed an SSR crash in the Shopify provider by improving error handling in shopifyFetch() and getCart().",
      "Collaborated with maintainers through code review and incorporated feedback on the proposed solution.",
    ],
    link: "https://github.com/vercel/commerce",
  },
  {
    title: "Software Engineering Job Simulation",
    company_name: "JPMorgan Chase & Co. (Forage)",
    icon: jpmc,
    iconBg: "#0C1E3B",
    date: "June 2025",
    points: [
      "Completed the J.P. Morgan Virtual Experience Program on Forage.",
      "Built a feature-rich interface for tracking and updating client portfolios.",
      "Integrated REST APIs for incentive processing and real-time user balance updates using Spring Boot.",
      "Demonstrated proficiency in Java and SQL in a production-like simulation environment.",
    ],
    link:"https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_xpzjStwuCXMcsvr7T_1750928790419_completion_certificate.pdf",
  },
];


const projects = [
  {
    name: "AI Career Coach",
    description:
      "A full-stack AI-powered career planning platform that generates resumes, cover letters, interview questions, and industry insights using Google's Gemini API. Includes secure auth and user management via Clerk.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "geminiapi", color: "blue-text-gradient" },
    ],
    image: careercoach,
    source_code_link: "https://github.com/samandeepbishnoi/sensai",
  },
  {
    name: "Emotion Detector",
    description:
      "A deep learning-based emotion recognition app that detects facial expressions via uploaded images or live webcam using OpenCV and CNN. Built with Python and TensorFlow.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "cnn", color: "pink-text-gradient" },
      { name: "flask", color: "blue-text-gradient" },
    ],
    image: emotion,
    source_code_link: "https://github.com/samandeepbishnoi/emotion_detector",
  },
  {
    name: "VidChat",
    description:
      "A real-time video conferencing app supporting HD audio/video calls, chat, and notifications. Built using WebRTC, Socket.IO, Clerk, and Next.js.",
    tags: [
      { name: "webrtc", color: "blue-text-gradient" },
      { name: "socketio", color: "green-text-gradient" },
      { name: "nextjs", color: "pink-text-gradient" },
      { name: "clerk", color: "blue-text-gradient" },
    ],
    image: vidchat,
    source_code_link: "https://github.com/samandeepbishnoi/VidChat",
  },
  {
    name: "Cartly",
    description:
      "Modern Shopify product page app built with React and GraphQL. Supports real-time cart, variant selection, product filtering, and responsive UI with animations and dark mode.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "shopify", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "graphql", color: "blue-text-gradient" },
    ],
    image: cartly,
    source_code_link: "https://github.com/samandeepbishnoi/Cartly",
  },
  {
    name: "Memories",
    description:
      "A MERN-based social media app where users can post, edit, like, and search memory posts. Features JWT authentication, image uploads, and tag-based filters.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "jwt", color: "blue-text-gradient" },
    ],
    image: memories,
    source_code_link: "https://github.com/samandeepbishnoi/memories",
  },
  {
    name: "True Feedback",
    description:
      "Anonymous feedback platform with secure auth (NextAuth), MongoDB storage, and Resend email delivery. Enables private, encrypted messaging with full anonymity.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "nextauth", color: "pink-text-gradient" },
      { name: "resendapi", color: "blue-text-gradient" },
    ],
    image: truefeedback,
    source_code_link: "https://github.com/samandeepbishnoi/TrueFeedback",
  },
];

export { services, technologies, experiences, projects };
