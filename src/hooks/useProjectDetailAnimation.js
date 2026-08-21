import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useProjectDetailAnimation = (container) => {
  useGSAP(
    () => {
      const q = gsap.utils.selector(container);

      const sequence = [
        "[data-project-back]",
        "[data-project-meta]",
        "[data-project-title]",
        "[data-project-description]",
        "[data-project-image]",
        "[data-project-info]",
        "[data-project-overview]",
        "[data-project-challenge]",
        "[data-project-tech]",
        "[data-project-features]",
        "[data-project-learnings]",
        "[data-project-links]",
        "[data-project-next]",
      ];

      gsap.set(q(sequence), {
        opacity: 0,
        y: 25,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.7,
        },
      });

      sequence.forEach((selector, index) => {
        tl.to(
          q(selector),
          {
            opacity: 1,
            y: 0,
            ease: selector === "[data-project-title]" || selector === "[data-project-image]"
              ? "power4.out"
              : "power3.out",
            duration: selector === "[data-project-title]" || selector === "[data-project-image]"
              ? 0.9
              : 0.7,
          },
          index === 0 ? 0 : "-=0.45"
        );
      });
    },
    {
      scope: container,
    }
  );
};

export default useProjectDetailAnimation;
