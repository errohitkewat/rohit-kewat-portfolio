import { useRef } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import useIntroAnimation from "./hooks/useIntroAnimation";

const App = () => {
  const container = useRef(null);

  useIntroAnimation(container);

  return (
    <div ref={container} className="min-h-screen overflow-hidden bg-[#f7f7f5] font-sans text-[#111]">
      <Loader />

      <main>
        <Hero />

        <section id="work" className="min-h-screen bg-[#111] px-5 py-24 text-[#f7f7f5] sm:px-8">
          <p className="font-mono text-xs tracking-[0.12em]">01 / WORK</p>
          <h2 className="mt-8 max-w-5xl text-6xl font-black tracking-[-0.07em] sm:text-8xl">
            Selected projects.
          </h2>
        </section>

        <section id="about" className="min-h-screen bg-[#f7f7f5] px-5 py-24 sm:px-8">
          <p className="font-mono text-xs tracking-[0.12em]">02 / ABOUT</p>
          <h2 className="mt-8 max-w-5xl text-6xl font-black tracking-[-0.07em] sm:text-8xl">
            Software engineer.
          </h2>
        </section>

        <section id="contact" className="min-h-screen bg-[#111] px-5 py-24 text-[#f7f7f5] sm:px-8">
          <p className="font-mono text-xs tracking-[0.12em]">03 / CONTACT</p>
          <h2 className="mt-8 max-w-5xl text-6xl font-black tracking-[-0.07em] sm:text-8xl">
            Let's build something.
          </h2>
        </section>
      </main>
    </div>
  );
};

export default App;
