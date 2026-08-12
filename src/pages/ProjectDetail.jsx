import { NavLink, useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import projects from "../data/projects";
import useProjectDetailAnimation from "../hooks/useProjectDetailAnimation";



const ProjectDetail = () => {

  const container = useRef(null);
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  const project = projects.find(
    (item) => item.slug === slug
  );

  useProjectDetailAnimation(container);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#111] px-5 text-[#f5f5f3]">
        <div className="text-center">
          <p className="font-mono text-xs text-white/40">
            404
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            Project not found
          </h1>

          <NavLink
            to="/"
            className=" mt-8 inline-block border border-white/20 px-5 py-3 font-mono text-xs transition-colors hover:border-white"
          >
            ← BACK TO HOME
          </NavLink>
        </div>
      </main>
    );
  }


  return (
    <main
      ref={container}
      className="min-h-screen overflow-hidden bg-[#111] text-[#f5f5f3]"
    >
      {/* ================= HEADER ================= */}

      <header
        className=" flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12 "
      >
        <NavLink
          data-project-back
          to="/"
          className="
            font-mono
            text-xs
            tracking-widest
            transition-opacity
            hover:opacity-50
          "
        >
          ← BACK
        </NavLink>

        <span
          data-project-meta
          className="font-mono text-xs text-white/40"
        >
          {project.year}
        </span>
      </header>

      {/* ================= HERO ================= */}

      <section
        className="px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28"
      >
        <p
          data-project-meta
          className=" font-mono text-[10px] tracking-[0.15em] text-white/40 sm:text-xs"
        >
          {project.category}
        </p>

        <h1
          data-project-title
          className=" mt-5 max-w-7xl break-words text-[clamp(4rem,12vw,11rem)] font-black leading-[0.82] tracking-[-0.07em]"
        >
          {project.title}
        </h1>

        <p
          data-project-description
          className=" mt-10 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
        >
          {project.description}
        </p>
      </section>

      {/* ================= IMAGE ================= */}

      <section
        data-project-image
        className="px-5 sm:px-8 lg:px-12"
      >
        <div className="overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            draggable="false"
            className="block h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section
        data-project-overview
        className=" grid gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-12 lg:py-32"
      >
        <p className="font-mono text-[10px] tracking-widest text-white/40">
          01 / OVERVIEW
        </p>

        <p
          className=" max-w-4xl text-xl leading-[1.2] sm:text-2xl lg:text-4xl"
        >
          {project.overview}
        </p>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section
        data-project-tech
        className=" border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <p className="font-mono text-[10px] tracking-widest text-white/40">
          02 / TECHNOLOGIES
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className=" border border-white/15 px-4 py-2 font-mono text-xs text-white/80"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        data-project-features
        className=" border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <p className="font-mono text-[10px] tracking-widest text-white/40">
          03 / FEATURES
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {project.features.map((feature, index) => (
            <div
              key={feature}
              className="border-t border-white/15 pt-4"
            >
              <span className="font-mono text-xs text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-6 text-sm leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LINKS ================= */}

      <section
        data-project-links
        className=" flex flex-wrap gap-3 border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-[#f5f5f3] px-6 py-3 text-xs font-medium text-[#111] transition-opacity hover:opacity-80"
          >
            LIVE PROJECT ↗
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-white/20 px-6 py-3 text-xs transition-colors hover:border-white"
          >
            GITHUB ↗
          </a>
        )}
      </section>

      {/* ================= FOOTER ================= */}

      <footer
        className=" flex items-center justify-between border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12"
      >
        <NavLink
          to="/"
          className=" font-mono text-xs tracking-widest text-white/50 transition-colors hover:text-white"
        >
          ← BACK TO PORTFOLIO
        </NavLink>

        <span className="font-mono text-[10px] text-white/30">
          {project.slug.toUpperCase()}
        </span>
      </footer>
    </main>
  );
};

export default ProjectDetail;