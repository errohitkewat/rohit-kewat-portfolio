import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutAnimation = (container) => {
  useGSAP(
    () => {
      const q = gsap.utils.selector(container);

      const label = q("[data-about-label]");
      const small = q("[data-about-small]");
      const text = q("[data-about-text]");
      const details = q("[data-about-details]");

      if (!text.length) return;

      // Initial state
      gsap.set([label, small, text, details], {
        opacity: 0,
        y: 30,
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(label, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .to(
          small,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          text,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          details,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );
    },
    {
      scope: container,
    }
  );
};

export default useAboutAnimation;