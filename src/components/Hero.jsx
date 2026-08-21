import profileImage from "../assets/rohit-profile.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f7f7f5] text-[#111]"
    >

      <div
        data-hero-intro
        className="absolute left-1/2 top-[12%] z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-[clamp(16px,1.8vw,28px)] font-normal"
      >
        <span className="text-xl sm:text-xl">👋</span>
        <span className="text-xl font-medium" >Hey, I'm Rohit and I'm a</span>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[21%] z-10 w-full -translate-x-1/2">
        <div
          data-hero-heading
          className="w-full overflow-hidden text-center text-[clamp(72px,13vw,220px)] font-black leading-[0.78] tracking-[-0.08em] whitespace-nowrap text-[#111]"
        >
          SOFTWARE
        </div>

        <div
          data-hero-heading
          className="w-full overflow-hidden text-center text-[clamp(72px,13vw,220px)] font-black leading-[0.78] tracking-[-0.08em] whitespace-nowrap text-transparent [-webkit-text-stroke:1.5px_#222]"
        >
         DEVELOPER
        </div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 z-[15] flex h-[66vh] -translate-x-1/2 items-end justify-center sm:h-[72vh]"
      >
        <img
          data-hero-image
          src={profileImage}
          alt="Rohit Kewat"
          className="block h-full w-auto max-w-none select-none object-contain grayscale mix-blend-multiply"
          draggable="false"
        />
      </div>

      <div
        data-hero-description
        className="absolute bottom-[20%] left-5 z-[25] w-[170px] text-sm leading-[1.4] sm:left-[10%] sm:w-[250px] sm:text-lg"
      >
        <p>
          Full Stack Developer building modern digital experiences.
        </p>
      </div>

      <div className="absolute bottom-[4%] left-1/2 z-30 flex w-[92%] -translate-x-1/2 gap-4 sm:w-auto sm:gap-5">
        <a
          data-hero-button
          href="#work"
          className="flex flex-1 items-center justify-center gap-3 border border-[#f7f7f5] bg-[#f7f7f5] px-3 py-2 text-[8px] text-[#111] transition-colors duration-300 hover:bg-transparent hover:text-white sm:gap-5 sm:px-5 sm:py-2 sm:text-xs"
        >
          VIEW MY WORK
          <span className="text-base sm:text-md">↗</span>
        </a>

        <a
          data-hero-button
          href="#contact"
          className="flex flex-1 items-center justify-center gap-3 border border-white bg-transparent px-3 py-2 text-[8px] text-white transition-colors duration-300 hover:bg-white hover:text-[#111] sm:gap-5 sm:px-5 sm:py-2 sm:text-xs"
        >
          LET'S WORK TOGETHER
          <span className="text-base sm:text-md ">↗</span>
        </a>
      </div>

      <div
        data-hero-meta
        className="absolute bottom-5 left-5 right-5 z-30 flex justify-between font-mono text-[9px] tracking-[0.1em] sm:left-8 sm:right-8 sm:text-[10px]"
      >
        <span>FULL STACK DEVELOPER</span>
        <span>BASED IN INDIA</span>
      </div>
    </section>
  );
};

export default Hero;



