import { useRef } from "react";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

import useIntroAnimation from "../hooks/useIntroAnimation";

const Home = () => {
  const container = useRef(null);

  useIntroAnimation(container);

  return (
    <div
      ref={container}
      className="min-h-screen bg-[#111] text-[#f5f5f3]"
    >
      <Loader />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Home;