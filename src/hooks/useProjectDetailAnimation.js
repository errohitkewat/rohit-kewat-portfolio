import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useProjectDetailAnimation = (container) => {
  useGSAP(
    () => {
      const q = gsap.utils.selector(container);

      // Initial state
      gsap.set(
        [
          q("[data-project-back]"),
          q("[data-project-meta]"),
          q("[data-project-title]"),
          q("[data-project-description]"),
          q("[data-project-image]"),
          q("[data-project-overview]"),
          q("[data-project-tech]"),
          q("[data-project-features]"),
          q("[data-project-links]"),
        ],
        {
          opacity: 0,
          y: 25,
        }
      );

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Header
      tl.to(q("[data-project-back]"), {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })

        // Category + year
        .to(
          q("[data-project-meta]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        )

        // Project title
        .to(
          q("[data-project-title]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.25"
        )

        // Description
        .to(
          q("[data-project-description]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.45"
        )

        // Image
        .to(
          q("[data-project-image]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        )

        // Overview
        .to(
          q("[data-project-overview]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.35"
        )

        // Technologies
        .to(
          q("[data-project-tech]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35"
        )

        // Features
        .to(
          q("[data-project-features]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35"
        )

        // Links
        .to(
          q("[data-project-links]"),
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        );
    },
    {
      scope: container,
    }
  );
};

export default useProjectDetailAnimation;