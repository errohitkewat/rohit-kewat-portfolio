
const Loader = () => {
  
  return (
    <div
      data-loader
      className="fixed inset-0 z-100 bg-[#111] text-[#f3f3ef] will-change-transform"
    >
      <div className="flex h-full w-full flex-col justify-between px-5 py-6 sm:px-8 sm:py-7">
        <div className="flex justify-between font-mono text-[9px] tracking-[0.08em] sm:text-[11px]">
          <span>ROHIT KEWAT</span>
          <span>PORTFOLIO / 2026</span>
        </div>

        <div className="text-center">
          <div
            data-loader-number
            className="text-[clamp(72px,12vw,180px)] font-bold leading-[0.9] tracking-[-0.07em]"
          >
            00%
          </div>
          <div
            data-loader-label
            className="mt-4.5 font-mono text-[9px] tracking-[0.16em] sm:text-[11px]"
          >
            INITIALIZING PORTFOLIO
          </div>
        </div>

        <div className="flex justify-between font-mono text-[9px] tracking-[0.08em] sm:text-[11px]">
          <span>SOFTWARE ENGINEER</span>
          <span>PLEASE WAIT</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
