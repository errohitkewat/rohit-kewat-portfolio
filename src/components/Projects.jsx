import { NavLink } from "react-router-dom";
import { useRef } from "react";
import projects from "../data/projects";
import useProjectsAnimation from "../hooks/useProjectsAnimation";



const Projects = () => {

  const container = useRef(null);
  useProjectsAnimation(container);

  
  return (
    <section
      ref={container}
      id="work"
      className=" relative h-screen overflow-hidden border-b border-white/10 bg-[#111] px-5 py-16 text-[#f5f5f3] sm:px-8 sm:py-15 lg:px-12 lg:py-18 "
    >
      {/* HEADER */}

      <div className="flex items-end justify-between">
        <div data-project-label>
          <p className="font-mono text-[10px] tracking-[0.14em] text-white/50 sm:text-xs">
            03 / WORK
          </p>

          <h2
            className=" mt-4 text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.06em]"
          >
            Selected Works.
          </h2>
        </div>

        <p className="hidden max-w-[220px] text-right text-xs leading-relaxed text-white/40 sm:block">
          A selection of things I've built, designed and experimented with.
        </p>
      </div>

      {/* PROJECT SHOWCASE */}

      <div
        className=" relative mx-auto mt-8 h-[55vh] w-full max-w-[1080px] sm:mt-10 sm:h-[52vh] lg:mt-8 lg:h-[65vh]"
      >
        {projects.map((project) => (
          <NavLink
            key={project.slug}
            to={`/projects/${project.slug}`}
            data-project-card
            className=" absolute inset-0 block overflow-hidden rounded-xl bg-[#181818] outline-none sm:rounded-2xl"
          >
            {/* IMAGE */}

            <img
              src={project.imageUrl}
              alt={project.title}
              draggable="false"
              className=" absolute inset-0 h-full w-full object-cover object-top"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-black/10" />

            {/* ARROW */}

            <div
              className=" absolute bottom-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-base backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:bottom-7 sm:right-7 sm:h-11 sm:w-11"
            >
              ↗
            </div>
          </NavLink>
        ))}
      </div>


      {/* FOOTER */}

      <div
        className=" absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[8px] tracking-[0.1em] text-white/35 sm:left-8 sm:right-8 sm:text-[10px] lg:left-12 lg:right-12"
      >
        <span>SELECTED WORK</span>
        <span>03</span>
      </div>
    </section>
  );
};

export default Projects;