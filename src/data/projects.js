
import skymartImage from "../assets/projects/skymart-image.png";
import titanAestheticsImage from "../assets/projects/gym-aesthetic.png"
import yogalinImage from "../assets/projects/yogalin-image.png";

const projects = [
  {
    slug: "titan-aesthetics",
    title: "Titan Aesthetics",
    category: "FITNESS",
    year: "2026",
    role: "Full Development",
    timeline: "4 Weeks",
    status: "Live",
    imageUrl: titanAestheticsImage,
  
    description:
      "A modern multi-page gym website designed for Titan Aesthetics, featuring programs, trainers, membership plans and a complete inquiry experience.",
  
    overview:
      "Titan Aesthetics is a marketing website for a local gym that presents the brand, training programs, coaches, membership options and gym information through a bold editorial interface. The project was designed to give the gym a professional digital presence and make it easier for potential members to explore its services.",
  
    challenge:
      "The challenge was to design a visually strong fitness website while keeping the information architecture clear across multiple pages. The website needed to communicate programs, trainers, membership pricing and contact information without making the experience feel overloaded.",
  
    solution:
      "I built a multi-page React SPA using reusable UI components and centralized content management. React Router handles navigation, Redux Toolkit manages shared UI state, React Hook Form provides form validation, and Framer Motion adds smooth scroll reveals and transitions throughout the experience.",
  
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Redux Toolkit",
      "Framer Motion",
      "React Hook Form",
    ],
  
    features: [
      "Multi-page responsive gym website",
      "Filterable training programs catalogue",
      "Trainer profiles and program details",
      "Membership plans with monthly and annual pricing toggle",
      "FAQ and contact inquiry form",
      "Embedded Google Maps location",
      "Newsletter subscription and form validation",
    ],
  
    learnings: [
      "Centralizing business content makes a multi-page website easier to maintain and update.",
      "Reusable UI components create a more consistent design system and speed up development.",
    ],
  
    github: "Private Repo",
    live: "https://gym-website-eight-steel.vercel.app/",
  },


  {
    slug: "yogalin",
    title: "Yogalin",
    category: "WELLNESS",
    year: "2026",
    role: "Full Development",
    timeline: "3 Weeks",
    status: "Live",
    imageUrl: yogalinImage,
  
    description:
      "A modern and calming yoga studio website designed to help visitors explore classes, programs, journal content and book sessions with ease.",
  
    overview:
      "Yogalin is a fully responsive multi-page yoga studio experience built around mindful living. The website combines studio information, classes, programs, journal content and a seamless booking experience into a calm and visually polished interface.",
  
    challenge:
      "The challenge was to create a visually engaging website with rich animations and multiple pages without making the experience feel distracting or heavy. The interface needed to support booking interactions and complex navigation while preserving the calm and mindful character of a yoga brand.",
  
    solution:
      "I developed a responsive React application with reusable components, centralized state management and smooth page transitions. Framer Motion handles animations, Redux Toolkit manages UI state such as the booking modal, and Lenis creates a refined smooth-scrolling experience.",
  
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "React Router",
      "Lenis",
    ],
  
    features: [
      "Multi-page responsive yoga studio website",
      "Classes and programs browsing",
      "Interactive class booking modal",
      "Journal and blog-style content sections",
      "Smooth scrolling and page transitions",
      "Custom cursor, preloader and scroll progress indicator",
    ],
  
    learnings: [
      "Complex animations need to support the user experience instead of competing with the content.",
      "Centralized state management makes shared UI interactions easier to maintain across multiple pages.",
    ],
  
    github: "Private Repo",
    live: "https://yoga-website-demo-dun.vercel.app/",
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



