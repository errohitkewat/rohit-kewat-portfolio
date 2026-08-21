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

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const project = projects[projectIndex];

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

  const nextProject = projects[(projectIndex + 1) % projects.length];

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
          to="/#work"
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
          {String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </header>

      {/* ================= HERO ================= */}

      <section
        className="px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24"
      >
        <div
          data-project-meta
          className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.15em] text-white/40 sm:text-xs"
        >
          <span>{project.category}</span>
          <span className="h-px w-8 bg-white/25" />
          <span>{project.year}</span>
          <span className="h-px w-8 bg-white/25" />
          <span>{project.status.toUpperCase()}</span>
        </div>

        <h1
          data-project-title
          className=" mt-6 max-w-7xl break-words text-[clamp(3.5rem,11vw,10rem)] font-black leading-[0.84] tracking-[-0.07em]"
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

      {/* ================= INFO STRIP ================= */}

      <section
        data-project-info
        className=" grid grid-cols-2 gap-y-8 border-b border-white/10 px-5 py-12 sm:grid-cols-4 sm:px-8 lg:px-12"
      >
        {[
          { label: "ROLE", value: project.role },
          { label: "YEAR", value: project.year },
          { label: "TIMELINE", value: project.timeline },
          { label: "STATUS", value: project.status },
        ].map((item) => (
          <div key={item.label}>
            <p className="font-mono text-[9px] tracking-widest text-white/35 sm:text-[10px]">
              {item.label}
            </p>

            <p className="mt-2 text-sm font-medium text-white/85 sm:text-base">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* ================= OVERVIEW ================= */}

      <section
        data-project-overview
        className=" grid gap-6 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:px-12 lg:py-28"
      >
        <p className="font-mono text-[10px] tracking-widest text-white/40">
          01 / OVERVIEW
        </p>

        <p
          className=" max-w-4xl text-xl leading-[1.3] tracking-[-0.01em] sm:text-2xl lg:text-4xl"
        >
          {project.overview}
        </p>
      </section>

      {/* ================= CHALLENGE / SOLUTION ================= */}

      <section
        data-project-challenge
        className=" grid gap-10 border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-28"
      >
        <div>
          <p className="font-mono text-[10px] tracking-widest text-white/40">
            THE CHALLENGE
          </p>

          <h3 className="mt-6 text-2xl font-bold leading-[1.15] tracking-[-0.03em] sm:text-3xl">
            Making it stand out — and hold up.
          </h3>

          <p className="mt-6 max-w-md text-sm leading-[1.7] text-white/60 sm:text-base">
            {project.challenge}
          </p>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-14">
          <p className="font-mono text-[10px] tracking-widest text-white/40">
            THE SOLUTION
          </p>

          <h3 className="mt-6 text-2xl font-bold leading-[1.15] tracking-[-0.03em] sm:text-3xl">
            Simple where it matters.
          </h3>

          <p className="mt-6 max-w-md text-sm leading-[1.7] text-white/60 sm:text-base">
            {project.solution}
          </p>
        </div>
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
              className=" border border-white/15 px-4 py-2 font-mono text-xs text-white/80 transition-colors duration-300 hover:border-white/50"
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
          03 / KEY FEATURES
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {project.features.map((feature, index) => (
            <div
              key={feature}
              className="border-t border-white/15 pt-4"
            >
              <span className="font-mono text-xs text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-6 text-sm leading-relaxed text-white/80">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEARNINGS ================= */}

      <section
        data-project-learnings
        className=" border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <p className="font-mono text-[10px] tracking-widest text-white/40">
          04 / WHAT I LEARNED
        </p>

        <div className="mt-10 flex max-w-4xl flex-col gap-6">
          {project.learnings.map((learning, index) => (
            <p
              key={learning}
              className="flex gap-5 text-base leading-[1.5] text-white/70 sm:text-lg"
            >
              <span className="mt-3 h-px w-6 shrink-0 bg-white/30" />
              {learning}
            </p>
          ))}
        </div>
      </section>

      {/* ================= LINKS ================= */}

      <section
        data-project-links
        className=" flex flex-wrap items-center gap-3 border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-[#f5f5f3] px-7 py-4 text-xs font-medium text-[#111] transition-opacity hover:opacity-80"
          >
            VIEW LIVE PROJECT ↗
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" border border-white/20 px-7 py-4 text-xs transition-colors hover:border-white"
          >
            VIEW SOURCE ON GITHUB ↗
          </a>
        )}
      </section>

      {/* ================= NEXT PROJECT ================= */}

      <NavLink
        data-project-next
        to={`/projects/${nextProject.slug}`}
        className=" group block border-t border-white/10 px-5 py-20 transition-colors duration-300 hover:bg-[#181818] sm:px-8 sm:py-24 lg:px-12"
      >
        <p className="font-mono text-[10px] tracking-widest text-white/40">
          NEXT PROJECT
        </p>

        <div className="mt-6 flex items-end justify-between gap-6">
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.06em] text-white/40 transition-colors duration-300 group-hover:text-white">
            {nextProject.title}
          </h2>

          <span className="mb-2 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg transition-transform duration-300 group-hover:translate-x-1 sm:flex">
            →
          </span>
        </div>
      </NavLink>

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
