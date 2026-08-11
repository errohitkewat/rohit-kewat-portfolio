const Navbar = () => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-4">
      <a
        href="#top"
        className="text-2xl font-extrabold tracking-[-0.08em] transition-opacity duration-200 hover:opacity-50"
      >
        RK.
      </a>

      <div className="flex gap-4 font-mono text-[12px] tracking-[0.08em] sm:gap-7 sm:text-[11px]">
        <a className="transition-opacity duration-200 hover:opacity-50" href="#work">
          WORK
        </a>
        <a className="transition-opacity duration-200 hover:opacity-50" href="#about">
          ABOUT
        </a>
        <a className="transition-opacity duration-200 hover:opacity-50" href="#contact">
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;



