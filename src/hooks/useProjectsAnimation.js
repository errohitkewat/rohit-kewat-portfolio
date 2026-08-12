import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProjectsAnimation = (container) => {
  useGSAP(
    () => {
      const section = container.current;

      const cards = gsap.utils.toArray("[data-project-card]");
      const heading = section?.querySelector("[data-project-heading]");
      const label = section?.querySelector("[data-project-label]");

      if (!section || !cards.length) return;

      /*
       * ========================================
       * INITIAL STATES
       * ========================================
       */

      // Heading hidden initially
      gsap.set(label, {
        y: 25,
        opacity: 0,
      });

      gsap.set(heading, {
        y: 60,
        opacity: 0,
      });

      // First project hidden initially
      gsap.set(cards[0], {
        y: 80,
        scale: 0.96,
        opacity: 0,
        zIndex: 1,
      });

      // Remaining projects stay below
      cards.slice(1).forEach((card, index) => {
        gsap.set(card, {
          y: "110vh",
          scale: 1,
          opacity: 1,
          zIndex: index + 2,
        });
      });

      /*
       * ========================================
       * 1. SECTION ENTER ANIMATION
       *
       * Starts when section reaches 30%
       * of viewport.
       * ========================================
       */

      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          // Section reaches 30% viewport
          start: "top 70%",

          once: true,
        },
      });

      enterTl
        .to(label, {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        })
        .to(
          heading,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .to(
          cards[0],
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        );

      /*
       * ========================================
       * 2. PROJECT SCROLL ANIMATION
       *
       * ONLY PROJECT 2, 3...
       * ========================================
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: `+=${(cards.length - 1) * 1200}`,

          scrub: 0.8,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,

          fastScrollEnd: true,

          snap: false,
        },
      });

      /*
       * Project 2 → Project 3 → Project 4
       */

      cards.slice(1).forEach((card) => {
        tl.to(card, {
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    },
    {
      scope: container,
  });
};

export default useProjectsAnimation;