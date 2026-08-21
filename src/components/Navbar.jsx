import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300
        ${
          scrolled || open
            ? "border-b border-white/10 bg-[#111]/90 text-white backdrop-blur-lg"
            : "bg-transparent text-black"
        }
      `}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-4">
        {/* LOGO */}

        <a
          href="/#top"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-[-0.08em] transition-opacity duration-200 hover:opacity-50"
        >
          RK.
        </a>

        {/* NAVIGATION (desktop) */}

        <div className="hidden items-center gap-7 font-mono text-[11px] tracking-[0.08em] sm:flex">
          <a href="/#work" className="transition-opacity duration-200 hover:opacity-50">
            WORK
          </a>

          <a href="/#about" className="transition-opacity duration-200 hover:opacity-50">
            ABOUT
          </a>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `transition-opacity duration-200 hover:opacity-50 ${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            RESUME
          </NavLink>

          <a href="/#contact" className="transition-opacity duration-200 hover:opacity-50">
            CONTACT
          </a>
        </div>

        {/* HAMBURGER (mobile) */}

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span
            className={`h-px w-5 bg-current transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-all duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : "opacity-100"
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU PANEL */}

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out sm:hidden ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 pb-5 font-mono text-xs tracking-[0.08em]">
          <a href="/#work" onClick={closeMenu} className="border-t border-white/10 py-3">
            WORK
          </a>

          <a href="/#about" onClick={closeMenu} className="border-t border-white/10 py-3">
            ABOUT
          </a>

          <NavLink
            to="/resume"
            onClick={closeMenu}
            className={({ isActive }) =>
              `border-t border-white/10 py-3 transition-opacity duration-200 hover:opacity-50 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            RESUME
          </NavLink>

          <a href="/#contact" onClick={closeMenu} className="border-t border-white/10 py-3">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
