import forgeImage from "../assets/projects/forge-site-image.png";
import planoraImage from "../assets/projects/productivity-app-image.png";
import skymartImage from "../assets/projects/skymart-image.png";

const projects = [
  {
    slug: "forge",
    title: "Forge Site",
    category: "IT STARTUP",
    year: "2026",
    imageUrl: forgeImage,

    description:
      "A modern startup website focused on creating a clean, professional and interactive digital experience.",

    overview:
      "Forge is a modern web experience designed for an IT startup. The goal was to create a strong visual identity while keeping the interface simple, responsive and easy to navigate.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
    ],

    features: [
      "Responsive design",
      "Interactive animations",
      "Modern UI",
      "Reusable components",
    ],

    github: "https://github.com/errohitkewat/forge-site",
    live: "https://forge-site-sage.vercel.app/",
  },

  {
    slug: "planora",
    title: "Planora",
    category: "PRODUCTIVITY",
    year: "2026",
    imageUrl: planoraImage,

    description:
      "A productivity dashboard designed to help users organize tasks, goals and their daily workflow.",

    overview:
      "Planora combines task management, daily planning and productivity tools into a single dashboard.",

    technologies: [
      "HTML",
      "CSS",
      "DOM",
      "OpenWeather API",
    ],

    features: [
      "Todo management",
      "Daily planner",
      "Daily goals",
      "Pomodoro timer",
      "Weather module",
    ],

    github: "https://github.com/errohitkewat/my-cohort3-assignments/tree/main/productivity%20app",
    live: "https://productivity-app-tan.vercel.app/",
  },

  {
    slug: "skymart",
    title: "SkyMart",
    category: "E-COMMERCE",
    year: "2026",
    imageUrl: skymartImage,

    description:
      "A modern e-commerce frontend built with React with a focus on product browsing and a clean shopping experience.",

    overview:
      "SkyMart is an e-commerce project focused on reusable React components, product fetching and state management.",

    technologies: [
      "React",
      "Tailwind CSS",
      "React Query",
      "Data Routing",
      "Json Products API"
    ],

    features: [
      "Product listing",
      "Product categories",
      "Shopping cart",
      "Responsive interface",
    ],

    github: "https://github.com/errohitkewat/cohort-3-react-tasks/tree/main/react-task-1-skymart",
    live: "https://cohort-3-react-tasks.vercel.app/",
  },
];

export default projects;