import forgeImage from "../assets/projects/forge-site-image.png";
import planoraImage from "../assets/projects/productivity-app-image.png";
import skymartImage from "../assets/projects/skymart-image.png";

const projects = [
  {
    slug: "forge",
    title: "Forge Site",
    category: "IT STARTUP",
    year: "2026",
    role: "Design & Development",
    timeline: "3 Weeks",
    status: "Live",
    imageUrl: forgeImage,

    description:
      "A modern startup website focused on creating a clean, professional and interactive digital experience.",

    overview:
      "Forge is a modern web experience designed for an IT startup. The goal was to create a strong visual identity while keeping the interface simple, responsive and easy to navigate.",

    challenge:
      "The startup needed to stand out in a crowded market while communicating trust and professionalism from the very first scroll — without overwhelming visitors with heavy visuals or slow load times.",

    solution:
      "I built a component-driven React architecture with GSAP-powered scroll animations that feel intentional rather than decorative. Every section was designed mobile-first and tuned for performance.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
    ],

    features: [
      "Fully responsive layout across all devices",
      "Scroll-driven interactive animations",
      "Modern, minimal UI system",
      "Reusable component architecture",
    ],

    learnings: [
      "Structuring animations around a timeline keeps motion consistent site-wide.",
      "Mobile-first design decisions early prevent costly rework later.",
    ],

    github: "https://github.com/errohitkewat/forge-site",
    live: "https://forge-site-sage.vercel.app/",
  },

  {
    slug: "planora",
    title: "Planora",
    category: "PRODUCTIVITY",
    year: "2026",
    role: "Full Development",
    timeline: "4 Weeks",
    status: "Live",
    imageUrl: planoraImage,

    description:
      "A productivity dashboard designed to help users organize tasks, goals and their daily workflow.",

    overview:
      "Planora combines task management, daily planning and productivity tools into a single dashboard, so users can organize their entire day without switching between apps.",

    challenge:
      "Productivity tools often fail because they add friction instead of removing it. The challenge was to pack multiple tools — tasks, goals, planner, timer and weather — into one interface that still feels calm and fast.",

    solution:
      "I designed a modular dashboard where each tool lives in its own focused panel. Vanilla JavaScript with clean DOM architecture kept the app lightweight, while the OpenWeather API adds contextual value to daily planning.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "OpenWeather API",
    ],

    features: [
      "Todo management with local persistence",
      "Daily planner with time blocking",
      "Goal tracking system",
      "Pomodoro focus timer",
      "Live weather module via API",
    ],

    learnings: [
      "Working directly with the DOM deepened my understanding of what frameworks abstract away.",
      "API error states matter as much as the happy path.",
    ],

    github: "https://github.com/errohitkewat/my-cohort3-assignments/tree/main/productivity%20app",
    live: "https://productivity-app-tan.vercel.app/",
  },

  {
    slug: "skymart",
    title: "SkyMart",
    category: "E-COMMERCE",
    year: "2026",
    role: "Frontend Development",
    timeline: "3 Weeks",
    status: "Live",
    imageUrl: skymartImage,

    description:
      "A modern e-commerce frontend built with React with a focus on product browsing and a clean shopping experience.",

    overview:
      "SkyMart is an e-commerce project focused on reusable React components, product fetching and state management — simulating the core flows of a real storefront.",

    challenge:
      "E-commerce UIs demand consistency at scale: dozens of product cards, categories and cart interactions must stay perfectly in sync without prop-drilling chaos or duplicated logic.",

    solution:
      "I composed the UI from small reusable components, managed server state with React Query for caching and refetching, and structured routing so category and product views share the same data layer.",

    technologies: [
      "React",
      "Tailwind CSS",
      "React Query",
      "React Router",
      "JSON Products API",
    ],

    features: [
      "Product listing with live data fetching",
      "Category-based browsing",
      "Shopping cart state management",
      "Responsive, accessible interface",
    ],

    learnings: [
      "React Query eliminated most manual loading/error state boilerplate.",
      "Reusability pays off the moment a second page needs the same card.",
    ],

    github: "https://github.com/errohitkewat/cohort-3-react-tasks/tree/main/react-task-1-skymart",
    live: "https://cohort-3-react-tasks.vercel.app/",
  },
];

export default projects;
