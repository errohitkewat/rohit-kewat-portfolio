import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import resume from "../data/resume";

const Resume = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from("[data-resume-reveal]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="resume-page min-h-screen overflow-hidden bg-[#111] px-5 py-16 text-[#f5f5f3] sm:px-8 sm:py-20 lg:px-12"
    >
      {/* TOOLBAR — screen only */}

      <div
        data-resume-reveal
        className="resume-toolbar mx-auto mb-14 flex max-w-6xl items-center justify-between font-mono text-[10px] tracking-[0.12em] text-white/50 sm:text-xs"
      >
        <NavLink to="/" className="transition-opacity hover:opacity-50">
          ← BACK TO PORTFOLIO
        </NavLink>

        <button
          onClick={() => window.print()}
          className="border border-white/20 px-4 py-2 tracking-[0.12em] transition-colors hover:border-white hover:text-white"
        >
          DOWNLOAD PDF ↓
        </button>
      </div>

      {/* HEADER */}

      <header data-resume-reveal className="resume-header mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[0.95] tracking-[-0.05em]">
              {resume.name}
            </h1>

            <p className="mt-3 font-mono text-[11px] tracking-[0.18em] text-white/60 sm:text-xs">
              {resume.title.toUpperCase()} — {resume.location.toUpperCase()}
            </p>
          </div>

          <div className="resume-contact font-mono text-[11px] leading-[2] text-white/60 sm:text-xs">
            <a href={`mailto:${resume.email}`} className="block hover:text-white">
              {resume.email}
            </a>
            <a
              href={resume.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              {resume.github}
            </a>
          </div>
        </div>
      </header>

      {/* SUMMARY */}

      <section
        data-resume-reveal
        className="resume-section mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 border-t border-white/15 pt-10 sm:mt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"
      >
        <h2 className="resume-label font-mono text-[10px] tracking-widest text-white/40">
          SUMMARY
        </h2>

        <p className="max-w-4xl text-xl leading-[1.35] font-medium tracking-[-0.01em] sm:text-2xl lg:text-3xl">
          {resume.summary}
        </p>
      </section>

      {/* EXPERIENCE */}

      <section
        data-resume-reveal
        className="resume-section mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 border-t border-white/15 pt-10 sm:mt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"
      >
        <h2 className="resume-label font-mono text-[10px] tracking-widest text-white/40">
          EXPERIENCE
        </h2>

        <div className="flex flex-col">
          {resume.experience.map((job) => (
            <article
              key={`${job.role}-${job.company}`}
              className="resume-item border-b border-white/10 py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
                  {job.role}
                  <span className="font-normal text-white/50"> — {job.company}</span>
                </h3>

                <p className="font-mono text-[10px] whitespace-nowrap text-white/50 sm:text-[11px]">
                  {job.period}
                </p>
              </div>

              <ul className="mt-2 flex flex-col gap-1">
                {job.points.map((point) => (
                  <li key={point} className="max-w-3xl text-sm leading-[1.55] text-white/70">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section
        data-resume-reveal
        className="resume-section mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 border-t border-white/15 pt-10 sm:mt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"
      >
        <h2 className="resume-label font-mono text-[10px] tracking-widest text-white/40">
          PROJECTS
        </h2>

        <div className="flex flex-col">
          {resume.projects.map((project) => (
            <article
              key={project.name}
              className="resume-item border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-base font-bold tracking-[-0.02em] sm:text-lg">
                  {project.name}
                  <span className="ml-3 font-mono text-[10px] font-normal text-white/50 sm:text-[11px]">
                    {project.stack}
                  </span>
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-link font-mono text-[10px] text-white/50 underline decoration-white/30 underline-offset-4 hover:text-white sm:text-[11px]"
                >
                  {project.link.replace("https://", "")}
                </a>
              </div>

              <p className="mt-1.5 max-w-3xl text-sm leading-[1.55] text-white/70">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}

      <section
        data-resume-reveal
        className="resume-section mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 border-t border-white/15 pt-10 sm:mt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"
      >
        <h2 className="resume-label font-mono text-[10px] tracking-widest text-white/40">
          SKILLS
        </h2>

        <div className="flex flex-col gap-5">
          {resume.skills.map((skill) => (
            <div key={skill.group} className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <p className="w-full font-mono text-[10px] tracking-[0.14em] text-white/40 sm:w-auto">
                {skill.group}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="resume-chip border border-white/15 px-3 py-1.5 font-mono text-[10px] text-white/80 sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}

      <section
        data-resume-reveal
        className="resume-section mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 border-t border-white/15 pt-10 sm:mt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"
      >
        <h2 className="resume-label font-mono text-[10px] tracking-widest text-white/40">
          EDUCATION
        </h2>

        <article className="resume-item">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-base font-bold tracking-[-0.02em] sm:text-lg">
              {resume.education[0].degree}
            </h3>

            <p className="font-mono text-[10px] whitespace-nowrap text-white/50 sm:text-[11px]">
              {resume.education[0].period}
            </p>
          </div>

          <p className="mt-1 text-sm text-white/70">{resume.education[0].school}</p>
        </article>
      </section>

      {/* FOOTER */}

      <footer
        data-resume-reveal
        className="resume-footer mx-auto mt-16 flex max-w-6xl items-center justify-between border-t border-white/15 pt-6 font-mono text-[9px] tracking-[0.14em] text-white/40 sm:text-[10px]"
      >
        <span>{resume.name.toUpperCase()}</span>
        <span>FULL STACK DEVELOPER</span>
      </footer>
    </main>
  );
};

export default Resume;
