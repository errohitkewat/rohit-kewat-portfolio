import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <nav
      className={`fixed text-black left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-4 transition-all duration-300
        ${ scrolled ? "border-b border-white/10 bg-[#111]/90 backdrop-blur-lg text-white" : "bg-transparent" }
      `}
    >
      {/* LOGO */}

      <a href="/#top" className="text-2xl font-extrabold tracking-[-0.08em] transition-opacity duration-200 hover:opacity-50" >
        RK.
      </a>

      {/* NAVIGATION */}

      <div className="flex gap-4 font-mono text-[12px] tracking-[0.08em] sm:gap-7 sm:text-[11px]">

        <a href="/#work" className="transition-opacity duration-200 hover:opacity-50" >
          WORK
        </a>

        <a href="/#about" className="transition-opacity duration-200 hover:opacity-50" >
          ABOUT
        </a>

        <a href=" /#contact"className="transition-opacity duration-200 hover:opacity-50">
          CONTACT
        </a>

      </div>
    </nav>
  );
};

export default Navbar;