import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useContactAnimation = (container) => {
  useGSAP(
    () => {
      const section = container.current;

      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      tl.from("[data-contact-label]", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          "[data-contact-intro]",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          "[data-contact-heading]",
          {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          "[data-contact-email]",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          "[data-contact-footer]",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    },
    {
      scope: container,
  });
};

export default useContactAnimation;