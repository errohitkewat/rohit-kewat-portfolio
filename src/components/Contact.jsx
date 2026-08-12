import { useRef } from "react";
import useContactAnimation from "../hooks/useContactAnimation";

const Contact = () => {

  const container = useRef(null);
  useContactAnimation(container);

  return (
    <section
      ref={container}
      id="contact"
      data-contact
      className=" relative min-h-screen overflow-hidden bg-[#111] px-5 py-24 text-[#f7f7f5] sm:px-8 sm:py-28 lg:px-12"
    >
      {/* HEADER */}

      <div
        data-contact-label
        className="mb-16 sm:mb-20 lg:mb-24"
      >
        <p className="font-mono text-[10px] tracking-[0.12em] sm:text-xs">
          05 / CONTACT
        </p>
      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-6xl">
        <p
          data-contact-intro
          className=" max-w-4xl text-sm leading-relaxed text-white/50 sm:text-base lg:text-lg"
        >
          Have a project in mind or want to work together?
        </p>

        <h2
          data-contact-heading
          className=" mt-6 max-w-6xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl xl:text-9xl"
        >
          Let's build
          <br />
          something.
        </h2>

        {/* EMAIL */}

        <div
          data-contact-email
          className=" mt-12 sm:mt-16 lg:mt-20 "
        >
          <p className="mb-3 font-mono text-[10px] tracking-[0.12em] text-white/40 sm:text-xs">
            GET IN TOUCH
          </p>

          <a
            href="mailto:rohitkewat.er@email.com"
            className=" inline-block border-b border-white/40 pb-1 text-md transition-colors duration-300 hover:border-white sm:text-lg lg:text-xl"
          >
            rohitkewat.er@email.com
          </a>
        </div>
      </div>

      {/* FOOTER */}

      <div
        data-contact-footer
        className=" absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[8px] tracking-[0.1em] text-white/50 sm:left-8 sm:right-8 sm:text-[10px] lg:left-12 lg:right-12"
      >
        <span>AVAILABLE FOR FREELANCE</span>
        <a href="#top" className="transition-opacity duration-300 hover:opacity-50" >
          BACK TO TOP ↑
        </a>
        <span>05</span>
      </div>
    </section>
  );
};

export default Contact;