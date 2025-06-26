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
  micro,
  jpmc,
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
  {
    title: "Career Essentials in Generative AI",
    company_name: "Microsoft",
    icon: micro,
    iconBg: "#F3F6F9",
    date: "July 2024",
    points: [
      "Gained a strong foundation in Generative AI, including ethical considerations and real-world applications.",
      "Worked on case studies involving Large Language Models and image generation tools.",
      "Skills acquired: Artificial Intelligence (AI), Generative AI, Computer Ethics.",
    ],
    link:"https://www.linkedin.com/learning/certificates/457faeef4fc48b17855b22afc704a28bb52fa7f0c3b391b6b53773cb5c032bb1",
  },
  {
    title: "Career Essentials in Software Development",
    company_name: "Microsoft",
    icon: micro,
    iconBg: "#F3F6F9",
    date: "June 2024",
    points: [
      "Completed a comprehensive course on core software development principles and best practices.",
      "Learned about programming paradigms, version control, testing, and debugging.",
      "Skills acquired: Programming, Software Development.",
    ],
    link:"https://www.linkedin.com/learning/certificates/e666f9b161830c0f73765208a6716fcce8dc1625a79f2698646597050fa8a17f",
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
    deployment_link:"https://sensai-three-beige.vercel.app/",
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
    deployment_link:"https://cartly-omega.vercel.app/",
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
    deployment_link:"https://memories-frontend-z09k.onrender.com/",
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
    deployment_link:"https://github.com/samandeepbishnoi/emotion_detector",
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
    deployment_link:"https://vidchat-0pxf.onrender.com/",
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
    deployment_link:"https://true-feedback-delta-sepia.vercel.app/sign-in",
  },
];

export { services, technologies, experiences, projects };
