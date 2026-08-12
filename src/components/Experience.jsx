import { useRef } from "react";
import useExperienceAnimation from "../hooks/useExperienceAnimation";

const experiences = [
  {
    year: "2026",
    role: "Freelance Developer",
    company: "Independent",
    description: "Building modern websites and web applications for clients and small businesses.",
  },
  {
    year: "2026",
    role: "Frontend Development Intern",
    company: "TFP Technologies",
    description: "Worked on frontend development and built responsive web interfaces using modern technologies.",
  },
  {
    year: "2026 — Present",
    role: "Software Engineering",
    company: "Self Directed",
    description: "Learning full-stack development, building projects and exploring modern web technologies.",
  },
];


const Experience = () => {

  const container = useRef(null);
  useExperienceAnimation(container);

  
  return (
    <section
      ref={container}
      id="experience"
      data-experience
      className=" relative border-b border-white/10 min-h-screen overflow-hidden bg-[#111] px-5 py-24 text-[#f5f5f3] sm:px-8 sm:py-28 "
    >
      {/* Header */}

      <div
        data-experience-header
        className="mb-20"
      >
        <p className="font-mono text-[10px] tracking-[0.12em] sm:text-xs">
          04 / EXPERIENCE
        </p>

        <h2
          className=" mt-4 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-8xl "
        >
          Experience.
        </h2>
      </div>

      {/* Experience List */}

      <div className="mx-auto max-w-6xl">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.role}-${experience.company}`}
            data-experience-item
            className=" grid grid-cols-1 gap-6 border-t border-white/15 py-10 md:grid-cols-[120px_1fr_1.5fr] md:gap-10 md:py-12"
          >
            {/* Year */}

            <div>
              <p className="font-mono text-xs text-white/50">
                {experience.year}
              </p>
            </div>

            {/* Role */}

            <div>
              <h3 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                {experience.role}
              </h3>

              <p className="mt-2 font-mono text-xs text-white/50">
                {experience.company}
              </p>
            </div>

            {/* Description */}

            <div>
              <p className="max-w-xl text-sm leading-[1.6] text-white/65 sm:text-base">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom */}

      <div
        className=" absolute bottom-6 left-5 right-5 flex justify-between font-mono text-[8px] tracking-[0.1em] text-white/50 sm:left-8 sm:right-8 sm:text-[10px]"
      >
        <span>CAREER / EXPERIENCE</span>

        <span>
          {String(experiences.length).padStart(2, "0")} ENTRIES
        </span>
      </div>
    </section>
  );
};

export default Experience;