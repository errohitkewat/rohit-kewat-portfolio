import { useRef } from "react";
import useAboutAnimation from "../hooks/useAboutAnimation";

const About = () => {

  const container = useRef(null);
  useAboutAnimation(container);

  
  return (
    <section
      ref={container}
      id="about"
      data-about
      className="relative border-b border-white/10 min-h-screen w-full overflow-hidden bg-[#111] px-5 py-20 text-[#f5f5f3] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* SECTION HEADER */}
      <div
        data-about-label
        className="mb-14 sm:mb-16 lg:mb-20"
      >
        <p className="font-mono text-[10px] tracking-[0.12em] text-white/70 sm:text-xs">
          02 / ABOUT
        </p>
        <h1 className=" mt-4 text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.06em] ">
          About Me.
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[240px_minmax(0,1fr)]">
        
        {/* LEFT INFO */}
        <div
          data-about-small
          className="font-mono text-[10px] leading-[1.7] text-white/45 sm:text-xs"
        >
          <div>SOFTWARE ENGINEER</div>
          <div>FULL STACK DEVELOPER</div>
          <div>INDIA</div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="min-w-0 w-full">
          
          {/* ABOUT TEXT */}
          <div className="w-full max-w-[1100px]">
            <p
              data-about-text
              className=" w-full max-w-full whitespace-normal break-normal text-[clamp(1.5rem,3.5vw,4rem)] font-medium leading-[1.08] tracking-[-0.025em]"
            >
              I'm Rohit, a software engineer focused on building modern,
              interactive and useful digital experiences. I enjoy turning
              ideas into clean interfaces and scalable web applications.
            </p>
          </div>

          {/* DETAILS */}
          <div
            data-about-details
            className=" mt-14 grid w-full grid-cols-1 gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          >
            <div className="min-w-0">
              <p className="mb-2 font-mono text-[10px] tracking-widest text-white/40">
                CURRENTLY
              </p>
              <p className="text-sm text-white/80">
                Building & learning
              </p>
            </div>

            <div className="min-w-0">
              <p className="mb-2 font-mono text-[10px] tracking-widest text-white/40">
                STACK
              </p>
              <p className="break-normal text-sm text-white/80">
                React / Node.js / PostgreSQL
              </p>
            </div>

            <div className="min-w-0">
              <p className="mb-2 font-mono text-[10px] tracking-widest text-white/40">
                INTEREST
              </p>
              <p className="break-normal text-sm text-white/80">
                Web / AI / Products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className=" absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[8px] tracking-widest text-white/40 sm:left-8 sm:right-8 sm:text-[10px] lg:left-12 lg:right-12"
      >
        <span>ABOUT ME</span>
        <span>03</span>
      </div>
    </section>
  );
};

export default About;